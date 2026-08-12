import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import introHorizontalMp4 from '../src/assets/videos/intro-horizontal.mp4';
import introHorizontalWebm from '../src/assets/videos/intro-horizontal.webm';
import introVerticalMp4 from '../src/assets/videos/intro-vertical.mp4';
import introVerticalWebm from '../src/assets/videos/intro-vertical.webm';

const FAILSAFE_MS = 6000;

function isMobileViewport(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
}

export const IntroLoader: React.FC = () => {
  const [phase, setPhase] = useState<'playing' | 'fading' | 'done'>('playing');
  const [isVertical] = useState(isMobileViewport);
  // Cache-busting so every mount forces a fresh network fetch instead of
  // relying on the browser's disk cache, which can corrupt playback of
  // large range-requested video on repeat loads.
  const [cacheBust] = useState(() => Date.now());
  const [percent, setPercent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const startRef = useRef(0);
  const triedFallbackRef = useRef(false);

  const mp4Src = isVertical ? introVerticalMp4 : introHorizontalMp4;
  const webmSrc = isVertical ? introVerticalWebm : introHorizontalWebm;

  const finish = () => {
    setPhase((current) => (current === 'playing' ? 'fading' : current));
  };

  useEffect(() => {
    // Never let a stalled or undelivered video block the site indefinitely.
    const failsafe = window.setTimeout(finish, FAILSAFE_MS);
    return () => window.clearTimeout(failsafe);
  }, []);

  useEffect(() => {
    if (phase !== 'fading') return;
    const timeout = window.setTimeout(() => setPhase('done'), 500);
    return () => window.clearTimeout(timeout);
  }, [phase]);

  useLayoutEffect(() => {
    // Safari can miss the `muted` prop's timing and treat the video as
    // unmuted when it evaluates autoplay eligibility, silently blocking
    // autoplay and showing a native play button instead. Setting it
    // imperatively and kicking off playback explicitly avoids that.
    //
    // The source is also set imperatively here (instead of <source> children)
    // because a decode failure partway through an already-started fetch is
    // reported by some browsers as an error on the <video> element itself,
    // without automatically falling back to a sibling <source> -- automatic
    // fallback only applies during the initial resource-selection step.
    // Setting src directly lets handleError below retry with the webm copy.
    const video = videoRef.current;
    if (!video) return;
    triedFallbackRef.current = false;
    video.muted = true;
    video.defaultMuted = true;
    video.src = `${mp4Src}?v=${cacheBust}`;
    video.play().catch(() => {
      // Still blocked (e.g. Low Power Mode) -- the failsafe timeout above
      // moves past the intro regardless.
    });
  }, [isVertical, cacheBust, mp4Src]);

  const handleError = () => {
    const video = videoRef.current;
    if (video && !triedFallbackRef.current) {
      triedFallbackRef.current = true;
      video.src = `${webmSrc}?v=${cacheBust}`;
      video.play().catch(finish);
      return;
    }
    finish();
  };

  // Code-rendered percentage counter, replacing the blurry number that used
  // to be baked into the video pixels. Driven by real playback progress
  // (video.currentTime / duration) once metadata is known, so it reaches
  // exactly 100% right as the intro ends -- falling back to elapsed time
  // against the failsafe window before that. Steps in fast uneven jumps
  // rather than a smooth linear count, for a spinning-tally feel.
  useEffect(() => {
    if (phase !== 'playing') return;
    startRef.current = performance.now();
    let raf = 0;
    const tick = () => {
      const video = videoRef.current;
      const target =
        video && video.duration && isFinite(video.duration)
          ? (video.currentTime / video.duration) * 100
          : ((performance.now() - startRef.current) / FAILSAFE_MS) * 100;
      setPercent((prev) => (target <= prev ? prev : Math.min(target, prev + 1 + Math.random() * 4)));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  if (phase === 'done') return null;

  const displayPercent = Math.min(100, Math.round(percent));

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#f5f3ed] transition-opacity duration-500 ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={finish}
        onError={handleError}
        className="h-full w-full object-cover"
      />

      <div
        className={`absolute z-10 font-sans font-light tabular-nums tracking-wide text-white select-none pointer-events-none ${
          isVertical ? 'top-6 left-6 text-2xl' : 'left-8 top-1/2 -translate-y-1/2 text-3xl md:text-4xl'
        }`}
        style={{ textShadow: '0 1px 12px rgba(0,0,0,0.35)' }}
      >
        {String(displayPercent).padStart(2, '0')}%
      </div>
    </div>
  );
};
