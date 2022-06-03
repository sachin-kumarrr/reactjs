const redux = require('redux')
const createStore = redux.createStore
const thunkMiddleware = require('redux-thunk').default
const applyMiddleware = redux.applyMiddleware
const axios = require('axios')

//state

const iniitialState = {
    loading: false,
    users: [],
    error: '',
}

//action

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    }
}
const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    }
}
const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    }
}

//reducer

const reducer = (state = iniitialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}


//axios

const fetchUsers = () =>{
    return function(dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            const users = response.data.map((user) => user.id)
            dispatch(fetchUserSuccess(users))
        }).catch ((error) => {
            dispatch(fetchUserFailure(error.message))
        })
    }
}

//store

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(()=> {console.log(store.getState())})
store.dispatch(fetchUsers())