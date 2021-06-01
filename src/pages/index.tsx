import { GetServerSideProps, NextPage } from 'next';

import withAuth from '../hoc/withAuth';

import SEO from '../components/SEO';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { SideBar } from '../components/SideBar';

import { Container, Main, Section, LeftContainer, RightContainer } from '../styles/pages/Home';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  user?: {
    name: string;
    imageUrl: string;
  }
}

const Home: NextPage<HomeProps> = ({ user, level, currentExperience, challengesCompleted }) => {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <Container>
        <SEO title="Home" />

        <SideBar />
        <Main>
          <ExperienceBar />

          <CountdownProvider>
            <Section>
              <LeftContainer>
                <Profile user={user} />
                <CompletedChallenges />
                <Countdown />
              </LeftContainer>

              <RightContainer>
                <ChallengeBox />
              </RightContainer>
            </Section>
          </CountdownProvider>
        </Main>

      </Container>
    </ChallengesProvider>
  )
}

export default withAuth(Home);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted, theme } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      theme: theme ? theme : 'light',
    }
  }
}
