import React from "react";
import story from "./redux/store";
import { Provider } from "react-redux";
import styled from "styled-components";

//components
import Main from "./components/Main";
//styled-components
const DIV_CONTAINER = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
//end-styled-components

const App = () => {
  return (
    <Provider store={story}>
      <DIV_CONTAINER>
        <Main />
      </DIV_CONTAINER>
    </Provider>
  );
};

export default App;
