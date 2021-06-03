import { screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { getSession } from 'next-auth/client';
import { getUserData } from '../../pages/api/_lib/getUserData';
import { getServerSideProps } from '../../pages';

jest.mock('next-auth/client');

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
});

jest.mock('../../pages/api/_lib/getUserData');

describe('Home page', () => {
  it('should load initial data', async () => {
    const mockedSession = mocked(getSession);
    mockedSession.mockResolvedValueOnce({
      user: { name: 'Jane Doe', email: 'janedoe@example.com' },
      expires: 'fake-expires'
    });

    const mockedUserData = mocked(getUserData);
    mockedUserData.mockResolvedValueOnce({
      level: "1",
      challengesCompleted: "0",
      currentExperience: "0"
    });

    const req = { cookies: { theme: 'dark' } }

    const response = await getServerSideProps({ req } as any);

    const expectedResponse = {
      props: {
        level: 1,
        currentExperience: 0,
        challengesCompleted: 0,
        theme: 'dark'
      }
    }

    expect(response).toEqual(
      expect.objectContaining(expectedResponse)
    );
  });

  it('should load initial data with light theme when the theme is not stored in the cookies yet', async () => {
    const mockedSession = mocked(getSession);
    mockedSession.mockResolvedValueOnce({
      user: { name: 'Jane Doe', email: 'janedoe@example.com' },
      expires: 'fake-expires'
    });

    const mockedUserData = mocked(getUserData);
    mockedUserData.mockResolvedValueOnce({
      level: "1",
      challengesCompleted: "0",
      currentExperience: "0"
    });

    const req = { cookies: {} }

    const response = await getServerSideProps({ req } as any);

    const expectedResponse = {
      props: {
        level: 1,
        currentExperience: 0,
        challengesCompleted: 0,
        theme: 'light'
      }
    }

    expect(response).toEqual(
      expect.objectContaining(expectedResponse)
    );
  });
})
