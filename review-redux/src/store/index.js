import { configureStore } from '@reduxjs/toolkit'
import uiSlcie from './ui-slice'
import cartSlice from './cart-slice';

const store = configureStore({
    reducer: {
        ui: uiSlcie.reducer,
        cart: cartSlice.reducer
    }
});

export default store;