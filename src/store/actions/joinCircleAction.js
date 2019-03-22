  export const joinCircle = (code) =>{
    console.log("CIRCLE ACTIONS____________________________",code)
    return (dispatch,getState,{getFirebase,getFirestore})=>{
      // debugger;
  //     console.log("Circle dispatch--------------------------------" )
        // console.log("Circle dispatch++++++++++++++++++++++++++++++++",code.JCode )
        // console.log("----------------->>>>>>>>>>>>",code)
        // console.log("-----------------",code.userInfo)
              const Code = code.JCode
              // console.log("-----------------<<<<<<<<<<<<<<<",Code)
              const ID= code.userInfo.ID
              // console.log("-----------------***************",ID)
       const firebase = getFirebase();
       const firestore = getFirestore();
       firestore.collection("circle").where(`Name${Code}` ,'==' ,true)
       .get().then(res=>{
        // console.log("RESPONCE>>>>>>>>>>>>>>>>>>>>>>",res.docs)
        res.forEach(element => {
            console.log("==========>>>>>>>>>>>>>..",element.data())
        });
       })
      //  firestore.collection("circle").doc().collection("members").doc(ID).set({
      //    ID:code.userInfo.ID,
      //    Name:code.userInfo.Name,
      //    Picture:code.userInfo.Picture,
      //    Location:code.userInfo.location
      //  })
 
    //    firestore.collection("circle")
    //   //  .doc("ID","==",ID)
    //    .where("key","==",Code).get({

    //    })
    // .then(()=>{
    //    alert("SuccessFull Add Member");
    //  }).catch((error)=>{
    //    alert("Wrong Code");
    //  })
  }
}

