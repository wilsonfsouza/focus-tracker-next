import { query } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession, Session } from 'next-auth/client';
import { fauna } from '../../services/fauna';
import AppError from './_lib/errors/AppError';

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

      if (!user) {
        throw new AppError('User does not exist.')
      }

      const userData = {
        level: user.data.level,
        currentExperience: user.data.currentExperience,
        challengesCompleted: user.data.challengesCompleted,
      }

      return response.status(200).json(userData);

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

      if (!userRef) {
        throw new AppError('User does not exist.')
      }

      const { level, currentExperience, challengesCompleted } = request.body;

      const updatedUser = {
        level,
        currentExperience,
        challengesCompleted,
      }

      await fauna.query(
        query.Update(
          userRef,
          {
            data: updatedUser
          }
        )
      );

      return response.status(200).json(updatedUser);

    default:
      response.setHeader('Allow', ['GET', 'PUT']);
      response.status(405).end('Method not allowed');
      return;
  }
}
