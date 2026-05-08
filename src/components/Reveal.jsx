import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Reveal = ({ children, delay = 0, duration = 0.8, y = 30, opacity = 0, stagger = 0.1 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // We animate the children of the container
    const targets = Array.from(element.children).filter(child => child instanceof HTMLElement);

    let animation = null;

    if (targets.length > 0) {
      animation = gsap.fromTo(
        targets,
        {
          y: y,
          opacity: opacity,
        },
        {
          y: 0,
          opacity: 1,
          duration: duration,
          delay: delay,
          stagger: stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      if (animation) {
        if (animation.scrollTrigger) animation.scrollTrigger.kill();
        animation.kill();
      }
    };
  }, [delay, duration, y, opacity, stagger]);

  return (
    <div ref={containerRef} className="reveal-container">
      {children}
    </div>
  );
};

export default Reveal;
