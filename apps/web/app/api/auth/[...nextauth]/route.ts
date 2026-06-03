import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@creator-os/database";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any, // Type cast to any because of version mismatch issues between NextAuth and Prisma adapter
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (user) {
          return { id: user.id, email: user.email, name: user.name };
        }

        const newUser = await prisma.user.create({
          data: {
            email: credentials.email,
            name: credentials.email.split('@')[0], 
            passwordHash: credentials.password 
          }
        });

        return { id: newUser.id, email: newUser.email, name: newUser.name };
      },
    }),
    CredentialsProvider({
      id: "telegram",
      name: "Telegram",
      credentials: {
        // The data returned from Telegram widget
        id: { label: "ID", type: "text" },
        first_name: { label: "First Name", type: "text" },
        username: { label: "Username", type: "text" },
        hash: { label: "Hash", type: "text" },
      },
      async authorize(credentials) {
        // Here you would verify the hash against the Telegram Bot Token
        // using a standard HMAC SHA256 check.
        // E.g.: checkTelegramAuthorization(credentials, process.env.TELEGRAM_BOT_TOKEN)
        
        if (!credentials?.id) return null;
        
        return {
          id: `tg_${credentials.id}`,
          name: credentials.first_name,
          email: `${credentials.username || credentials.id}@telegram.local`, // Mock email for DB
        };
      },
    }),
    CredentialsProvider({
      id: "phone",
      name: "Mobile Number",
      credentials: {
        phone: { label: "Phone Number", type: "text" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        // Here you would verify the OTP sent to the user's phone
        // via a service like Twilio, MessageBird, or custom SMS gateway.
        
        if (!credentials?.phone || !credentials?.otp) return null;
        
        // Mock successful OTP check for any OTP (in a real app, verify properly)
        if (credentials.otp === "123456") {
          return {
            id: `phone_${credentials.phone}`,
            name: credentials.phone,
            email: `${credentials.phone}@phone.local`, // Mock email
          };
        }
        
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "MOCK_GOOGLE_ID",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "MOCK_GOOGLE_SECRET",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "MOCK_GITHUB_ID",
      clientSecret: process.env.GITHUB_SECRET || "MOCK_GITHUB_SECRET",
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || "MOCK_DISCORD_ID",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || "MOCK_DISCORD_SECRET",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        (session.user as any).id = token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
