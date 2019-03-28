//import Library
import React from 'react';
import { View , Text } from 'react-native';
import Header from './Header';
import Card from './Card';

//write component
class App extends React.Component{
    render() {
        return (
            //component about react native
            <View>
                <Header title="Albums" />
                <Text> May</Text>
                <Text> 6002041510039</Text>
                <Card/>
            </View>
        );
    }
}

//export
export default App;