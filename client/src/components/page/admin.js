import React, { useState } from "react";
import "./admin.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProduct,
  UpdateProduct,
} from "../../redux/shopping/shopping-action";

const Admin = ({ location }) => {
  
  const {user }= useSelector((state) => state.User)
  const { Prod } = location;
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(`${Prod ? Prod.name : ""}`);
  const [taill, setTaill] = useState(`${Prod ? Prod.taill : ""}`);
  const [price, setPrice] = useState(`${Prod ? Prod.name : 0}`);
  const [color, setColor] = useState(`${Prod ? Prod.color : ""}`);
  const [photo, setPhoto] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = new FormData();
    product.append("name", name);
    product.append("price", price);
    product.append("taill", taill);
    product.append("color", color);
    product.append("photo", photo);
    {Prod && product.append("_id", Prod._id)}

    {
      Prod
        ? dispatch(UpdateProduct(Prod._id, product, history))
        : dispatch(AddProduct(product, history));
    }
  };

  return (
    <div className="admin-container">
      {(user?.role ==="admin") ? (
        <form
          action=""
          onSubmit={handleSubmit}
          className="admin-form"
          encType="multipart/form-data"
        >
          <div className="admin-chon">
            <label htmlFor="name"> Product Name </label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="input-box-sign"
              placeholder={Prod ? Prod.name : "Name"}
            />
          </div>
          <div className="admin-chon">
            <label htmlFor="name"> Price </label>
            <input
              type="number"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              className="input-box-sign"
              placeholder={Prod ? Prod.price : "Price"}
            />
          </div>
          <div className="admin-chon">
            <label htmlFor="name"> Taill </label>
            <input
              type="text"
              name="taill"
              onChange={(e) => setTaill(e.target.value)}
              className="input-box-sign"
              placeholder={Prod ? Prod.taill : "Taill"}
            />
          </div>
          <div className="admin-chon">
            <label htmlFor="name"> Color </label>
            <input
              type="text"
              name="color"
              onChange={(e) => setColor(e.target.value)}
              className="input-box-sign"
              placeholder={Prod ? Prod.color : "Color"}
            />
          </div>
          <div className="admin-chon">
            <label htmlFor="image"> Product image </label>
            <input
              type="file"
              name="photo"
              className="input-box-sign"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>
          {Prod ? (
            <input
              type="submit"
              value="Update Product"
              className="input-box-sign"
            />
          ) : (
            <input
              type="submit"
              value="Add Product"
              className="input-box-sign"
            />
          )}
        </form>
      ) : (
        history.push("/")
      )}
    </div>
  );
};

export default Admin;
