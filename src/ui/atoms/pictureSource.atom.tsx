import { UploadFile } from '../../graphql/types/uploadFile.types';

interface PictureSourceProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  sources: UploadFile;
  className?: string;
}

const PictureSource: React.FC<PictureSourceProps> = ({ sources, className = '', ...props }) => (
  <img
    {...props}
    srcSet={`${sources.formats.small.url} 799w, ${sources.formats.medium.url} 1199w, ${sources.formats.large.url} 1200w`}
    sizes="(max-width: 799px) 100vw, (min-width: 800px) and (max-width: 1199px) 50vw, 25vw"
    src={sources.formats.thumbnail.url}
    alt={sources.formats.thumbnail.name}
    className={`size-full object-cover ${className}`}
  />
);

export default PictureSource;
