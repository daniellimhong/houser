import {createStore} from 'redux';

const initialState = {
    houses: [],
    
}

function reducer(state = initialState, action){
    switch(action.type){

        default: return state
    }
}

export default createStore(reducer)