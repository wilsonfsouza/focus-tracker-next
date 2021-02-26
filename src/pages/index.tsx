import React from 'react';
import CompletedChallenges from '../components/CompletedChallenges';
import CountDown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

import Head from 'next/head';

import { Container, Section, LeftContainer } from '../styles/pages/Home';

const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Head>
        <title>Home | Focus Tracker</title>
      </Head>
      <ExperienceBar />

      <Section>
        <LeftContainer>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </LeftContainer>
        <div></div>
      </Section>
    </Container>
  )
}

export default Home;
