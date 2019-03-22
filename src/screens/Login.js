import React from 'react'
import { connect } from 'react-redux'
import {userLogin} from '../store/actions/authActionUR'
import { StyleSheet, Text, View ,Button,AsyncStorage,TouchableOpacity} from 'react-native'
import { Tile } from 'react-native-elements'
import firestore from '../config/FbConfig'
import { Location } from 'expo';

class Login extends React.Component {
  constructor(){
    super()
    this.state={
      userInfo:'',
      ID:"",
      Name:'',
      Picture:'',
      location: null,
    }
  }

  componentDidMount() {
    
    this._getLocationAsync();

  }

  _getLocationAsync = async () => {

        let { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
        
        let location = await Expo.Location.getCurrentPositionAsync({});
        console.log("asssssssssssssssssss");
        this.setState({location});
        console.log('current location================', location)


    };

  
upload(){
  const { ID,Name,Picture,location} = this.state;
  let userINFO={
    ID:ID,
    Name:Name,
    Picture:Picture,
    location
  }
  AsyncStorage.setItem('userINFO',
  JSON.stringify(userINFO))
  this.props.userLogin(this.state)
  this.props.navigation.navigate("Drawer")
}

Login=async()=> {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('******FB ID*********', {
      permissions: ['public_profile'],
    });
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`)
    const userInfo = await response.json()
    
    console.log("userINFO",userInfo)
    console.log("ID",userInfo.id)
    console.log("Name",userInfo.name)
    console.log("Picture",userInfo.picture.data.url)
    this.setState({
      userInfo,
      ID:userInfo.id,
      Name:userInfo.name,
      Picture:userInfo.picture.data.url
    });
    this.upload()     
      }else{
        alert("Try Again")
      }
}

  render() {
    // console.log("+++++++++++",this.state.userInfo)
    return (
      <View style={styles.container}>
      <Tile
      style={styles.image}
        imageSrc={require('../../assets/fam.png')}
        // title="Wellcome To Family Traker"
        featured
        // caption="Some Caption Text"
        
      />
      {/* <Text style={styles.Text}>Wellcome To Family Traker</Text> */}
      {/* <Button
      style={styles.Button}
        title="Facebook SignIn"
        color="#841584"
        onPress={this.Login} 
        /> */}
         <TouchableOpacity style={styles.btn}  onPress={this.Login} >
              <Text style={styles.btn_text}>Log In with Facebook</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

// const mapStateToProps=()=>{
//   return {
    
//   }
// }
const mapDispatchToProps=(dispatch)=>{
  return {
    userLogin:(UserData) => dispatch(userLogin(UserData))
  }
}
// export default Login;
export default connect(null,mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  image:{
    
  },
  Button:{
    width:100,
  },
  container: {
    flex: 1,
    backgroundColor: '#16171f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
    marginTop:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '500',
        alignSelf: 'center'
    },
   btn: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 50,
        width: 320,
        color: '#fff',
        fontSize: 24,
        borderRadius: 50,
        fontWeight: '600',
        backgroundColor: '#14629D',
    }
});


















