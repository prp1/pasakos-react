import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, ScrollView, ListView, ToolbarAndroid } from 'react-native';
import Button from 'react-native-button';

export default class BottomBar extends Component {
  render() {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            
            <View style={{flex: 1, height: 50, backgroundColor: 'powderblue'}}>
                <Button
                    style={{fontSize: 20, color: 'green'}}
                    styleDisabled={{color: 'red'}}
                    onPress={() => this.props.toggleSideDrawer()}>
                    Press Me!
                </Button>          

            </View>

            <View style={{flex: 1,height: 50, backgroundColor: 'skyblue'}} />
        
            <View style={{flex: 1, height: 50, backgroundColor: 'steelblue'}} />

        </View>
    );
  }
}