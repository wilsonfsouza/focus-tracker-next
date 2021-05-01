import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

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
    // signIn: (user: any, session: any) => {
    //   session.id = user.id;
    //   return Promise.resolve(session);
    // },
    // session: (session: any, user: any) => {
    //   session.id = user.id
    //   return Promise.resolve(session);
    // },
    // redirect: (_: string, _2: string) => {
    //   return Promise.resolve(process.env.NEXTAUTH_URL as string)
    // }
  }
}

export default (request: NextApiRequest, response: NextApiResponse) => {
  NextAuth(request, response, options)
}
