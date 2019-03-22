
const initState = {
    authUser:null
}

const UserDetails = (state= initState,action) =>{
    switch(action.type){
        case "USER_DETAILS_SUCCESS":
        console.log("User Add")
        return{
            ...state,
            authError:null,
        }
        case "USER_DETAIL_ERROR":
        return{
            ...state,
            authError:'Try Again'
        }
        default:
        return state
    }
}

export default UserDetails;