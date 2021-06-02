import { fauna } from "../../../services/fauna";
import { query } from 'faunadb';

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

export async function getUserData(email: string) {
  try {
    const user = await fauna.query<User>(
      query.Get(
        query.Match(
          query.Index('user_by_email'),
          query.Casefold(email)
        )
      )
    );

    const userData = {
      level: user.data.level,
      currentExperience: user.data.currentExperience,
      challengesCompleted: user.data.challengesCompleted,
    }

    return userData;

  } catch (err) {
    console.log(err);
    return null
  }
}
