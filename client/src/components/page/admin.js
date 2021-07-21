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
  const [hommePath, setHommePath] = useState(true) 

  const [name, setName] = useState(`${Prod?.product ? Prod?.product.name : ""}`);
  const [taill, setTaill] = useState(`${Prod?.product ? Prod?.product.taill : ""}`);
  const [price, setPrice] = useState(`${Prod?.product ? Prod?.product.name : 0}`);
  const [color, setColor] = useState(`${Prod?.product ? Prod?.product.color : ""}`);
  const [photo, setPhoto] = useState();
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = new FormData();
    product.append("name", name);
    product.append("price", price);
    product.append("taill", taill);
    product.append("color", color);
    product.append("photo", photo);

    for (let i = 0 ; i < images.length ; i++) {
      product.append("images", images[i]);
    }

    if(Prod?.product){
      dispatch(UpdateProduct(Prod?.product._id, product, history, Prod.path))
    }else {
      const path = hommePath ? 'femme' : 'homme'
      dispatch(AddProduct(product, history, path));
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
              placeholder={Prod?.product ? Prod?.product.name : "Name"}
            />
          </div>
          <div className="admin-chon">
            <label htmlFor="name"> Price </label>
            <input
              type="number"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              className="input-box-sign"
              placeholder={Prod?.product ? Prod?.product.price : "Price"}
            />
          </div>
          <div className="admin-chon">
            <label htmlFor="name"> Taill </label>
            <input
              type="text"
              name="taill"
              onChange={(e) => setTaill(e.target.value)}
              className="input-box-sign"
              placeholder={Prod?.product ? Prod?.product.taill : "Taill"}
            />
          </div>
          <div className="admin-chon">
            <label htmlFor="name"> Color </label>
            <input
              type="text"
              name="color"
              onChange={(e) => setColor(e.target.value)}
              className="input-box-sign"
              placeholder={Prod?.product ? Prod?.product.color : "Color"}
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
          {/* tesssssssssssssssssssssssssssssst */}
          <div className="admin-chon">
            <label htmlFor="image"> Product Images </label>
            <input
              type="file"
              name="images"
              multiple
              className="input-box-sign"
              onChange={(e) => setImages(e.target.files)}
            />
          </div>
          {/* tesssssssssssssssssssssssssssssst */}
          {Prod?.product ? (
            <input
              type="submit"
              value="Update Product"
              className="input-box-sign"
            />
          ) : (
            <div>
              <input
              type="submit"
              value="Add Product"
              className="input-box-sign"
              />
              <button onClick={()=> setHommePath(!hommePath)}>
                { hommePath ? 'Add To Homme' : "Add To Femme" }
              </button>
            </div>
            
          )}
        </form>
      ) : (
        history.push("/")
      )}
    </div>
  );
};

export default Admin;
