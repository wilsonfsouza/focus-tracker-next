import React from 'react';

import { GetStaticProps, NextPage } from 'next';
import { AiFillGithub } from 'react-icons/ai';
import { useAuth } from '../../contexts/auth';

import SEO from '../../components/SEO';
import BackgroundLogo from '../../assets/logo-background.svg';
import FullLogo from '../../assets/logo-full.svg';

import { Container, BackgroundContainer, MainSection, LoginContainer, SignInButton } from '../../styles/pages/Login';


const Login: NextPage = () => {
  const { signIn } = useAuth();
  return (
    <Container>
      <SEO title="Login" />

      <BackgroundContainer>
        <BackgroundLogo />
      </BackgroundContainer>

      <LoginContainer>
        <MainSection>
          <FullLogo />

          <h2>Welcome</h2>

          <div>
            <AiFillGithub size={40} />
            <p>Sign in with your GitHub to start</p>
          </div>

          <SignInButton onClick={() => signIn('github')}>
            Sign in
        </SignInButton>
        </MainSection>
      </LoginContainer>
    </Container>
  );
}

export default Login;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24 * 30, // 1 month
  }
}
