import React, { Fragment } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartForm from "./Components/Cart/CartForm";

function App() {
  return (
    <Fragment>
      <CartForm></CartForm>
      <Header></Header>
     <main>
        <Meals></Meals>
        </main>
    </Fragment>
  );
}

export default App;
