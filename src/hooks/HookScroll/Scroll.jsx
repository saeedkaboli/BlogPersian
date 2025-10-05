import { useState, useEffect } from 'react';

// هوک سفارشی برای پیگیری اسکرول
export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition(); // مقدار اولیه

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
}