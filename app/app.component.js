import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, ScrollView, ListView, ToolbarAndroid } from 'react-native';
import Drawer from 'react-native-drawer'
import Button from 'react-native-button';

import MyScene from './categories/categories.component';
import SideContent from './side-content/side-content.component';
import BottomBar from './bottom-bar/bottom-bar.component';




export default class App extends Component {

    isOpened = false;

    toggleSideDrawer() {
        this.isOpened ? this._drawer.close() : this._drawer.open();
        this.isOpened = !this.isOpened;
    }


        // <MainView 
        //     toggleSideDrawer={this.toggleSideDrawer.bind(this)}
        // />

    render() {
        return (

            <Drawer
                ref={(ref) => this._drawer = ref}
                content={<SideContent />}
                openDrawerOffset={100}
                open={true}
                styles={drawerStyles}
                >

                <View style={{flex: 1}}>
                    <ScrollView>


                        <Navigator
                            initialRoute={{ title: 'My Initial Scene', index: 0 }}
                            renderScene={(route, navigator) =>


                                <MyScene
                                    title={route.title}

                                    // Function to call when a new scene should be displayed           
                                    onForward={ () => {    
                                      const nextIndex = route.index + 1;
                                      navigator.push({
                                        title: 'Scene ' + nextIndex,
                                        index: nextIndex,
                                      });
                                    }}

                                    // Function to call to go back to the previous scene
                                    onBack={() => {
                                      if (route.index > 0) {
                                        navigator.pop();
                                      }
                                    }}
                                />
                            }
                        />

                    </ScrollView>

                    <BottomBar />

                </View>

            </Drawer>

        )
    }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}
