import { React, useEffect, useState } from "react";
import "./products.css";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [apidata, setApidata] = useState([]);
  const [fetchdata, setFetchdata] = useState("electronics");
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${fetchdata}`)
      .then((res) => res.json())
      .then((data) => {
        setApidata(data);
      });
  }, [fetchdata]);

  return (
    <div className="products">
      <Header />
      <div className="productsdata">
        <ul className="types">
          <li onClick={() => setFetchdata("electronics")}>electronics</li>
          <li onClick={() => setFetchdata("jewelery")}>jewelery</li>
          <li onClick={() => setFetchdata("men's clothing")}>men's clothing</li>
          <li onClick={() => setFetchdata("women's clothing")}>
            women's clothing
          </li>
        </ul>
        <ul className="fetcheddata">
          {apidata.map((ele) => {
            return (
              <li key={ele.id}
                onClick={() => {
                  localStorage.setItem("currentdetails", JSON.stringify(ele));
                  navigate(`/productdetails/${ele.id}`);
                  localStorage.setItem("heading", JSON.stringify(fetchdata));
                }}
              >
                {ele && ele.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Products;
