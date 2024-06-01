import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 1, // Начальное значение
};

const functions = createSlice({
    name: ' ',
    initialState,
    reducers: {
        multiplyByTwo: (state) => {
            state.value *= 2;
        },
        addThree: (state) => {
            state.value += 3;
        },
        subtractTwo: (state) => {
            state.value -= 2;
        },
        divideByThree: (state) => {
            state.value = state.value / 3;
        },
        setOne: (state) => {
            state.value = 1;
        },
    },
});

export const { multiplyByTwo, addThree, subtractTwo, divideByThree, setOne } = functions.actions;

export default functions.reducer;
