import React from 'react';
import { StyleSheet, Text, View ,AsyncStorage, ScrollView ,Image } from 'react-native'
import { Header ,Input,Button,Avatar ,ListItem,List} from 'react-native-elements'
import BackButton from '../components/button/BackButton'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Location } from 'expo';





 class MyCircle extends React.Component {
  constructor(){
    super();
    this.state={
      ID:'',
      Name:'',
      Picture:'',
    }
  }
async componentWillMount(){
  
  let userINFO = await AsyncStorage.getItem('userINFO');
  let U = JSON.parse(userINFO);
  console.log("componentWillMount++++++++++ MY CIRCLE",U) 
  this.setState({
      userInfo:U,
      // ID:U.ID,
      // Name:U.Name,
      // Picture:U.Picture,
      // location,
  })
}



  render() {
    console.log("-=--=-=-=-=-",this.state.Name)
    return (
      <View>
          <Header centerComponent={{ text: 'My Circle ', style: { color: '#fff'  } }}/>
            <BackButton navigation={this.props.navigation}/>
            <ListItem
              title={this.state.Name}
              subtitle={
                <View style={styles.subtitleView}>
                  <Image source={{uri:this.state.Picture}} style={styles.ratingImage}/>
                  {/* <Text style={styles.ratingText}>5 months ago</Text> */}
                </View>
              }
              leftAvatar={source={uri:this.state.Picture}}
            />
            <ListItem
              title={this.state.Name}
              subtitle={
                <View style={styles.subtitleView}>
                  <Image source={{uri:this.state.Picture}} style={styles.ratingImage}/>
                  {/* <Text style={styles.ratingText}>5 months ago</Text> */}
                </View>
              }
              leftAvatar={source={uri:this.state.Picture}}
            />
      </View>
    );
  }
}

const mapStateToProps=(state,ownProps)=>{
  console.log("STATE_______________________^^^^^^^^***********^^^^^^^_",state.firestore.data.Users)
  // console.log("OWN STATE+++++++++++++++++++++++++++++++++++++++++",ownProps)
  // const id = ownProps.navigation.state.key;
return {
    // User:user
}
}
export default compose(connect(mapStateToProps),
                      firestoreConnect([
                          {collection:"circle"}
                      ]))
                      (MyCircle);
// export default MyCircle;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D8631',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
});
