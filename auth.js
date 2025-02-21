import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { ZodError } from "zod"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "./lib/zod"
// import { saltAndHashPassword } from "@/utils/password"
// import { getUserFromDb } from "@/utils/db"
 
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Credentials({
    credentials: {
      email: {},
      password: {},
    },
    authorize: async (credentials) => {
      try {
        let user = null

        const { email, password } = await signInSchema.parseAsync(credentials)
        const pwHash = saltAndHashPassword(password)
        user = await getUserFromDb(email, pwHash)
        if (!user) {
          throw new Error("Invalid credentials.")
        }
        return user
        } catch (error) {
          if (error instanceof ZodError) {
            return null}
          }
  },
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,

  })],
})