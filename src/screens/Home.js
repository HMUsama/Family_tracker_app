import React from 'react';
import { StyleSheet, Text, View,Button,Platform ,Linking,Dimensions,AppState,AsyncStorage} from 'react-native'
import { Header } from 'react-native-elements'
import MenuButton from '../components/button/MenuButton'
import Modal from 'react-native-modal'
import {  MapView, Permissions, Location,Constants,IntentLauncherAndroid} from 'expo'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
// import {Location} from '../store/actions/LocationAction'
import { Avatar } from 'react-native-elements';

 class Home extends React.Component {
  constructor(){
    super()
    this.state={
      location:'',
      latitude:'',
      longitude:'',
    }
  }
   componentDidMount() {
    console.log("======================================================================================");
    
    this._getLocationAsync();

  }

async componentWillMount(){
  // let key = Math.random().toString().substring(2,7);
  
  let userINFO = await AsyncStorage.getItem('userINFO');
  let U = JSON.parse(userINFO);
  console.log("++++++++++>>>>>>>>>>>>>>>>>AsyncStorage.",U)
  this.setState({
      userInfo:U,
      // ID:U.ID,
      // Name:U.Name,
      Picture:U.Picture,
      // location,
      Circle_key:key
  })
}
  _getLocationAsync = async () => {

        let { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
        
        let location = await Expo.Location.getCurrentPositionAsync({});
        // console.log("===================================================================================_getLocationAsync===");
        // this.setState({ location, condition: true });
        // console.log('current location================', location)

        Location.watchPositionAsync({ distanceInterval: 1 }, (coords) => {
            // console.log('current location===+++++++++++', coords)
            // db.collection("users").doc(usid).update({location, latitude: location.coords.latitude, longitude: location.coords.longitude})
            this.setState({ loca: true,location: coords, latitude: location.coords.latitude, longitude: location.coords.longitude })
            // this.ac()
            // this.componentDidMount()
            // this.componentWillMount()
        });


    };
  
  Button = async () =>{  
    this.props.navigation.navigate("Home")
  }
  render() {
    const {Picture} = this.state
    const {User} = this.props;
    // console.log("++++++++++++++++++++>>>>>>>",User)
    // console.log("+++++++++Picture+++++++++++>>>>>>>",Picture)
    return (
      <View style={styles.container}>
       <Header
        centerComponent={{ text: 'Family', style: { color: '#fff'  } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        />
      <MenuButton navigation={this.props.navigation}/>
      {/* <Text>{text}</Text> */}
      <MapView
          style={{ flex: 1,width:"100%",height:100 }}
          initialRegion={{
            latitude:24.8762,
            longitude: 67.0233,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            title:"Pak",
          }}
        >
       {/* {this.state.location ?   
                              <MapView.Marker
                              // coordinate={this.state.latitude}
                              // coordinate={this.state.longitude}
                              // coordinate={location}
                              coordinate={this.state.location.coordinate}
                              title={"Pak"}
                        />
                         :null
                      }  */}
          {/* User marker */}
          {this.state.loca &&
            // <MapView.Marker
            //   coordinate={this.state.location.coords}
            //   title={"Pak"}
            // />
               <MapView.Marker  coordinate={{latitude: item.lat,longitude: item.lon}} title={'Member Location'}>
                  <Avatar rounded size="small" source={{ uri:this.state.picture }} />
              </MapView.Marker>
          } 
     
     
      </MapView> 
      
      </View>
    );
  }
}
// const mapDispatchToProps=(dispatch)=>{
//   return {
//     Location:(CurrentLocation) => dispatch(Location(CurrentLocation))
//   }
// }

const mapStateToProps=(state,ownProps)=>{
    // console.log("STATE_______________________^^^^^^^^***********^^^^^^^_",state.firestore.data.Users)
    // console.log("OWN STATE+++++++++++++++++++++++++++++++++++++++++",ownProps)
    // const id = ownProps.navigation.state.key;
    const users = state.firestore.data.Users;
    // const user = users ? users : null
  // console.log("ID+++++++++++++++++++++>>>>>>>>>>>>>>>>>>>>",users)
  // console.log("ID+++++++++++++++++++++++++++++++++++++++++",user)
  return {
      User:users
  }
}
export default compose(connect(mapStateToProps),
                        firestoreConnect([
                            {collection:"circle"}
                        ]))
                        (Home);
// export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33865d',
    // width:420,
    // height:520,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#92C9EB',
  },
  Button:{
    marginTop:120,
    color:'white',
  },
});
