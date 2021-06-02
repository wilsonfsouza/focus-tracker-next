import { query } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { fauna } from '../../../services/fauna';

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user'
    }),
  ],
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    verificationOptions: {
      maxTokenAge: `${2 * 60 * 60}s`, // 2 hours
      algorithms: ['HS512']
    }
  },
  callbacks: {
    async signIn(user, account, profile) {
      const { email } = user;

      try {
        await fauna.query(
          query.If(
            query.Not(
              query.Exists(
                query.Match(
                  query.Index('user_by_email'),
                  query.Casefold(email)
                )
              )
            ),
            query.Create(
              query.Collection('users'),
              { data: { email } }
            ),
            query.Get(
              query.Match(
                query.Index('user_by_email'),
                query.Casefold(email)
              )
            )
          )
        )

        return true;
      } catch {
        return false;
      }
    },

    redirect: (_: string, _2: string) => {
      return Promise.resolve(process.env.NEXTAUTH_URL as string)
    }
  }
}

export default (request: NextApiRequest, response: NextApiResponse) => {
  NextAuth(request, response, options)
}
