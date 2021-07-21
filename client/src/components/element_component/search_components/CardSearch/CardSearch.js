import React from "react";
import { Link } from "react-router-dom";
import "./CardSearch.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, DeleteProduct } from "../../../../redux/shopping/shopping-action";

const CardSearch = ({ product, path }) => {
  
  const {user }= useSelector((state) => state.User)

  const dispatch = useDispatch();

  return (
    <div className="card-search-container">
      <div className="card-search-image">
        <img src={`http://localhost:5000/public/data/uploads/${product.imageProduct}`} alt="" />
      </div>
      <div className="card-search-body">
        <p className="card-search-descreption">{product.name}</p>
        <div className="price-heart">
          <i className="far fa-heart"></i>
          <h4 className="price">$ {product.price}</h4>
        </div>
        <h6>
          <Link to={{
                    pathname: "/product",
                    Prod:{ product } 
                }}>View More</Link>
        </h6>
      </div>
      {(user?.role === "admin") ? (
        <div className="">
          <button className="btn add" >
            <Link
                to={{
                    pathname: "/admin",
                    Prod:{ product, path } 
                }}>
                Update
            </Link>
          </button>
          <button className="btn add2" onClick={() => dispatch(DeleteProduct(product._id, path))}>
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
