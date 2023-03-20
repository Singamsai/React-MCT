import React from "react";
import "./home.css";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="homedata">
        <h1>Welcome to React</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          magni cupiditate velit dolores labore ut, consequatur
          <br />
          repellendus ad facilis ea aliquam, magnam, commodi eius culpa fugiat
          hic cumque eligendi nam.Lorem ipsum
          <br /> dolor sit amet consectetur, adipisicing elit. Repellat magni
          cupiditate velit dolores labore ut, consequatur
          <br /> repellendus ad facilis ea aliquam, magnam, commodi eius culpa
          fugiat hic cumque eligendi nam.
        </p>
        <button>Explore More !!!</button>
      </div>
    </div>
  );
};

export default Home;
