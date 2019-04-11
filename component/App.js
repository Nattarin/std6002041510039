/*
import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
<<<<<<< HEAD
*/
// import Card from './Card';
=======
//import Card from './Card';
import Login from './Login';
>>>>>>> 9b0161b0c61c26e1dece6ae8fb1c2b4a99b38e51

import Login from './Login';
import Me from './Me';
import {createStackNavigator, createAppContainer} from 'react-navigation';

/*
export default class App extends React.Component {
    render() {
        return (
            <View>
<<<<<<< HEAD
                <Header name="อัลบั้ม" />
                <View style={{ marginTop: 20 }}>
                    <Card />
                </View>
=======
                <Header title="Login" />
                <Login/>
>>>>>>> 9b0161b0c61c26e1dece6ae8fb1c2b4a99b38e51
            </View>
        );
    }
}
<<<<<<< HEAD
*/

const AppNavigator = createStackNavigator(
    {
        Login: Login,
        Me: Me
    }, {
        // initialRouteName: "Login"
        initialRouteName: "Me"
    }
);

export default createAppContainer(AppNavigator);
=======
//export
export default App;
>>>>>>> 9b0161b0c61c26e1dece6ae8fb1c2b4a99b38e51
