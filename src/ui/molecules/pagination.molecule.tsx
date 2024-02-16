import ChevronIcon from "../atoms/icons/chevron.icon";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, currentPage, onPageChange }) => {
  const handlePageChange = (page: number) => {
    !page && onPageChange(page);
  };

  return (
    <nav aria-label="Page navigation" className="my-0 mx-auto w-fit">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a
            href="#"
            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight  text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === 1 || currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange(currentPage - 1)}>
            <ChevronIcon direction="left" />
          </a>
        </li>
        {[...Array(pageCount)].map((_, index) => (
          <li key={index}>
            <a
              href="#"
              className={`flex items-center justify-center px-3 h-8 leading-tight ${
                index + 1 === currentPage
                  ? "text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700"
                  : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              }`}
              onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight  text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700${
              currentPage === pageCount ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange(currentPage + 1)}>
            <ChevronIcon direction="right" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
