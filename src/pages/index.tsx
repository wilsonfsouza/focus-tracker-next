import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import CompletedChallenges from '../components/CompletedChallenges';
import CountDown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import ChallengeBox from '../components/ChallengeBox';
import SEO from '../components/SEO';


import { Container, Main, Section, LeftContainer, RightContainer } from '../styles/pages/Home';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import SideBar from '../components/SideBar';
import withAuth from '../hoc/withAuth';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home: React.FunctionComponent<HomeProps> = ({ level, currentExperience, challengesCompleted }) => {
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
                <Profile />
                <CompletedChallenges />
                <CountDown />
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
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
