const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk //..step 1 async
const { buildQueries } = require('@testing-library/react')
const axios = require('axios') //..step2 async

const initialState = {
    loading: false,
    users: [],
    error: ''
}

//..step 3 axios
// generates pending, fulfilled and rejected action types

const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.data.map(user => user.id))
})


//..step4 axios action creater

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state =>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state,action) =>{
            state.loading = false
            state.users = action.payload
            state.error =''
        })
        builder.addCase(fetchUsers.rejected, (state,action) =>{
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

//..step 5 
module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers

//.step 6 in store.js file