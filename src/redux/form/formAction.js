import axios from "axios";

const get_data = () => {
  return {
    type: "GET_DATA",
  };
};
const get_success = (data) => {
  return {
    type: "GET_SUCCCESS",
    payload: data,
  };
};
const get_error = (error) => {
  return {
    type: "GET_ERROR",
    payload: error,
  };
};

export const fetchAPI = (location) => {
  return (dispatch) => {
    dispatch(get_data);
     axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=960e55c747dcf2174b74a8b4ac1d17b1`
      )
      .then((res) => {
         dispatch(get_success(res.data));
      })
      .catch((err) => {
        const errMSG = err.message || "There is an error on the server side";
         dispatch(get_error(errMSG));
      });
  };
};
