import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: "",
    }),
  ],
  database: process.env.DB_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: "alskndlasnd",
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      return session;
    },
  },
});
