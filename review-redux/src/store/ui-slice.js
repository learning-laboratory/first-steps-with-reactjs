
import { createSlice } from '@reduxjs/toolkit'

const uiSlcie = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const uiActions = uiSlcie.actions;
export default uiSlcie;