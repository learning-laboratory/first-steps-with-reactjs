import React from "react";
import classes from './MealItem.module.css';
import MealItemForm from "./MealItemForm";


const MealItem = ({ id, name, description, price }) => {
    return <li key={id} className={classes.meal}>
        <div>
            <div><h3>{name}</h3></div>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>{price.toFixed(2)} MZN</div>
        </div>
        <div>
            <MealItemForm />
        </div>
    </li>
}

export default MealItem;