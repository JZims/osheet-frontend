

let initialUser = {
    userName: '', 
    password: ''
}

let userReducer = (state = initialUser, action) => {

    switch(action.type){
        case "login":
            return{
                ...state, userName: action.name, password: action.password
            }

        default:
            return state
    }
}

export default userReducer