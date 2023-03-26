import React, { Fragment , useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartForm from "./Components/Cart/CartForm";

function App() {

const [openCart ,setOpenCart] = useState(false)

const clickOpenCart = () =>{
  setOpenCart(true)
}

const closeCart = () =>{
  setOpenCart(false)
}

  return (
    <Fragment>
     {openCart && <CartForm onClose={closeCart}></CartForm>}
      <Header onClick={clickOpenCart}></Header>
     <main>
        <Meals></Meals>
        </main>
    </Fragment>
  );
}

export default App;
