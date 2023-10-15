import { createSlice } from "@reduxjs/toolkit"




const initialState = {
    color : "#201313",
    possibleColors : []
}

const color = createSlice({
    name:"color",
    initialState,
    reducers: {
        SET_COLOR : (state,action) => {
            state.color = action.payload
            state.possibleColors = action.payload
        }
    }
})



export const {SET_COLOR} = color.actions

export default color.reducer