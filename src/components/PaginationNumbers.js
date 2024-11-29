const PaginationNumbers = ({ setCurrentPage, currentPage }) => {
    // Function to determine if a page is the current one
    const getButtonClass = (page) => {
      return page === currentPage
        ? "cursor-pointer px-2 py-1 bg-blue-500 text-white" // Highlight current page
        : "cursor-pointer px-2 py-1"; // Default style for other pages
    };
  
    return (
      <>
        <span 
          onClick={() => setCurrentPage(1)} 
          className={getButtonClass(1)}
        >
          1
        </span>
        <span 
          onClick={() => setCurrentPage(2)} 
          className={getButtonClass(2)}
        >
          2
        </span>
        <span 
          onClick={() => setCurrentPage(3)} 
          className={getButtonClass(3)}
        >
          3
        </span>
        <span 
          onClick={() => setCurrentPage(4)} 
          className={getButtonClass(4)}
        >
          4
        </span>
        <span 
          onClick={() => setCurrentPage(5)} 
          className={getButtonClass(5)}
        >
          5
        </span>
      </>
    );
  };
  
  export default PaginationNumbers;
  