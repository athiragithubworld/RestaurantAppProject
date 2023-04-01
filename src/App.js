import React, {  useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartForm from "./Components/Cart/CartForm";
import CartProvider from "./store/CartProvider";
import cartContext from "./store/cart-context";

function App() {

const [openCart ,setOpenCart] = useState(false)

const clickOpenCart = () =>{
  setOpenCart(true)
}

const closeCart = () =>{
  setOpenCart(false)
}

  return (
    <CartProvider >
     {openCart && <CartForm onClose={closeCart}></CartForm>}
      <Header onClick={clickOpenCart}></Header>
     <main>
        <Meals></Meals>
        </main>
    </CartProvider>
  );
}

export default App;
