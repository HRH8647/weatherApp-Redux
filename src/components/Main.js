import React, { useState } from "react";
import { fetchAPI } from "../redux/form/formAction";
import { useDispatch, useSelector } from "react-redux";
//sweetalert2
import Swal from "sweetalert2";
//styled-components
import styled from "styled-components";
//function Handler
import { convertTemp } from "../helper/handler";
//spinner && search
const spinner = <i className="fas fa-spinner fa-spin"></i>;
const search = <i className="fas fa-search"></i>;
const cloud_sun = <i className="fas fa-cloud-sun"></i>;
const circle = <i className="far fa-circle" style={{backgroundColor: "#fff", borderRadius: "50%", fontSize: "10px"}}></i>;

const H3 = styled.h3`
  text-align: center;
  text-shadow: 0 0 15px #3f4e4f;
  border-top: 3px solid #000;
  border-left: 3px solid #000;
  padding: 15px;
`;
const Form = styled.form`
  border-bottom: 3px solid #000;
  border-right: 3px solid #000;
  padding: 5px 50px;
  text-align: center;
`;
const InputForm = styled.input`
  height: 30px;
  width: 100%;
  text-indent: 10px;
  font-size: 16px;
  margin-bottom: 15px;
  border-radius: 20px;
  border: 1px solid silver;
  text-transform: capitalize;
  :focus {
    outline: 2px solid #3ab0ff;
    outline-offset: 2px;
  }
  ::placeholder {
    opacity: 0.7;
  }
`;
const ButtonForm = styled.button`
  padding: 7px 20px;
  border-radius: 20px;
  border: 0;
  font-weight: bold;
  background-color: #277bc0;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
  outline: 2px solid #3ab0ff;
  outline-offset: 2px;
`;
const UlList = styled.ul`
  border-bottom: 3px solid #000;
  border-left: 3px solid #000;
  padding: 10px;
  text-align: left;
  list-style: none;
`;
const LiItem = styled.li`
  font-weight: bold;
  margin: 10px;
  background-color: #2c3333;
  border-radius: 5px;
  color: #fcf8e8;
  padding: 6px 0 6px 15px;
`;
const SpanLiItem = styled.span``;
const PError = styled.p`
  background-color: red;
  color: #fff;
  padding: 2px 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 15px;
`;
const Main = () => {
  const [inpText, setInpText] = useState("");
  const [isChange, setIsChange] = useState(false);

  //selector & dispatch
  const dispatch = useDispatch();
  const dataLocation = useSelector((state) => state);

  //destructuring
  const { error, data } = dataLocation;

  const submitHandler = (e) => {
    e.preventDefault();
    setInpText("");
    !inpText &&
      Swal.fire({ text: "Please Enter Country or City", icon: "error" });
    inpText && dispatch(fetchAPI(inpText));
    inpText && setIsChange(!isChange);
    setInterval(() => {
      setIsChange(isChange);
    }, 1500);
  };

  return (
    <div>
      <H3>{cloud_sun} Weather App</H3>
      <Form onSubmit={submitHandler}>
        <InputForm
          type="text"
          placeholder="Country / City"
          value={inpText}
          onChange={(e) => setInpText(e.target.value)}
        />
        <br />
        <ButtonForm>{isChange ? spinner : search}</ButtonForm>
      </Form>
      <div>
        {error ? (
          <PError>{error}</PError>
        ) : (
          !isChange &&
          data && (
            <UlList>
              {data && (
                <LiItem>
                  {circle} Country/City:{" "}
                  <SpanLiItem>
                    {data.name}
                    {` ( ${data.sys.country} )`}
                  </SpanLiItem>
                </LiItem>
              )}
              {data && (
                <LiItem>
                  {circle} Temp: <SpanLiItem>{convertTemp(data.main.temp)} C</SpanLiItem>
                </LiItem>
              )}
              {data && (
                <LiItem>
                  {circle} Pressure:{" "}
                  <SpanLiItem>{convertTemp(data.main.pressure)} PA</SpanLiItem>
                </LiItem>
              )}
              {data && (
                <LiItem>
                  {circle} Humidity: <SpanLiItem>{data.main.humidity}%</SpanLiItem>
                </LiItem>
              )}
              {data && (
                <LiItem>
                  {circle} Weather:{" "}
                  <SpanLiItem>{data.weather[0].description}</SpanLiItem>
                </LiItem>
              )}
            </UlList>
          )
        )}
      </div>
    </div>
  );
};

export default Main;
