import React, { useState } from 'react';
import { motion } from 'motion/react';

interface PhotoZoomTransitionProps {
  imageUrl: string;
  onComplete: () => void;
}

export const PhotoZoomTransition: React.FC<PhotoZoomTransitionProps> = ({ imageUrl, onComplete }) => {
  // Snapshot the viewport once on mount: the box grows outward from the exact
  // center of the screen (where the 3 photos just converged), not from wherever
  // the clicked photo happened to be.
  const [{ vw, vh }] = useState(() => ({ vw: window.innerWidth, vh: window.innerHeight }));
  const startSize = Math.min(vw, vh) * 0.3;

  return (
    <motion.div
      className="fixed z-[200] overflow-hidden bg-stone-200 pointer-events-none"
      initial={{
        top: (vh - startSize) / 2,
        left: (vw - startSize) / 2,
        width: startSize,
        height: startSize,
        opacity: 0,
      }}
      animate={{ top: 0, left: 0, width: vw, height: vh, opacity: 1 }}
      transition={{
        top: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
        left: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
        width: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
        height: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.28, ease: 'easeOut' },
      }}
      onAnimationComplete={onComplete}
    >
      <motion.img
        src={imageUrl}
        alt=""
        className="w-full h-full object-cover"
        initial={{ filter: 'blur(3px)', scale: 1.12 }}
        animate={{ filter: ['blur(3px)', 'blur(5px)', 'blur(0px)'], scale: [1.12, 1.15, 1] }}
        transition={{ duration: 0.68, ease: 'easeInOut', times: [0, 0.45, 1] }}
      />
    </motion.div>
  );
};
