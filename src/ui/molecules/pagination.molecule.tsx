import { Link } from 'react-router-dom';
import ChevronIcon from '../atoms/icons/chevron.icon';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const sharedStyles =
  'rounded-full flex items-center justify-center px-3 h-8 ms-0 leading-tight  text-blueberry-600/[.90] bg-white border border-gray-300 hover:text-blueberry-700 hover:bg-blueberry-600/[.20]';

const Pagination: React.FC<PaginationProps> = ({ pageCount, currentPage, onPageChange }) => {
  const handlePageChange = (page: number) => {
    if (page !== 0) onPageChange(page);
  };

  return (
    <nav aria-label="Page navigation" className="my-0 mx-auto w-fit">
      <ul className="flex items-center -space-x-px h-8 text-sm gap-1">
        <li>
          <Link
            to="#"
            className={`${sharedStyles} ${currentPage === 1 || currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <ChevronIcon direction="left" />
          </Link>
        </li>
        {[...Array(pageCount)].map((_, index) => (
          <li key={index}>
            <Link
              to="#"
              className={`rounded-full flex items-center justify-center px-3 h-8 leading-tight ${
                index + 1 === currentPage
                  ? 'text-blueberry-600 bg-blueberry-600/[.10] border border-blueberry-600 hover:bg-blueberry-600/[.20] hover:text-blueberry-700'
                  : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-blueberry-600'
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="#"
            className={`${sharedStyles} ${currentPage === pageCount ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <ChevronIcon direction="right" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
