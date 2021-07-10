import React, { useState } from "react";
import "./SideBar.css";
import { SideBarDataMen, SideBarDataColor } from "./SideBarData";

const SideBar = () => {
  var [data, setData] = useState(SideBarDataMen);

  const onSearch = (id) => {
    setData(
      data.map((el) => (el.id === id ? { ...el, seartch: !el.seartch } : el))
    );
  };
  return (
    <div className="side-bar-container">
      <div className="categorie">
        <h3 className="categori-title">Catégorie</h3> 
        <ul className="categorie-list">
          {data.map((el) => {
            return (
              <li
                key={el.id}
                className="categorie-item"
                onClick={() => onSearch(el.id)}
                style={{ color: `${el.seartch ? "green" : ""}` }}
              >
                <i className={el.categorieIcon}></i>
                <h5 className="tit">{el.categorieName} </h5>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className="categorie">
        <h3 className="categori-title">Color</h3>
        <div className="color-list">
          {SideBarDataColor.map((el, index) => {
            return (
              <div
                key={index}
                className="color-item"
                style={{ backgroundColor: el.codeCoolor }}
              ></div>
            );
          })}
        </div>
      </div> */}
      {/* <div className="categorie">
        <h3 className="categori-title">Catégorie</h3>
        <ul className="categorie-list">
          {SideBarDataMen.map((el, index) => {
            return (
              <li key={index} className="categorie-item">
                <i className={el.categorieIcon}></i>
                <h5 className="tit">{el.categorieName} </h5>
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
};

export default SideBar;
