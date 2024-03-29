import { useState, useEffect, useRef } from 'react';

const useClickOutside = <T extends HTMLElement = HTMLElement>(initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { ref, isOpen, setIsOpen };
};

export default useClickOutside;
