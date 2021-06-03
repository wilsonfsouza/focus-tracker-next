import { GetStaticProps } from 'next';
import { signIn } from 'next-auth/client';
import { AiFillGithub } from 'react-icons/ai';

import SEO from '../../components/SEO';
import BackgroundLogo from '../../assets/logo-background.svg';

import { Container, BackgroundContainer, MainSection, LoginContainer, SignInButton } from '../../styles/pages/Login';


export default function Login() {
  return (
    <Container>
      <SEO title="Login" />

      <BackgroundContainer>
        <BackgroundLogo />
      </BackgroundContainer>

      <LoginContainer>
        <MainSection>
          <img src="/logo-full.svg" alt="Smart.it" />

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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24, // 1 day
  }
}
