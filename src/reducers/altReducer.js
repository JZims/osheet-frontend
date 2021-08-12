

let initialState = {
    count: 0
}

let altReducer = (state = initialState, action) => {

    switch(action.type){
        case "inc":
            return{
                ...state, count: state.count + action.payload
            }

        default:
            return state
    }


    return state
}

export default altReducer