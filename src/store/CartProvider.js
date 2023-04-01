import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) =>{

    const [items , setItems] = useState([]);

    const addItemToCartHandler = item => {

        // setItems([...items , item])
        let cartItems=[...items];
        let hasItem=false;
        cartItems.forEach((product) =>{
            if(product.id === item.id){
                hasItem=true;
                product.quantity = Number(product.quantity)+Number(item.quantity);
            }
        })

        if (hasItem){
            setItems(cartItems);
        }
        else{
            setItems((prevItems) =>{
                return[...prevItems , item]
            })
        }

    };

    const removeItemFromCartHandler = item => {
        let cartitems =[...items]
        cartitems.forEach((product) =>{
            if(product.id === item.id && item.quantity <=1){
                product.quantity=Number(product.quantity)-Number(item.quantity)

                if(product.quantity===0){
                    const updateList=cartitems.filter(pdt =>pdt.id !==product.id)
                    setItems(updateList)
                }
            }

            if (product.id === item.id && item.quantity > 1) {
                product.quantity = Number(product.quantity) - 1;
                setItems(cartitems);
              }



        }) 
    };


    const cartcontext = {
        items:items,
        totalAmount:0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
        
    }


    return <CartContext.Provider value ={cartcontext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;