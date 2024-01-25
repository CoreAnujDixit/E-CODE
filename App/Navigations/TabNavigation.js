import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from '../Screen/HomeScreen';
import MyCourse from '../Screen/MyCourse';
import LeaderBoard from '../Screen/LeaderBoard';
import ProfileScreen from '../Screen/ProfileScreen';
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='My-Course' component={MyCourse} />
            <Tab.Screen name='LeaderBoard' component={LeaderBoard} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    )
}