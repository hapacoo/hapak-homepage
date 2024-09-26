import { useEffect, useState } from 'react';
import { Button } from './backtopStyle';
import {} from '@emotion/react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <Button onClick={scrollToTop} className={isVisible ? 'show' : ''}>
          TOP
        </Button>
      )}
    </>
  );
};

export default BackToTopButton;
