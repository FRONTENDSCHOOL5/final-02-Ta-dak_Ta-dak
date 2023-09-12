import { useEffect } from 'react';

export default function useLazyLoading(observeImage, imgSrc) {
  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observeImage.current.src = imgSrc;
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    observeImage.current && observer.observe(observeImage.current);

    return () => {
      observer.disconnect();
    };
  }, [])
}

