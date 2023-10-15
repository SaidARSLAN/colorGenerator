import { createSlice } from "@reduxjs/toolkit"




const initialState = {
    color : "#201313"
}

const color = createSlice({
    name:"color",
    initialState,
    reducers: {
        SET_COLOR : (state,action) => {
            state.color = action.payload
        }
    }
})



export const {SET_COLOR} = color.actions

export default color.reducer