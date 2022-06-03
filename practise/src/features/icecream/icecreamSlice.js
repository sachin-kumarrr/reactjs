import {createSlice} from '@reduxjs/toolkit'  //...step 1
import { ordered as cakeOrdered } from '../cake/cakeSlice'

const initialState = {          //..step 2 crate state
    numberOfIcecreams: 20,
}

const icecreamSlice = createSlice({    //..step 3
    name: 'icecream',
    initialState,
    reducers:{
        ordered:(state) => {
            state.numberOfIcecreams--
        },
        restocked:(state, action) => {
            state.numberOfIcecreams += action.payload
        },
    },
    //free icecream given for every single cake ordered 2 methods
    // extraReducers: {
    //     ['cake/ordered']:(state) =>{
    //         state.numberOfIcecreams--
    //     },
    // },
    extraReducers: (builder) =>{
        builder.addCase(cakeOrdered,(state) =>{
            state.numberOfIcecreams--
        })
    },
})

export default icecreamSlice.reducer    //..step 4
export const {ordered, restocked} = icecreamSlice.actions  //..step 5