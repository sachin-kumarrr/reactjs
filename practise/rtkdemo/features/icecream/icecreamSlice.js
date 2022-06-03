const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice //...step 1

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
        builder.addCase(cakeActions.ordered,(state) =>{
            state.numberOfIcecreams--
        })
    },
})

module.exports = icecreamSlice.reducer    //..step 4
module.exports.icecreamActions = icecreamSlice.actions  //..step 5