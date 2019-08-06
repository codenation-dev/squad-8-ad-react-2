import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";

import Main from "./pages/Main";

function App() {
  return (
    <Fragment>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
      {/* Colocar conteúdo daqui pra baixo */}
      <Main />
    </Fragment>
  );
}

export default App;
