import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ totalMovies, setCount }) => {
  const handleChange = (data) => {
    setCount(data.selected + 1)
  };

  return (
    <div>
      <ReactPaginate
        previousLabel={`<`}
        nextLabel={`>`}
        breakLabel={`...`}
        pageCount={totalMovies / 10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handleChange}
        containerClassName={`pagination justify-content-center `}
        pageClassName={`page-item`}
        pageLinkClassName={`page-link`}
        previousClassName={`page-item`}
        previousLinkClassName={`page-link`}
        nextClassName={`page-item`}
        nextLinkClassName={`page-link`}
        breakClassName={`page-item`}
        breakLinkClassName={`page-link`}
        activeClassName={`active`}
      />
    </div>
  );
};

export default Pagination;
