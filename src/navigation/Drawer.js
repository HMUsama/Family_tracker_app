import React from 'react'
import { createDrawerNavigator, 
    createMaterialTopTabNavigator, 
    createStackNavigator, createAppContainer } from "react-navigation"
import {Platform,Dimensions} from 'react-native' 
import Home from '../screens/Home'
import Circle from '../screens/Circle'
import joinAcircle from '../screens/joinAcircle'
import MenuDrawer from '../components/menuDrawer/MenuDrawer'
import MyCircle from '../screens/my_Circle'
import LogOut from '../screens/Logout'
// import { Avatar } from 'react-native-elements';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.85,
    contentComponent:({navigation})=>{
        return(<MenuDrawer navigation={navigation}/>)
    }
}

const StackNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    Circle: {
        screen: Circle
    },
    joinAcircle: {
        screen: joinAcircle
    },
})
const DrawerNavigator = createDrawerNavigator(
    {   
        // Home: {
        //     screen: Home
        // },
        joinAcircle : {
            screen: joinAcircle
        },
        Circle: {
            screen: Circle
        },
        MyCircle: {
            screen: MyCircle
        },
        LogOut: {
            screen: LogOut
        },
    },
    DrawerConfig
)

const Drawer = createAppContainer(DrawerNavigator)

export default Drawer
