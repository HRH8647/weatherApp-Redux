import React, { useState, useRef } from "react";
import { fetchAPI } from "../redux/form/formAction";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const [inpText, setInpText] = useState("");

  //ref
  const inputValue = useRef();
  
  //selector & dispatch
  const dispatch = useDispatch();
  const dataLocation = useSelector((state) => state);
  
  //destructuring
  const { error, data, loading } = dataLocation;
  
  const clickHandler = async () => {
    const innerInp = inputValue.current.value;
     await dispatch(fetchAPI(innerInp));
  };
  
  
  return (
    <div>
      <h3>Weather-App</h3>
      <input
        type="text"
        value={inpText}
        onChange={(e) => setInpText(e.target.value)}
        ref={inputValue}
      />
      <br />
      <button onClick={clickHandler} type="button">
        Search
      </button>
      <div>
        {/* here must showed data */}
      </div>
    </div>
  );
};

export default Main;
