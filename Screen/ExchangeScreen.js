import React,{Component} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,KeyboardAvoidingView,TextInput,Alert,ScrollView,Modal} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../Component/MyHeader';

export default class ExchangeScreen extends Component{
    constructor(){
        super();
        this.state={
objectName:'',
ObjectDescription:'',
userId:'',
randomRequestId:''
        }
    }
AddItem=(objectName,ObjectDescription)=>{
var userId=this.state.userId
var randomRequestId=this.createUniqueId()
db.collection('Requested_Objects').add({
    user_Id:userId,
    Object_Name:ObjectName,
    Object_Description:ObjectDescription,
    Request_Id:randomRequestId
})
this.setState({
    objectName:'',
    ObjectDescription:''
})
return Alert.alert("Item added successfully")
}
createUniqueId(){
return Math.random().toString(36).substring(7);
}

 render(){
     return(
         <View>
             <MyHeader title="Exchange Objects"/>
                 <KeyboardAvoidingView style={StyleSheet.keyBoardStyle}>
                     <TextInput style={styles.formTextInput}
                     placeholder="Enter Object Name"
                     onChangeText={(text)=>{
                     this.setState({
                         ObjectName:text
                     })
                     }}></TextInput>
                     <TextInput style={Styles.formTextInput}
                     placeholder="Object description"
                     onChangeText={(text)=>{
                     this.setState({
                         ObjectDescription:text
                     })
                     }}></TextInput>

                    <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        this.AddItem(this.state.objectName,this.state.ObjectDescription)
                    }}>
                        <Text>Add Item</Text>
                    </TouchableOpacity>
                 </KeyboardAvoidingView>
                
         </View>
     )
 }
}
