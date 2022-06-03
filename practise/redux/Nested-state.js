const redux = require ('redux')
const produce = require('immer').produce

const initialState = {
    name: 'sachin',
    address : {
        street : '123 sec 1',
        city : 'New Delhi',
        state: 'Delhi',
    }
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case STREET_UPDATED:
        // return {
        //   ...state, //first create copy of iniitialState
        //   address : {
        //     ...state.address,
        //     street : action.payload
        //   },
        // }
        return produce(state, (draft) =>{     // same funtionality as above  
            draft.address.state = action.payload
        })
        
        default:
          return state
    }
  }

const store = redux.createStore(reducer)  //holding the application state
console.log('Initial state', store.getState());  // access to state

const unSubscribe = store.subscribe(()=> console.log('Update State', store.getState())) //listner

store.dispatch (updateStreet('000 sec 1'))  // Allows state to be updated via dispatch(action)
unSubscribe()