import React,{component} from 'react';
import HomeScreen from './Screen/HomeScreen';
import ExchangeScreen from './Screen/ExchangeScreen';
import{createStackNavigator} from 'react-navigation-stack';

export const AppStackNavigator=createStackNavigator({
   HomeScreenList:{
       screen:HomeScreen,
       navigationOptions:{
           HeaderShown:false
       }
   },
   exchangeScreen:{
       screen:ExchangeScreen,
       navigationOptions:{
           HeaderShown:false
       }
    }
   },
   {
   initialRootName:'HomeScreenList'
   
})