import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const sendCartData = (cart) => {

    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://udemy-react-fbc45-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                }),
            });

            if (!response.ok) {
                dispatch(uiActions.showNotification({
                    status: 'error',
                    title: 'Error...',
                    message: 'Sending cart data failed!'
                }));
            }

        }

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success...',
                message: 'Sending cart data successfully!'
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...',
                message: 'Sending cart data failed!'
            }));
        }
    }

}

export const fetchData = () => {

    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Fetching...',
            message: 'Fetching cart data!'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://udemy-react-fbc45-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                dispatch(uiActions.showNotification({
                    status: 'error',
                    title: 'Error...',
                    message: 'Sending cart data failed!'
                }));
            }

            const data = await response.json();
            return data;
        }

        try {
            const data = await sendRequest();
            dispatch(
                cartActions.replaceCart({
                    items: data.items || [],
                    totalQuantity: data.totalQuantity,
                })
            );

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Fetched...',
                message: 'Fetched cart data!'
            }));

        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...',
                message: 'Sending cart data failed!'
            }));
        }
    }

}
