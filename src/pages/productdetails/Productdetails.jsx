import React from "react";
import Header from "../../components/Header";
import "./productdetails.css";

const Productdetails = (props) => {
  const current = JSON.parse(localStorage.getItem("currentdetails"));
  return (
    <div className="productdetails">
      <Header />
      <div className="productsdet">
        <h1>{current.category} Category</h1>
        <div className="productdata">
          <div className="productdata-left">
            <img src={current.image} alt=""></img>
          </div>
          <div className="productdata-right">
            <h3>Product Name</h3>
            <p>{current.title}</p>
            <h3>Product Price</h3>
            <p>${current.price}</p>
            <h3>Product Description</h3>
            <p>{current.description}</p>
            <h3>Product Rating</h3>
            <p>{current.rating.rate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
