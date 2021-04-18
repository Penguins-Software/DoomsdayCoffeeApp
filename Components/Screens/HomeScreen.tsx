import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import ShoppingCart from './AppTabNavigator/ShoppingCart'
import Food_Drink from './AppTabNavigator/Food_Drink'
import TestTab from './AppTabNavigator/TestTab'
        

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
import { Icon } from 'native-base'

const Tab = createBottomTabNavigator();


class MainScreen extends Component {

    static navigationOptions = {

        //headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} />,
        title: "Doomsday Coffees",
        //headerRight: <Icon style={{ paddingRight: 10 }} name="ios-send-outline" />
    }

    render() {
        return (
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeTab} />
                    <Tab.Screen name="Search" component={SearchTab} />
                    <Tab.Screen name="AddMedia" component={AddMediaTab} />
                    <Tab.Screen name="Likes" component={LikesTab} />
                    <Tab.Screen name="Profile" component={ProfileTab} />
                    <Tab.Screen name="Cart" component={ShoppingCart}/>
                    <Tab.Screen name="Food_Drink" component={Food_Drink} />
                    <Tab.Screen name="Test" component={TestTab} />
                </Tab.Navigator>
        );
    }
}
export default MainScreen;

/*{

    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab

    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }

}, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'white'
                    }
                })
            },
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true
        }
    })*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});