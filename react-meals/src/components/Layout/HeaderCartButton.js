import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCardButton = props => {

    const cartContext = useContext(CartContext);
    const cartItems = cartContext.items.reduce((current, item) => {
        return current + item.amount;
    }, 0);

    return (<button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartItems}</span>
    </button>);
}

export default HeaderCardButton;