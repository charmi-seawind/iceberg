import { useEffect } from 'react';
import { gsap } from 'gsap';

const useSmoothScroll = () => {
  useEffect(() => {
    let currentY = 0;
    let targetY = 0;
    const ease = 0.1;
    let animationId;

    const updateScroll = () => {
      targetY = window.scrollY;
      currentY += (targetY - currentY) * ease;
      
      window.scrollTo(0, currentY);
      
      if (Math.abs(targetY - currentY) > 0.1) {
        animationId = requestAnimationFrame(updateScroll);
      }
    };

    const handleScroll = () => {
      if (!animationId) {
        animationId = requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);
};

export default useSmoothScroll;