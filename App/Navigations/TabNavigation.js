import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import React from 'react'
import HomeScreen from '../Screen/HomeScreen';
import MyCourse from '../Screen/MyCourse';
import LeaderBoard from '../Screen/LeaderBoard';
import ProfileScreen from '../Screen/ProfileScreen';
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
    return (
        <View style={styles.container}>
            <Tab.Navigator screenOptions={
                {
                    headerShown: false
                }
            }>
                <Tab.Screen name='Home' component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="home" size={size} color={color} />
                        )
                    }} />
                <Tab.Screen name='My-Course' component={MyCourse}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="book" size={size} color={color} />
                        )
                    }} />
                <Tab.Screen name='LeaderBoard' component={LeaderBoard}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="barschart" size={size} color={color} />
                        )
                    }} />
                <Tab.Screen name='Profile' component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 name="user-graduate" size={size} color={color} />
                        )
                    }} />
            </Tab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 723
    }
})