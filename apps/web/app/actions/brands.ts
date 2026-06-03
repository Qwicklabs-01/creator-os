"use server";

import { prisma } from "@creator-os/database";
import { createClient } from "../../utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function getBrands() {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  try {
    // A brand belongs to an organization. We need to find organizations the user is a part of.
    const userOrgs = await prisma.organizationUser.findMany({
      where: { userId: session.user.id },
      select: { organizationId: true }
    });

    const orgIds = userOrgs.map(org => org.organizationId);

    const brands = await prisma.brand.findMany({
      where: {
        organizationId: { in: orgIds }
      },
      include: {
        _count: {
          select: { campaigns: { where: { status: 'active' } } }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return brands.map(brand => ({
      ...brand,
      activeCampaigns: brand._count.campaigns,
      status: "active", // We don't have a status on Brand schema currently, mocking it
      color: "from-primary/20 to-secondary/5"
    }));

  } catch (error) {
    console.error("Failed to fetch brands:", error);
    return [];
  }
}

export async function createBrand(formData: FormData) {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const brandVoice = formData.get("brandVoice") as string;

  if (!name) throw new Error("Brand name is required");

  // Get user's first organization or create one if they don't have it
  let userOrg = await prisma.organizationUser.findFirst({
    where: { userId: session.user.id }
  });

  if (!userOrg) {
    const newOrg = await prisma.organization.create({
      data: {
        name: `${session?.user?.user_metadata?.full_name || session?.user?.email || 'User'}'s Organization`,
        users: {
          create: {
            userId: session.user.id,
            role: "owner"
          }
        }
      }
    });
    userOrg = { userId: session.user.id, organizationId: newOrg.id, id: 'temp', role: 'owner', createdAt: new Date() };
  }

  await prisma.brand.create({
    data: {
      name,
      description,
      brandVoice,
      organizationId: userOrg.organizationId
    }
  });

  revalidatePath("/dashboard/brands");
  return { success: true };
}
