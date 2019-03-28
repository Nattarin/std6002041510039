import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View>
            <View style={{ flexDirection: "row"}}>
                <Image 
                        style={{ width:70, height:70, marginLeft: 10, marginTop: 10 }}
                        source={{ uri: 'https://images.unsplash.com/photo-1513569026477-146b9135d2ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80' }} 
                />
                <View style={{ marginTop: 25, marginLeft: 10}}>
                    <Text> Album Name : Classic Car </Text>
                    <Text> Photo By Nattrin </Text>
                </View>
              </View>  

                <Image 
                        style={{ width:390, height:270, marginLeft: 10, marginTop: 20, alignItems: 'center' }}
                        source={{ uri: 'https://images.unsplash.com/photo-1512562848786-ed86b318eab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80' }} 
                />
                
                    <View style={styles.button}>
                    <View style={{ width: 150, backgroundColor: 'red' }}>
                            <Button
                                title="Buy"
                            />
                        </View>
                    </View>
                </View>
            
        );   
    }
}
const styles = {
    button: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 10 ,
    }
}
export default Card;
