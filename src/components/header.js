//Import librares for making the component

import React from 'react';
import { Text, View } from 'react-native';

//Make the component

const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>New Header</Text>
        </View>
    )
};

const styles = {
    viewStyle : {
        backgroundColor : '#F8F8F8',
        justifyContent : 'center',
        alignItems : 'center',
        height : 60,
        paddingTop : 15,
        shadowColor : '#000',
        shadowOffset : {width : 0, height:5},
        shadowOpacity : 0.2
    },
    textStyle: {
        fontSize: 15
    }
};

//Make the component available to other parts of the app
export default Header;
