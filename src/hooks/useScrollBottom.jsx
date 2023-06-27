import { useState, useEffect } from 'react';

export default function useScrollBottom(ref) {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const handleScroll = () => {
      if (element) {
        const { scrollTop, clientHeight, scrollHeight } = element;
        setIsBottom(scrollTop + clientHeight + 250 >= scrollHeight);
      }
    };

    element.addEventListener('scroll', handleScroll);

    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return isBottom;
}
