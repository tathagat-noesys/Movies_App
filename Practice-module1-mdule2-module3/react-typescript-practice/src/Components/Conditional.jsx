import React, { useState, useEffect, useReducer } from "react";
import styles from "./Conditional.module.css";
const initialState = { name: "", phone: "" };
const ReducerFunction = (state, action) => {
  switch (action.type) {
    case "input_name": {
      return { ...state, name: action.payload };
    }
    case "input_phone": {
      return { ...state, phone: action.payload };
    }
    default: {
      return state;
    }
  }
};

const ConditionalRender = () => {
  const [showText, ToggleText] = useState(false);
  const [state, dispatch] = useReducer(ReducerFunction, initialState);
  const [data, setData] = useState([
    { name: "Tathagat", phone: "92184124121" },
  ]);
  useEffect(() => {
    console.log(state);
  }, [showText, data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      name: state.name,
      phone: state.phone,
    };
    setData((data) => [...data, user]);
    console.log(data);
  };

  return (
    <div>
      <div className={showText ? styles["show"] : styles["hidden"]}>
        {/* {showText ? "This Text will dissapear on click" : ""} */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            placeholder="name"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "input_name", payload: e.target.value })
            }
          ></input>
          <input
            placeholder="phone"
            value={state.phone}
            onChange={(e) =>
              dispatch({ type: "input_phone", payload: e.target.value })
            }
          ></input>
          <button type="submit">Add </button>
        </form>
        <div>
          <table>
            <thead>
              <tr>
                <th>Sl no</th>
                <th>Name</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((el, id) => (
                <tr>
                  <td>{id + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button onClick={() => ToggleText((prev) => !prev)}>
        {showText ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default ConditionalRender;
