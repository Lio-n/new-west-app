import { useEffect, useMemo, useRef, useState } from 'react';
import { UploadFile } from '../../graphql/types/uploadFile.types';

interface PictureSourceProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  sources: UploadFile;
  className?: string;
}

const PictureSource: React.FC<PictureSourceProps> = ({ sources, className = '', ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Disconnect the observer once image is visible to avoid unnecessary checks
        observer.disconnect();
      }
    });
  };

  const observer = useMemo(() => {
    return new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Adjust as needed
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    // Cleanup function
    return () => observer.disconnect();
  }, [imgRef, observer]);

  return (
    <img
      {...props}
      ref={imgRef}
      srcSet={isVisible ? `${sources.formats.small.url} 799w, ${sources.formats.medium.url} 1199w, ${sources.formats.large.url} 1200w` : ''}
      sizes={isVisible ? '(max-width: 799px) 100vw, (min-width: 800px) and (max-width: 1199px) 50vw, 25vw' : ''}
      src={isVisible ? sources.formats.thumbnail.url : ''}
      alt={sources.formats.thumbnail.name}
      className={`size-full object-cover ${className}`}
      loading="lazy"
    />
  );
};

export default PictureSource;
