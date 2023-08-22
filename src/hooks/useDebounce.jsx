import { useEffect, useState } from 'react';

export default function useDebounce(value, delay=1000) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(timer)
  }, [value])

  return debouncedValue
}