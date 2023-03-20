import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./users.css";
import { connect } from "react-redux";
import { Magender, Fegender, All } from "../../actions";

const Users = ({ defaultvalue, Magender, Fegender, All }) => {
  const [apidata, setApidata] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?gender=${defaultvalue}&results=20`)
      .then((res) => res.json())
      .then((data) => {
        setApidata(data.results);
      });
  }, [defaultvalue]);

  return (
    <div className="users">
      <Header></Header>
      <div className="usersdata">
        <h2>User Details</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit
          ducimus quam, recusandae veniam, at eligendi nihil quibusdam
          cupiditate vel nulla atque et, repellendus perferendis asperiores.
          Harum eos accusamus consequuntur, numquam quaerat nihil saepe impedit,
          id quam facilis voluptatibus accusantium eligendi exercitationem fugit
          ducimus cumque porro praesentium cupiditate debitis obcaecati!
        </p>
        <div style={{ display: "flex", gap: "5rem" }}>
          <div style={{ display: "flex", gap: "5px" }}>
            <input
              type="radio"
              name="gender"
              value="all"
              onChange={() => {
                All();
              }}
              checked={defaultvalue === "all"}
            ></input>
            <label>All</label>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={() => {
                Magender();
              }}
              checked={defaultvalue === "male"}
            ></input>
            <label>Male</label>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={() => {
                Fegender();
              }}
              checked={defaultvalue === "female"}
            ></input>
            <label>Female</label>
          </div>
        </div>
      </div>
      <div className="user">
        <table>
          <tr className="heading">
            <th>IMAGE</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>GENDER</th>
          </tr>
          {apidata.map((ele) => {
            return (
              <tr className="userdata">
                <td>
                  <img
                    src={ele.picture.medium}
                    alt=""
                    height="100"
                    width="100"
                  />
                </td>
                <td>
                  {ele.name.title}
                  {ele.name.first}
                  {ele.name.last}
                </td>
                <td>{ele.email}</td>
                <td>{ele.gender}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  defaultvalue: state,
});

export default connect(mapStateToProps, { Magender, Fegender, All })(Users);
