

export const userLogin = (UserData) =>{
        console.log("UserDetails______________",UserData.userInfo.id)
     
        // console.log("UserDetails++++++++++++++",UserData[userInfo[id]])
        
    return (dispatch,getState,{getFirebase,getFirestore})=>{
       const firebase = getFirebase();
       const firestore = getFirestore();
       const ID = UserData.userInfo.id;
    //    console.log("Picture URL______________",UserData)
    //    firestore.collection("Users").doc(UserData.userInfo.id).set({
        firestore.collection("Users").doc(ID).set({
            ID:ID,
            name:UserData.userInfo.name,
            picture:UserData.userInfo.picture.data.url,
            location:UserData.location
       }).then(()=>{
           dispatch({type:"USER_DETAILS_SUCCESS"})
       }).catch((error)=>{
           dispatch({type:"USER_DETAIL_ERROR",error});
       })
    }
}