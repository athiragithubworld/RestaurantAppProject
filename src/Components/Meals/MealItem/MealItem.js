import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem =(props) =>{
const price=`$${props.price}`;
// .toFixed(2)

    return(
<li className={classes.meal}>
    <div>
        <h3>{props.name}
        
        </h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
    </div>
    <div>
        
    <MealItemForm id ={props.id}  item={props}></MealItemForm>
    {/* <div><label className={classes.label} >Amount</label>
    <input type="text"></input>
    </div>
    <button style={{display:'right'}}>+ Add</button> */}
        
    </div>
</li>
    )
}

export default MealItem;
