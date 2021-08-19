import { combineReducers } from 'redux'
import userReducer from './userReducer.js'

let initialState = {
    count: 0
}

let countReducer = (state = initialState, action) => {

    switch(action.type){
        case "inc":
            return{
                ...state, count: state.count + 1
            }
        case "dec":
            return{
                ...state, count: state.count - 1 
            }

        default:
            return state
    }

}

const rootReducer = combineReducers({countReducer, userReducer})

export default rootReducer