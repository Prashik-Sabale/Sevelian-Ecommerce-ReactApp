import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
        Add: (state, action) => {
            return state + 1
        }
    }
})
export const { Add } = countSlice.actions
export default countSlice.reducer