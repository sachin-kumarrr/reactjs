const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

//Action creater for cake
const CAKE_ORDERED = 'CAKE_ORDERED'   //action 1
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'  //action 2
  
function orderCake() {
  return {
    type : CAKE_ORDERED,
    payload : 1,           //payload is convention
  }
}
function restockCake(qty = 1) {
  return {
    type : CAKE_RESTOCKED,
    payload : qty,
  }
}

//Action creater for IceCream
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'   //action 1
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'  //action 2
  
function orderIceCream(qty = 1) {
  return {
    type : ICECREAM_ORDERED,
    payload : qty,           //payload is convention
  }
}
function restockIceCream(qty = 1) {
  return {
    type : ICECREAM_RESTOCKED,
    payload : qty,
  }
}

//  defining state of the application as an object
//defining initital state for the cake
const initialCakeState = {
  numberOfCakes: 10,
  //suppose contain another property
  //anotherProperty: 0,
}

//defining initital state for the IceCream
const initialIceCreamState = {
  numberOfIceCream: 10,
  
}


//Reducer function for cake // (previousState, action) => newState

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
      case CAKE_ORDERED:
        return {
          ...state, //first create copy of iniitialState
          numberOfCakes : state.numberOfCakes - 1,
        }
        case CAKE_RESTOCKED:
        return {
          ...state, 
          numberOfCakes : state.numberOfCakes + action.payload,
        }
        default:
          return state
    }
}

//Reducer function for IceCream // (previousState, action) => newState

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state, //first create copy of iniitialState
        numberOfIceCream : state.numberOfIceCream - action.payload,
      }
      case ICECREAM_RESTOCKED:
      return {
        ...state, 
        numberOfIceCream : state.numberOfIceCream + action.payload,
      }
      default:
        return state
  }
}

//multiple reducer store

const rootReducer = combineReducers({
  cake : cakeReducer,
  iceCream : iceCreamReducer,
})

//store 

// const store = createStore(rootReducer)  //holding the application state
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState());  // access to state

// const unSubscribe = store.subscribe(()=> console.log('Update State', store.getState())) //listner
const unSubscribe = store.subscribe(()=>{})
 
store.dispatch (orderCake())  // Allows state to be updated via dispatch(action)
store.dispatch (orderCake())
store.dispatch (orderCake())
store.dispatch(restockCake(3))

store.dispatch (orderIceCream())
store.dispatch (orderIceCream())
store.dispatch(restockIceCream(3))



unSubscribe()