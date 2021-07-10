import React, { useState } from "react";
import './admin.css'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { AddProduct } from "../../redux/shopping/shopping-action";

const Admin = () => {

  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [taill, setTaill] = useState('')
  const [price, setPrice] = useState(0)
  const [color, setColor] = useState('')
  const [photo, setPhoto] = useState()
  const history = useHistory();
  const isAdmin = true;

  const handleSubmit = (e) => {
      e.preventDefault()

      const product = new FormData();
      product.append('name', name)
      product.append('price', price)
      product.append('taill', taill)
      product.append('color', color)
      product.append('photo', photo)
      
      dispatch(AddProduct(product, history)) 
  };

  return (
    <div className="admin-container">
      {isAdmin ? (
          <form action="" onSubmit={handleSubmit} className="admin-form"  encType="multipart/form-data">
            <div className='admin-chon'>
            <label htmlFor="name"> Product Name </label>
            <input
              type="text"
              name="name"
              onChange={(e)=> setName(e.target.value)}
              className="input-box-sign"
              placeholder="Name"
            />
          </div>
          <div className='admin-chon'>
            <label htmlFor="name"> Price </label>
            <input
              type="number"
              name="price"
              onChange={(e)=> setPrice(e.target.value)}
              className="input-box-sign"
              placeholder="Last Name"
            />
          </div>
          <div className='admin-chon'>
            <label htmlFor="name"> Taill </label>
            <input
              type="text"
              name="taill"
              onChange={(e)=> setTaill(e.target.value)}
              className="input-box-sign"
              placeholder="Taill"
            />
          </div>
          <div className='admin-chon'>
            <label htmlFor="name"> Color </label>
            <input
              type="text"
              name="color"
              onChange={(e)=> setColor(e.target.value)}
              className="input-box-sign"
              placeholder="color"
            />
          </div>
          <div className='admin-chon'>
              <label htmlFor="image"> Product image </label>
              <input type="file" name="photo" className="input-box-sign" onChange={(e) => setPhoto(e.target.files[0])} />
          </div>
          
          <input type="submit" value="Add Product"  className="input-box-sign" />
          
          
        </form>
      ) : (
        history.push("/")
      )}
    </div>
  );
};

export default Admin;
