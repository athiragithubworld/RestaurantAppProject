import react , {useContext} from "react";

import classes from "./MealItemForm.module.css";

import Input from "../../UI/Input";

import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {

  const cartcxt = useContext(CartContext);


  const addItemTocart = (event) =>{
    event.preventDefault();

  
    const quantity = document.getElementById('amount_' + props.id).value
    cartcxt.addItem({...props.item , quantity:quantity})

  }

  return (
    <form className={classes.form}>
      <Input label="Amount" input={{
        id:'amount_' + props.id,
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue :'1'

      }}></Input>
      <button onClick = {addItemTocart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
