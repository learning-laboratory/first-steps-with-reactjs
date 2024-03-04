import React, { useEffect, useState } from "react";
import { api } from "../services/api";

const MealContext = React.createContext({
    meals: [],
    getMeals: () => { }
});

export const MealContextProvider = (props) => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetchMeals();
    }, []);

    const fetchMeals = async () => {
        try {
            const response = await api.get("/meals");
            setMeals(response.data);
        } catch (error) { }
    };

    const getMeals = async () => {
        try {
            const response = await api.get("/meals");

            return {
                meals: response.data,
                success: true,
                message: "Meals retrieved successfully."
            };
        } catch (error) {
            return {
                success: false,
                message: "Failed to retrieve meals."
            };
        }
    };

    return <MealContext.Provider value={{
        meals: meals,
        getMeals: getMeals
    }}>{props.children}</MealContext.Provider>
}

const CartContext = React.createContext({
    items: [],
    addItem: (itemData) => { },
    removeItem: (id) => { },
    getItems: () => { },
    checkoutOrder: (orderData) => { },
});

export const CartContextProvider = (props) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            let data = JSON.parse(localStorage.getItem('mealsApp@items'))
            if (data)
                setItems(data);
        } catch (error) {

        }
    };

    const addItem = async (itemData) => {
        const existingItemIndex = items.findIndex((item) => item.id === itemData.id);

        if (existingItemIndex !== -1) {
            items[existingItemIndex].amount += itemData.amount;
        } else {
            items.push(itemData);
        }

        localStorage.setItem('mealsApp@items', JSON.stringify(items));
        fetchItems();
    };

    const removeItem = async (id) => {
        const existingItemIndex = items.findIndex((item) => item.id === id);

        if (existingItemIndex !== -1) {
            if (items[existingItemIndex].amount === 1)
                items.splice(existingItemIndex, 1);
            else {
                items[existingItemIndex].amount -= 1;
            }
        }

        localStorage.setItem('mealsApp@items', JSON.stringify(items));
        fetchItems();
    };

    const getItems = async () => {
        try {
            let data = JSON.parse(localStorage.getItem('mealsApp@items'));

            return {
                items: data,
                success: true,
                message: "Items retrieved successfully."
            }
        } catch (error) {
            return {
                items: [],
                success: false,
                message: "Failed to retrive items."
            }
        }
    };

    const checkoutOrder = async (orderData) => {
        try {
            const response = await api.post("/orders", orderData);

            return {
                success: true,
                message: "Order created.",
            };
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: "Failed to create order."
            };
        }
    };

    return <CartContext.Provider value={{
        items: items,
        addItem: addItem,
        removeItem: removeItem,
        getItems: getItems,
        checkoutOrder: checkoutOrder
    }}>{props.children}</CartContext.Provider>
}

export {
    MealContext,
    CartContext
};