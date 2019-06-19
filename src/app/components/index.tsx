/**
 * Gaspar Móveis
 * 
 * @author David Gaspar
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class GasparMoveis extends Component {

    public render(): JSX.Element {
        // Destructuring assignment
        const { container }: any = style;

        return (
            <View style={container}>
                <Text>Hello World!</Text>
            </View>
        );
    }

}

const style: any = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});