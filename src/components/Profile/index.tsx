import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import LevelIcon from '../../assets/icons/level.svg'

import { Container } from '../../styles/components/Profile';

interface GitHubUser {
  name: string;
  imageUrl: string;
}

interface ProfileProps {
  user: GitHubUser;
}

const Profile: React.FunctionComponent<ProfileProps> = ({ user }) => {
  const { level } = useContext(ChallengesContext);
  return (
    <Container>
      <img src={user.imageUrl} alt={user.name} />
      <div>
        <strong>{user.name}</strong>
        <p>
          <LevelIcon />
          Level {level}
        </p>
      </div>
    </Container>
  );
}

export default Profile;
