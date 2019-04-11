// import libray
import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';

// write component 
class About extends Component {
    constructor() {
        super();
        this.state ={
            name: '',
            email: ''
        }
    }

    componentDidMount() {
        const url = 'http://128.199.240.120:9999/api/auth/me';
        const config = {
            headers: {
                accept: '*/*',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1Y2FhZTQ3YzBhYTc3ZjQwYzQyZjAzN2QiLCJpYXQiOjE1NTQ5NjkyMjd9.2xZ2fT1Y-cAIA3IR1SUTJI2Yieme5TB1yo-pkHu8Z7U'
            }
        }

        axios.get(url, config)
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

    render() {
        if (this.state.name == '') {
            <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        }
        return (
            <View>
                <Text style={styles.text}>Name: {this.state.name}</Text>
                <Text style={styles.text}>Email: {this.state.email}</Text>
            </View>
        );
    }
}

const styles = {
    text: {
        fontSize: 30
    }
}

// export 
export default About;
  
