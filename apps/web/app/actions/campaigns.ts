"use server";

import { prisma } from "@creator-os/database";
import { createClient } from "../../utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function getCampaigns() {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  try {
    // Get user's orgs
    const userOrgs = await prisma.organizationUser.findMany({
      where: { userId: session.user.id },
      select: { organizationId: true }
    });

    const orgIds = userOrgs.map(org => org.organizationId);

    // Get campaigns belonging to brands in these orgs
    const campaigns = await prisma.campaign.findMany({
      where: {
        brand: {
          organizationId: { in: orgIds }
        }
      },
      include: {
        brand: { select: { name: true } },
        _count: { select: { posts: true } }
      },
      orderBy: { createdAt: 'desc' }
    });

    return campaigns.map(c => ({
      id: c.id,
      name: c.name,
      brand: c.brand.name,
      status: c.status,
      type: c.description || "General Campaign",
      platforms: ["Instagram", "Twitter"], // Mocked platforms since schema doesn't have it at campaign level
      generatedPosts: c._count.posts,
      progress: Math.floor(Math.random() * 100) // Mocked progress
    }));

  } catch (error) {
    console.error("Failed to fetch campaigns:", error);
    return [];
  }
}

export async function createCampaign(formData: FormData) {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const name = formData.get("name") as string;
  const brandId = formData.get("brandId") as string;
  const description = formData.get("description") as string;

  if (!name || !brandId) throw new Error("Name and Brand are required");

  await prisma.campaign.create({
    data: {
      name,
      brandId,
      description,
      status: "draft"
    }
  });

  revalidatePath("/dashboard/campaigns");
  return { success: true };
}
