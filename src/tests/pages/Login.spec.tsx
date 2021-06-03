import { mocked } from 'ts-jest/utils';
import { getSession } from 'next-auth/client';
import { getStaticProps } from '../../pages/login';

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

describe('Login page', () => {
  it('should load initial data', async () => {
    const mockedSession = mocked(getSession);
    mockedSession.mockResolvedValueOnce(null);

    const response = await getStaticProps({});

    const revalidate = 60 * 60 * 24; // 1 day

    const expectedResponse = {
      props: {},
      revalidate,
    }

    expect(response).toEqual(
      expect.objectContaining(expectedResponse)
    );
  });
})
