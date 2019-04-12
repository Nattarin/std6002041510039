// import library
import React, { Component } from 'react';
import { View, Text, TextInput, Button,Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// write component
class Login extends Component {
    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: "#990000",
        },
        headerTintColor: "#FFF",
    }
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        // this.onChangeEmail = this.onChangeEmail.bind(this)
    }
    async componentDidMount() {
        const {navigate} = this.props.navigation;   
        const token = await AsyncStorage.getItem('@storage_Token')
        if (token) {
            return navigate('Profile')
        }
    }
    onChangeEmail(e) {
        console.log('onChangeEmail', e)
        this.setState({ email: e}) 
    }
    onChangePassword(e) {
        this.setState({ password: e})
    }
    async onPress() {
        // console.log(this.state)
        const url = 'http://128.199.240.120:9999/api/auth/login'
        await axios.post(url, this.state)
            .then(async response => {
                // console.log('token ', response.data.data.token)
                await AsyncStorage.setItem('@storage_Token', response.data.data.token)
                const {navigate} = this.props.navigation;
                return navigate('Profile')
            }).catch(error=>{
                alert('Email or Password Incorrect');
            })

        
        // console.log('token', token)
    }
    render() {
        // const {navigate} = this.props.navigation;
        // return navigate('Profile')
        return (
            <View style={{marginTop:30}}>
                <TextInput
                    style={styles.textstyle}
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={this.onChangeEmail.bind(this)}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textstyle}
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={this.onChangePassword.bind(this)}
                />
                <View style={{width:350,marginLeft:30,marginTop:10}}>
                    <Button  
                        title="Login"
                        onPress={this.onPress.bind(this)}
                    />
                </View>
            </View>
        );
    }
}
const styles = {
    textstyle:{
        fontSize:22,
        height:50,
        width:350,
        backgroundColor:'#e0dede',
        fontWeight:'bold',
        borderRadius:7,
        marginLeft:30,
        borderWidth: 1.5,     
        borderColor: '#b5b5b5',
        marginTop:7
    },
}; 
// export
export default Login;