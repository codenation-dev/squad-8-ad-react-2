import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Fragment>
      <ToastContainer autoClose={3000} />
      {/* Colocar conteúdo daqui pra baixo */}
      <h1>Squad 8</h1>
    </Fragment>
  );
}

export default App;
