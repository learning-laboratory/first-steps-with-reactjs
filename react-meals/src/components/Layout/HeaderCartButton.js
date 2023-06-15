import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCardButton = props => {

    const { items } = useContext(CartContext);
    const cartItems = items.reduce((current, item) => {
        return current + item.amount;
    }, 0);

    const [btnIsHighlighted, setBtnHighlighted] = useState(false);
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0)
            return;
            
        setBtnHighlighted(true);

        const timer = setTimeout(() => { setBtnHighlighted(false); }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return (<button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartItems}</span>
    </button>);
}

export default HeaderCardButton;