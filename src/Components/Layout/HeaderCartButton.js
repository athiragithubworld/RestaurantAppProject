import react ,{useState} from "react";

import CartIcon from "../Cart/CartIcon";
// import CartForm from "../Cart/CartForm";
import classes from "./HeaderCartButton.module.css";



const HeaderCartButton = (props) => {

  // const [cartOpen , setCartOpen] = useState(false);

  // const cartClickHandler = () =>{
  //   setCartOpen(true)
  // }


  return (
    <div>
    { <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>}
     
    {/* <CartForm></CartForm> */}
    
    </div>
  );
};

export default HeaderCartButton;
