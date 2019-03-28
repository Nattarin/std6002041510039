import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
           <View>
               <CardSection>
                   <View style={styles.images}>
                        <Image
                            style={{width: 100, height: 100 }}
                            source={{uri: 'https://images.unsplash.com/photo-1513569026477-146b9135d2ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'}}
                        />
                         <Text>Car Classic</Text>
                    </View>
                
               </CardSection>
               <CardSection>
                <Image
                    style={{width: 450, height: 300 }}
                    source={{uri: 'https://images.unsplash.com/photo-1512562848786-ed86b318eab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80'}}
                />
               </CardSection>

               <CardSection>
                   <View style={styles.button}>
                    <View style={{ width: 100, backgroundColor: 'red' }}>
                        <Button
                            title="Buy"
                        />
                    </View>
                   </View>
               </CardSection>
               
           </View> 
        );
    }
}

const styles = {
    button: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 10 
    },
    images: {
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default Card;
