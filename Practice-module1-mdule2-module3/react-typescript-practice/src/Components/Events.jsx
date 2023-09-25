import React, { useState } from "react";

const EventComponent = () => {
  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const [data, setData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.currentTarget.value);
    setState((state) => {
      return { ...state, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = { name: state.name, number: state.number };

    setData((data) => [...data, user]);
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={state.name}
          name="name"
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="number"
          value={state.number}
          name="number"
          onChange={(e) => handleChange(e)}
        ></input>
        <button type="submit">Add</button>
      </form>
      <div>
        {data.map((el, id) => (
          <div key={id}>
            <p>{el.name}</p>
            <p>{el.number}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventComponent;
