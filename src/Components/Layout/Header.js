import React,{Fragment} from "react";
import classes from './Header.module.css';
import mealsimg from '../../assets/Restaurant.jpeg'
import HeaderCartButton from "./HeaderCartButton";

const Header = () =>{
    return(
        <Fragment>
        <header className={classes.header}>
            <h1>Restaurant Meals</h1>
            <HeaderCartButton></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
           <img src={mealsimg} alt='images'></img> 
        </div>
        </Fragment>
       

    )
}

export default Header;