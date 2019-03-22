import React from 'react';
import { StyleSheet,  View,Image,Text} from 'react-native'
import { Header } from 'react-native-elements'
import {  MapView, Permissions, Location} from 'expo';
// import { connect } from 'react-redux'
// import {userLogin} from '../store/actions/authActionUR'


export default class Map extends React.Component {
  constructor(){
    super()
    this.state={
      location:null,
      marker:[{
        title:'usama',
        discription:'pakistan',
        coordinate:{
            latitude:24.8937,
            longitude: 67.2163,
        },
      },
      {
        title:'Umer',
        discription:'pakistan ka map',
        coordinate:{
            latitude:24.8762,
            longitude:67.0233,
        },
      },
      ]
    }
  }
 
  componentDidMount(){
    this._getLocationAsync();
  }
   _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        let location = await Location.getCurrentPositionAsync({});
        console.log("Location********************************************",location)
        this.setState({location})
      }else{
        alert("Done have Permission")
      }
    };

  render() { 
    console.log("LOCATION",this.state.location)
    // console.log("COORDS",this.state.coordinate)
    return ( 
  
        <MapView
      style={{  }}
      initialRegion={{
        // latitude: this.state.location.coords.latitude,
        // longitude: this.state.location.coords.longitude,
        latitude:24.8762,
        longitude: 67.0233,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
                        {/* User marker */}
    {this.state.location ?   
            <MapView.Marker
            coordinate={this.state.location}
            coordinate={location.coordinate}
            title={"Pak"}
       />:null
    }
                        {/* friends Marker*/}
    {this.state.marker.map(marker=>( 
      <MapView.Marker
            coordinate={this.state.location}
            coordinate={marker.coordinate}
            title={marker.title}
       />
          ))} 
         
          </MapView> 

      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
    //   paddingTop: Expo.Constants.statusBarHeight,
      backgroundColor: 'grey',
      // padding: 2,
    },
    
  });



