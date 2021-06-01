import { waitFor } from '@testing-library/dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useContext } from 'react';
import { CountdownContext, CountdownProvider } from './CountdownContext';

jest.useFakeTimers();

describe('CountdownContext', () => {
  it('should initialize the context correctly', async () => {
    const wrapper = ({ children }) => <CountdownProvider>{children}</CountdownProvider>
    const { result } = renderHook(() => useContext(CountdownContext), {
      wrapper
    });

    expect(result.current.isActive).toBe(false);
    expect(result.current.time).toBe(1500);
    expect(result.current.minutes).toBe(25);
    expect(result.current.seconds).toBe(0);
    expect(result.current.hasFinished).toBe(false);
  });

  it('should start the countdown and decrement timer', async () => {
    const wrapper = ({ children }) => <CountdownProvider>{children}</CountdownProvider>
    const { result } = renderHook(() => useContext(CountdownContext), {
      wrapper
    });

    act(() => {
      result.current.startCountDown();
      jest.advanceTimersByTime(1000);
    })

    await waitFor(() => { });

    expect(result.current.isActive).toBe(true);
    expect(result.current.hasFinished).toBe(false);
    expect(result.current.minutes).toBe(24);
    expect(result.current.seconds).toBe(59);
  });

  it('should reset the countdown when pressing stop', async () => {
    const wrapper = ({ children }) => <CountdownProvider>{children}</CountdownProvider>
    const { result } = renderHook(() => useContext(CountdownContext), {
      wrapper
    });

    act(() => {
      result.current.startCountDown();
    })

    expect(result.current.isActive).toBe(true);
    expect(result.current.hasFinished).toBe(false);

    act(() => {
      result.current.resetCountDown();
    })

    await waitFor(() => { });

    expect(result.current.isActive).toBe(false);
    expect(result.current.hasFinished).toBe(false);
    expect(result.current.minutes).toBe(25);
    expect(result.current.seconds).toBe(0);
  });
})
