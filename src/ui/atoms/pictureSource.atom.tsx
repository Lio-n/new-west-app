import { useEffect, useMemo, useRef, useState } from 'react';
import { UploadFile } from '../../graphql/types/uploadFile.types';

interface PictureSourceProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  sources: UploadFile;
  sourceUsage?: Partial<{
    thumbnail: boolean;
    small: boolean;
    medium: boolean;
    large: boolean;
  }>;
  className?: string;
}

const PictureSource: React.FC<PictureSourceProps> = ({ sources, sourceUsage, className = '', ...props }) => {
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

  const { thumbnail, small, medium, large } = sources.formats;

  return (
    <picture {...props}>
      <>
        {sourceUsage?.thumbnail && thumbnail && <source srcSet={thumbnail.url} media="(max-width: 350px)" />}
        {sourceUsage?.small && small && (
          <source srcSet={small.url} media={`${sourceUsage?.medium ? '(min-width: 351px) and (max-width: 799px)' : '(min-width: 351px)'}`} />
        )}
        {sourceUsage?.medium && medium && (
          <source srcSet={medium.url} media={`${sourceUsage?.large ? '(min-width: 800px) and (max-width: 1199px)' : '(min-width: 800px)'}`} />
        )}
        {sourceUsage?.large && large && <source srcSet={large.url} media="(min-width: 1200px)" />}
      </>
      <img
        ref={imgRef}
        src={isVisible ? sources.formats.thumbnail.url : ''}
        alt={sources.formats.thumbnail.name}
        className={`size-full object-cover ${className}`}
        loading="lazy"
      />
    </picture>
  );
};

export default PictureSource;
