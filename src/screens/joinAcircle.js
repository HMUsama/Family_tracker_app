import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,AsyncStorage} from 'react-native'
import { Header ,Input,Button,Avatar } from 'react-native-elements'
import CodeInput from 'react-native-code-input'
import BackButton from '../components/button/BackButton'
import { connect } from 'react-redux'
import {joinCircle} from '../store/actions/joinCircleAction'
// import HomeButton from '../components/button/HomeButton'


 class HomeButton extends React.Component {
    constructor(props){
        super(props)
        this.state={
            JCode:'',
        }
    }
    onChangeText=(e)=>{
      this.setState({
        JCode:e
      })
   }  
    async componentWillMount(){
      let userINFO = await AsyncStorage.getItem('userINFO');
      let U = JSON.parse(userINFO);
      console.log("componentWillMount++++++++++",U)
      console.log("componentWillMount++++++++++JCode",this.state.JCode)
      this.setState({
        userInfo:U,
      })

  }

submit=()=>{
  const {JCode} =this.state;
  if(JCode){

    this.props.joinCircle(this.state);
  }
  else{
    alert("Enter a Code");
  }
}
  render() {
    return (
      <View style={styles.container}>
       <Header
      centerComponent={{ text: 'Join a Circle', style: { color: '#fff'  } }}/>
     <BackButton navigation={this.props.navigation}/>
      <Text style={styles.heading} >Enter Your invite code</Text> 
      <Input
            onChangeText={this.onChangeText}
            style={styles.input}
            placeholder='Enter Circle Name'
            inputStyle={{marginLeft:80}}
        />
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.heading1} >Aks the Circle create for their code</Text>
     <Button
     onPress={this.submit}
        style={styles.Button}
        title="Submit"
        />
        </View>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    joinCircle:(code) => dispatch(joinCircle(code))
  }
}
export default connect(null,mapDispatchToProps)(HomeButton);

const styles = StyleSheet.create({
    hd:{
        fontSize:20,
    },
    txt: {
      fontSize: 22,
      fontWeight: '500',
      marginTop: 70
  },
    Button:{
        color:'#f47373',
        marginTop:40,
        fontSize:55,
    },
    input:{
        marginTop:50, 
        marginBottom:40, 
    },
  container: {
    // flex: 1,
    // backgroundColor: '#33865d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
      fontSize:25,
      marginTop:80,
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
