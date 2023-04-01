import react, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
// import CartForm from "../Cart/CartForm";
import classes from "./HeaderCartButton.module.css";

import CartContext from "../../store/cart-context";



const HeaderCartButton = (props) => {
 
  const cartctx = useContext(CartContext);

  let quantity = 0;
  
  cartctx.items.forEach(item => {
    
    quantity = quantity + parseInt(item.quantity);
    
  });
 
  // const numberOfCartItems = cartctx.items.reduce((curNumber ,item) =>{
  //   return curNumber + item.amount;
  // } ,0 )

  // const [cartOpen , setCartOpen] = useState(false);

  // const cartClickHandler = () =>{
  //   setCartOpen(true)
  // }

  return (
    <div>
      {
        <button className={classes.button} onClick={props.onClick}>
          <span className={classes.icon}>
            <CartIcon></CartIcon>
          </span>
          <span>Your Cart</span>
          <span className={classes.badge}>{quantity}</span>
        </button>
      }

      {/* <CartForm></CartForm> */}
    </div>
  );
};

export default HeaderCartButton;
