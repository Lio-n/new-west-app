import { Link } from 'react-router-dom';

const Brand = ({ className }: { className?: string }) => (
  <Link to={'/'}>
    <img src="/NewWest_logo.svg" alt="Logo.svg" className={`w-14 h-14 ${className}`} />
  </Link>
);
export default Brand;
