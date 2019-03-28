// import Library
import React, { component} from 'react';
import { View, Text } from 'react-native';

// creat component
class Header extends component {
    render() {
        return (
            <View>
                <Text>A{this.props.title}</Text>
            </View>
        );
    }
}

//export
export default Header;
