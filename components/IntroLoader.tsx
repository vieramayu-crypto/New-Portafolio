import React, { useEffect, useState } from 'react';
import introHorizontal from '../src/assets/videos/intro-horizontal.mp4';
import introVertical from '../src/assets/videos/intro-vertical.mp4';

const SESSION_KEY = 'mayu-intro-played';
const FAILSAFE_MS = 6000;

function hasPlayedThisSession(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

function isMobileViewport(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
}

export const IntroLoader: React.FC = () => {
  // Decided synchronously on first render so there is never a flash of the
  // Hero underneath before the intro overlay paints.
  const [phase, setPhase] = useState<'playing' | 'fading' | 'done'>(() =>
    hasPlayedThisSession() ? 'done' : 'playing'
  );
  const [isVertical] = useState(isMobileViewport);

  const finish = () => {
    setPhase((current) => (current === 'playing' ? 'fading' : current));
  };

  useEffect(() => {
    if (phase !== 'playing') return;
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      // sessionStorage unavailable (private mode, etc.) -- intro just plays every time, harmless.
    }

    // Never let a stalled or undelivered video block the site indefinitely.
    const failsafe = window.setTimeout(finish, FAILSAFE_MS);
    return () => window.clearTimeout(failsafe);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'fading') return;
    const timeout = window.setTimeout(() => setPhase('done'), 500);
    return () => window.clearTimeout(timeout);
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#f5f3ed] transition-opacity duration-500 ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={finish}
        onError={finish}
        className="h-full w-full object-cover"
        src={isVertical ? introVertical : introHorizontal}
      />
    </div>
  );
};
