import React,{ Component } from "react";
import {Text,View,TouchableOpacity,StyleSheet,KeyboardAvoidingView,Alert} from 'react-native'
import{createDrawerNavigator} from 'react-navigation-drawer'
import SettingScreen from "../screens/SettingScreen";
import {AppTabNavigator} from './AppTabNavigator'
import customSideBarMenu from './customSideBarMenu'
export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    setting:{
        screen:SettingScreen
    }
},
{contentComponent:customSideBarMenu},
{
    initialRootName:'Home'
})