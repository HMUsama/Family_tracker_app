import { combineReducers } from 'redux'
import  UserDetails      from './reducerUR'
import createCircle1 from './CircleReducer'
import {firebaseReducer}   from 'react-redux-firebase'
import {firestoreReducer}  from 'redux-firestore'


const rootReducers  = combineReducers({
    Circle:      createCircle1,
    
    userDetails:       UserDetails,

    firebase:     firebaseReducer,
    firestore:    firestoreReducer
});

export default rootReducers;

