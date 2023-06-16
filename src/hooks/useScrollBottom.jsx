import { useState, useEffect } from 'react';

export default function useScrollBottom(ref) {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const { scrollTop, clientHeight, scrollHeight } = element;
        setIsBottom(scrollTop + clientHeight === scrollHeight);
      }
    };

    const scrollElement = ref.current;
    scrollElement.addEventListener('scroll', handleScroll);

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return isBottom;
}
