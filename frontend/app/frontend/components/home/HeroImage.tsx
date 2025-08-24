import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import { AnimationItem } from 'lottie-web';

function HeroImage() {
  const container = useRef<HTMLDivElement | null>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    // Ensure the container ref is not null before loading the animation
    if (container.current) {
      animationInstance.current = Lottie.loadAnimation({
        container: container.current, // TypeScript now knows this is an HTMLDivElement
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../../../../../public/images/all.json'), // Ensure this path is correct
      });
    }

    // Cleanup: Destroy the animation instance on component unmount
    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={container} className="w-full h-auto max-w-[500px] mx-auto" style={{ height: '400px' }} />
  );
}

export default HeroImage;