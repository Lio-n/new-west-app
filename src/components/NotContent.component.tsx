import Heading from '../ui/atoms/typographies/heading.atom';

const NotContent = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`grid place-content-center justify-items-center gap-8 ${className}`}>
      <Heading weight="font-semibold" className="text-center">
        No content at the moment!
      </Heading>
      <img className="h-80" src="https://res.cloudinary.com/lio-n/image/upload/v1711664500/dancing_dock_ipvu6x.gif" alt="dancing_duck.gif" />
    </div>
  );
};

export default NotContent;
