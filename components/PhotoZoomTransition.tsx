import React from 'react';
import { motion } from 'motion/react';

interface PhotoZoomTransitionProps {
  rect: { top: number; left: number; width: number; height: number };
  imageUrl: string;
  onComplete: () => void;
}

export const PhotoZoomTransition: React.FC<PhotoZoomTransitionProps> = ({ rect, imageUrl, onComplete }) => (
  <motion.div
    className="fixed z-[200] overflow-hidden bg-stone-200 pointer-events-none"
    initial={{ top: rect.top, left: rect.left, width: rect.width, height: rect.height }}
    animate={{ top: 0, left: 0, width: '100vw', height: '100vh' }}
    transition={{ duration: 0.62, ease: [0.65, 0, 0.35, 1] }}
    onAnimationComplete={onComplete}
  >
    <motion.img
      src={imageUrl}
      alt=""
      className="w-full h-full object-cover"
      initial={{ filter: 'blur(0px)', scale: 1 }}
      animate={{ filter: ['blur(0px)', 'blur(6px)', 'blur(0px)'], scale: [1, 1.08, 1] }}
      transition={{ duration: 0.62, ease: 'easeInOut', times: [0, 0.5, 1] }}
    />
  </motion.div>
);
