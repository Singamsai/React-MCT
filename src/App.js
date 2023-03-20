import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "../src/pages/login/Login";
import Home from "../src/pages/home/Home";
import Products from "./pages/product/Products";
import Users from "./pages/users/Users";
import Contact from "./pages/contact/Contact";
import Productdetails from "./pages/productdetails/Productdetails";
import Createaccount from "./pages/createaccount/Createaccount";
import { createContext, useState } from "react";

export const Globaldata = createContext();
function App() {
  const [logincredentials, setLogincredentials] = useState({
    username: "singam",
    password: "86888",
  });

  return (
    <Globaldata.Provider
      value={{
        logincredentials: logincredentials,
        setLogincredentials: setLogincredentials,
      }}
    >
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/productdetails/:id" element={<Productdetails />}></Route>
            <Route path="/createaccount" element={<Createaccount />}></Route>
          </Routes>
        </Router>
      </div>
    </Globaldata.Provider>
  );
}

export default App;
