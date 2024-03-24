import { UploadFile } from "../../graphql/types/uploadFile.types";

interface PictureSourceProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  sources: UploadFile;
  className?: string;
}

const PictureSource: React.FC<PictureSourceProps> = ({ sources, className = "", ...props }) => (
  <picture {...props}>
    {sources.formats.small.url && <source srcSet={sources.formats.small.url} media="(max-width: 799px)" />}
    {sources.formats.medium.url && <source srcSet={sources.formats.medium.url} media="(min-width: 800px) and (max-width: 1199px)" />}
    {sources.formats.large.url && <source srcSet={sources.formats.large.url} media="(min-width: 1200px)" />}
    <img src={sources.formats.thumbnail.url} alt={sources.formats.thumbnail.name} className={`size-full object-cover ${className}`} />
  </picture>
);

export default PictureSource;
