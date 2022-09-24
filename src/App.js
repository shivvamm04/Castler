import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Profile from "./Profile";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [data, setData] = useState([]);
  const [rdata, setRdata] = useState([]);
  const [val, setVal] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    let arr = [];
    axios
      .get("https://reqres.in/api/users/")
      .then((res) => {
        arr.push(...res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://reqres.in/api/users/?page=2")
      .then((res) => {
        arr.push(...res.data.data);
        setData(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const clickHandler = (id) => {
    id = id - 0;
    let nArr = data.filter((el) => {
      if (el.id === id) {
        return true;
      }
      return false;
    });
    setRdata(nArr);
  };
  const clk = () => {
    if (val > 12 || val < 1) {
      setMsg("enter id in 1 - 12 range");
      setRdata([]);
      setTimeout(() => {
        setMsg("");
      }, 2000);
    } else {
      clickHandler(val);
    }
    setVal("");
  };
  const name = data.map((el, ind) => {
    return (
      <img
        className="imgg"
        src={el.avatar}
        alt="img"
        key={ind}
        onClick={() => {
          clickHandler(el.id);
        }}
      />
    );
  });
  const changeHandler = (event) => {
    let v = event.target.value;
    setVal(v);
  };
  return (
    <div className="App">
      <h1 className="front">Emplyee's profile</h1>
      <h2 className="front">Assignment for Castler company(react role) </h2>
      <p className="front msg">{msg}</p>
      <div className="front search">
        <b>search through id </b>
        <input
          type="text"
          placeholder="enter id 1-12"
          value={val}
          onChange={changeHandler}
        />
        <button type="button" className="btn btn-outline-primary" onClick={clk}>
          Search
        </button>
      </div>
      <div className="ind">{name}</div>
      <Profile card={rdata} />
    </div>
  );
}
