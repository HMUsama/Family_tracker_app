import React from 'react';
import { StyleSheet, Text, View,Image,AsyncStorage,ScrollView} from 'react-native'
import { Header ,Input,Button} from 'react-native-elements'
import { connect } from 'react-redux'
import BackButton from '../components/button/BackButton'
import {createCircle} from '../store/actions/createCircleAction'


 class Circle extends React.Component {
    constructor(props){
        super(props)
        this.state={
          // ID:null,
          // Name:null,
          // Picture:null,
          // location:null,
          // circle:"" ,
          // key:"",

          ID:"",
          Name:"",
          Picture:"",
          location:"",
          circle: '',
          Circle_key:'',
        }
    }
onChangeText=(e)=>{
   this.setState({
    circle:e
   })
}

async componentWillMount(){
  let key = Math.random().toString().substring(2,7);
  
  let userINFO = await AsyncStorage.getItem('userINFO');
  let U = JSON.parse(userINFO);
  console.log("++++++++++",U)
  this.setState({
      userInfo:U,
      // ID:U.ID,
      // Name:U.Name,
      // Picture:U.Picture,
      // location,
      Circle_key:key
  })
}


 submit=()=>{
  const {circle} = this.state;
  if (circle) {
    this.props.createCircle(this.state)
}
  else{
      alert("Enter a name");
  }
  // this.props.navigation.navigate("Home")
  this.setState({
    Circle_key:''
  })
}

  render() {
    // console.log("State",this.state.addCircle)
    return (
      <View style={styles.container}>
     <Header
      centerComponent={{ text: 'Add Circle', style: { color: '#fff'  } }}
      // rightComponent={{ icon: 'home', color: '#fff' }}
      />
        <BackButton navigation={this.props.navigation}/>
              <Text style={styles.heading} >Enter Your Circle Name</Text>
              <Input
              onChangeText={this.onChangeText}
              style={styles.input}
                placeholder=' Circle Name'
                inputStyle={{marginLeft:80}}
              />
                <Text>{this.state.text}</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text style={styles.heading1} >Suggested Circle name</Text>
              <Button
                onPress={this.submit}
                style={styles.Button}
                title="Create"
                />
        </View>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    createCircle:(circle) => dispatch(createCircle(circle))
  }
}
export default connect(null,mapDispatchToProps)(Circle);
// export default Circle










const styles = StyleSheet.create({
    Button:{
        color:'#f47373',
        marginTop:40,
        fontSize:55,
    },
    input:{
        marginTop:80, 
        marginBottom:40, 
    },
  container: {
    // flex: 1,
    // backgroundColor: '#33865d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
      fontSize:20,
      marginTop:40,
      marginLeft:7,
      marginBottom:40,
      alignItems:'center',
      justifyContent: 'center',
  }, 
  heading1:{
    fontSize:15,
    marginTop:40,
    marginBottom:40,
    alignItems:'center',
    justifyContent: 'center',
}
});
