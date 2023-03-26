import Modal from '../UI/Modal';
import classes from './CartForm.module.css';

const CartForm =() =>{
  // const cartItems ={
   
  // }

    return(
        // <section className={classes.cartForm}>
          
        // </section>
        <Modal>
        {/* {cartItems} */}
        <div className={classes.total}>
          <span>Total Amount</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} >Close</button>
          <button className={classes.button}>Order</button> 
          {/* <button className={classes['cart-button']} style={{backgroundColor:'white' ,color:'#8a2b06' }}>Close</button>
          <button className={classes['cart-button']}>Order</button>   */}
        </div>
        </Modal>
    )
}

export default CartForm;