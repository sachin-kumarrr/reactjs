const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions //..step 8
const fetchUsers = require('./features/user/userSlice').fetchUsers //..step 8 axios
console.log('Initial State', store.getState());

const unSubscribe = store.subscribe(()=>{
    console.log('Updated state', store.getState());
})

store.dispatch(fetchUsers())  //..step 9 axios

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))


// store.dispatch(icecreamActions.ordered()) //..step 9
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(2))

// unSubscribe()