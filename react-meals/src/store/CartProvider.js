import React, { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {

    if (action.type === 'ADD') {

        const totalAmount = state.totalAmount + action.item.price * action.item.amount;
        const index = state.items.findIndex((item) => item.id === action.item.id);
        const item = state.items[index];
        let updateItems;

        if (item) {
            const updateItem = {
                ...item,
                amount: item.amount + action.item.amount
            }
            updateItems = [...state.items];
            updateItems[index] = updateItem;
        } else {
            updateItems = state.items.concat(action.item);
        }

        return {
            items: updateItems,
            totalAmount: totalAmount
        };
    }

    if (action.type === 'REMOVE') {

        const index = state.items.findIndex((item) => item.id === action.id);
        const item = state.items[index];
        const totalAmount = state.totalAmount - item.price;
        let updateItems;

        if (item.amount === 1) {
            updateItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updateItem = { ...item, amount: item.amount - 1 };
            updateItems = [...state.items];
            updateItems[index] = updateItem;
        }

        return {
            items: updateItems,
            totalAmount: totalAmount
        };
    }

    return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item });

    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;