import React, { useContext } from "react";

import Modal from "../UI/Modal";
import classes from "./CartForm.module.css";
import CartContext from "../../store/cart-context";

const CartForm = (props) => {
  const cartctx = useContext(CartContext);

  let totalAmount = cartctx.items.reduce(
    (a, v) => (a = Number(a) + Number(v.price * v.quantity)),
    0
  );
  // const totalAmount=`$${cartctx.totalAmount.toFixed(2)}`;

  // const cartItems = (
    //   <ul className={classes["cart-items"]}>
    //     {cartctx.items.map((item) => (
    //       // {console.log("item",item)}
    //       <li key={item.id}>
    //         <h3>{item.name}</h3>
    //         <div>{item.price}</div>
    //         {/* Quantity : {item.quantity} */}
    //       </li>
    //     ))}
    //   </ul>

  //   <ul className={classes["cart-items"]}>
  //     <div>
  //       {cartctx.items.map((item) => {
  //         {
  //           console.log("item", item);
  //         }

  //         <li key={item.id}>
  //           {console.log("head", <h2>{item.name}</h2>)}

  //           <div className={classes.summary}>
  //             <span className={classes.price}>Price : ${item.price}</span>
  //             <span> x {item.quantity}</span>
  //           </div>
  //         </li>;
  //       })}
  //     </div>
  //   </ul>
  // );
  // console.log("vallist", cartItems);

  return (
    // <section className={classes.cartForm}>

    // </section>
    <Modal onClick={props.onClose}>
      {/* {cartItems}
      {console.log("cartx", cartctx.items)} */}
      <ul className={classes["cart-items"]}>
        <div>
        
        {cartctx.items.map((item) => {
         
          
          return(<li key={item.id}>
              
            <h2>{item.name}</h2>

            <div className={classes.summary}>
              <span className={classes.price}>Price : ${item.price}</span>
              <span> x {item.quantity}</span>
            </div>
            <div style={{borderBottom:'1px solid #8a2b06'}}></div>
          </li>)
          
})}
        </div>
      </ul>

      <div className={classes.total}>
        <span>Total Amount </span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>

        {/* <button className={classes['cart-button']} style={{backgroundColor:'white' ,color:'#8a2b06' }}>Close</button>
          <button className={classes['cart-button']}>Order</button>   */}
      </div>
    </Modal>
  );
};

export default CartForm;
