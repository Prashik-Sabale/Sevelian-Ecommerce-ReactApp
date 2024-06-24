import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     isOpen: false,
// };

const CheckOutSlice = createSlice({
    name: "toggle",
    initialState: false,
    reducers: {
        open: (state) => {
            // state.isOpen = !state.isOpen;
            return !state;
        }
    }
});
export const { open } = CheckOutSlice.actions;

export default CheckOutSlice.reducer;