const initState = {
    authUser:null
}

const createCircle1 = (state= initState,action) =>{
    switch(action.type){
        case "CREATE_CIRCLE_SUCCESS":
        return{
            ...state,
            authError:null
        }
        case "CREATE_CIRCLE_ERROR":
        return{
            ...state,
            authError:'Try Again'
        }
        default:
        return state
    }
}

export default createCircle1;