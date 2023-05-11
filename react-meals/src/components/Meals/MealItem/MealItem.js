import React, { useContext } from "react";
import classes from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";



const MealItem = ({ id, name, description, price }) => {

    const cartContext = useContext(CartContext);

    const addToCartHandler = amount => {
        cartContext.addItem({
            id: id,
            name: name,
            description: description,
            price: price,
            amount: amount
        });
    };

    return <li key={id} className={classes.meal}>
        <div>
            <div><h3>{name}</h3></div>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>{price.toFixed(2)} MZN</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler} />
        </div>
    </li>
}

export default MealItem;