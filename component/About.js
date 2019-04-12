// import libray
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// write component 
class About extends Component {
    static navigationOptions = {
        title: 'Profile',
        headerStyle: {
            backgroundColor: "#990000",
        },
        headerTintColor: "#FFF",
    }
    constructor() {
        super();
        this.state ={
            name: '',
            email: ''
        }
    }

    async componentDidMount() {
        const token = await AsyncStorage.getItem('@storage_Token')
        axios.get("http://128.199.240.120:9999/api/auth/me", {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            .then(response => {
                console.log(response.data.data);
                this.setState({
                    email: response.data.data.email,
                    name: response.data.data.name
                })
            })
            .catch(error => {
                console.log('error', error);
            })
    }
    async PressLogout(){
        await AsyncStorage.removeItem("@storage_Token");
        this.props.navigation.navigate("Login");
    }
    render() {
        if (this.state.name == '') {
            return <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        }
        return (
            <View style={{marginTop:20,width:350}}>
                <Text style={styles.text}>Name: {this.state.name}</Text>
                <Text style={styles.lastText}>Email: {this.state.email}</Text>
                
                <View style={{width:350,marginLeft:30,marginTop:10}}>
                    <Button 
                        title="Back"
                        onPress={() =>
                            this.props.navigation.push('Login')}
                    />
                </View>
                <View style={{width:350,marginLeft:30,marginTop:10}}>
                    <Button  
                            title="Logout"
                            onPress={this.PressLogout.bind(this)}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    text: {
        fontSize: 25,
        marginLeft: 20,
    },
    lastText: {
        fontSize: 25,
        marginLeft: 20,
    }
}

// export 
export default About;