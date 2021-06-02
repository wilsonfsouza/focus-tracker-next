import { query } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession, Session } from 'next-auth/client';
import { fauna } from '../../services/fauna';

type User = {
  ref: {
    id: string;
  },
  data: {
    email: string;
    level: string;
    currentExperience: string;
    challengesCompleted: string;
  }
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  let session: Session;

  switch (request.method) {
    case 'GET':
      session = await getSession({ req: request });

      const user = await fauna.query<User>(
        query.Get(
          query.Match(
            query.Index('user_by_email'),
            query.Casefold(session.user.email)
          )
        )
      );

      const userData = {
        level: user.data.level,
        currentExperience: user.data.currentExperience,
        challengesCompleted: user.data.challengesCompleted,
      }

      return response.status(200).json({ user: userData });

    case 'PUT':
      session = await getSession({ req: request });

      const userRef = await fauna.query(
        query.Select(
          "ref",
          query.Get(
            query.Match(
              query.Index('user_by_email'),
              query.Casefold(session.user.email)
            )
          ))
      );

      const { level, currentExperience, challengesCompleted } = request.body;

      const updatedUser = {
        level,
        currentExperience,
        challengesCompleted,
      }

      await fauna.query(
        query.Update(
          query.Ref(query.Collection('users'), userRef),
          {
            data: updatedUser
          }
        )
      );

      return response.status(200).json({ user: updatedUser });

    default:
      response.setHeader('Allow', ['GET', 'PUT']);
      response.status(405).end('Method not allowed');
      return;
  }
}
