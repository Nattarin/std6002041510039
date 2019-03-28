//import Library
import React from 'react';
import { View , Text } from 'react-native';
import Header from './Header';

//write component
class App extends React.Component{
    render() {
        return (
            //component about react native
            <View>
                <Header title="Albums" />
                <Text> Nattarin</Text>
                <Text> 6002041510039s</Text>
            </View>
        );
    }
}

//export
export default App;