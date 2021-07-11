import React from "react";
import { Link } from "react-router-dom";
import "./CardSearch.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, DeleteProduct } from "../../../../redux/shopping/shopping-action";

const CardSearch = ({ product }) => {
  const isAdmin = true;
  const {user }= useSelector((state) => state.User)

  const dispatch = useDispatch();

  return (
    <div className="card-search-container">
      <div className="card-search-image">
        <img src={`http://localhost:5000/${product.imageProduct}`} alt="" />
      </div>
      <div className="card-search-body">
        <h4 className="card-search-descreption">{product.name}</h4>
        <div className="price-heart">
          <i className="far fa-heart"></i>
          <h4 className="price">$ {product.price}</h4>
        </div>
        <h6>
          <Link to="/product">View More</Link>
        </h6>
      </div>
      {(user?.role === "admin") ? (
        <div className="">
          <button className="btn add" >
            <Link
                to={{
                    pathname: "/admin",
                    Prod: product
                }}>
                Update
            </Link>
          </button>
          <button className="btn add2" onClick={() => dispatch(DeleteProduct(product._id))}>
            Remove
          </button>
        </div>
      ) : (
        <button
          className="btn add"
          onClick={() => dispatch(addToCart(product._id))}
        >
          add
        </button>
      )}
    </div>
  );
};

export default CardSearch;
