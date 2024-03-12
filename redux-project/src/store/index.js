import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const TOGGLE = 'toggle';
export const INSCREASE = 'increase';

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

const counterReducer = (state = initialCounterState, action) => {

    if (action.type === INSCREASE) {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        }
    }

    if (action.type === INCREMENT) {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        }
    }

    if (action.type === DECREMENT) {
        return {
            counter: state.counter > 0 ? state.counter - 1 : state.counter,
            showCounter: state.showCounter,
        }
    }

    if (action.type === TOGGLE) {
        return {
            counter: state.counter,
            showCounter: !state.showCounter,
        }
    }

    return state;
}

// const store = createStore(counterReducer);

// for multiple reducers you can define keys 'counter'
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

// const store = configureStore({
//     reducer: counterSlice.reducer
// });

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
