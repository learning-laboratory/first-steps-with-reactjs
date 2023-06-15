import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';


const Cart = (props) => {

    const cartContext = useContext(CartContext);
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

    const cartItemRemoveHandler = id => { };
    const cartItemAddHandler = item => { };


    return <Modal onClose={props.onHideCart}>
        <ul className={classes['cart-items']}>
            {cartContext.items.map(item => <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onAdd={cartItemAddHandler.bind(null, item.id)}
                onRemove={cartItemRemoveHandler.bind(null, item)}
            />)}
        </ul>
        <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            {cartContext.items.length > 0 ?? <button className={classes.button}>Order</button>}
        </div>
    </Modal>;
};

export default Cart;