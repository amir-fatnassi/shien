import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./SearchBody.css";
import CardSearch from "../CardSearch/CardSearch";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../../redux/shopping/shopping-action";

const SearchBody = ({ location }) => {
  const [val, setVal] = useState(300);
  const [vall, setVall] = useState("");
  const [pageNumber, setPageNumber] = useState(0);  

  const dispatch = useDispatch();
  const path =
    location === "/homme" || window.location.pathname === "/search-homme"
      ? "homme"
      : "femme";
  useEffect(() => {
    dispatch(getProducts(path));
  }, [dispatch]);

  const { products } = useSelector((state) => state.shop);
  const productt = products.filter((el) => el.price < val);
  const producttt = productt.filter((el) =>
    vall === "" ? el : el.name.toLowerCase().includes(vall.toLowerCase())
  );

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayProduct = producttt
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((prod) => {
      return <CardSearch key={prod.id} product={prod} path={path} />;
    });

  const pageCount = Math.ceil(producttt.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="search-body-cont">
      <div className="searchBar">
        <div className="search search1">
          <i className="fas fa-search"></i>
          <input
            type="text"
            id="site-search"
            name=""
            onChange={(e) => setVall(e.target.value)}
            aria-label="Search through site content"
          />
        </div>
        <div className="search2">
          <span>Price {val} $</span>
          <input
            type="range"
            name="volume"
            onChange={(e) => setVal(e.target.value)}
            min="0"
            max="300"
            placeholder="300"
            className="slider"
          />
        </div>
      </div>
      <div className="search-body-container">
        {producttt.length > 0 && displayProduct}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default SearchBody;
