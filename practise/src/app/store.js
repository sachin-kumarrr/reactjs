import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')  //..step 1 logger
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'  //..step 6
import userReducer from '../features/user/userSlice' //..step 6 axios

// const logger = reduxLogger.createLogger() // step2 logger

const store = configureStore({    //..multiple reducers 
    reducer: {
        cake: cakeReducer,
        icecream :icecreamReducer, //..step 7
        user: userReducer,  //..step 7 axios  ..step 8 in index.js file
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), //..step3  logger
})

export default store