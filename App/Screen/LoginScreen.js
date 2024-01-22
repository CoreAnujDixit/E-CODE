import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/img-portrait.png')} />
            <View style={styles.viewer} />
            <Text style={styles.txt}>E-CODE</Text>
            <Text style={[styles.txt, {
                color: "#dadada",
                fontSize: 20,
                fontFamily: 'outfit',
                bottom: 290,

            }]}>Ultimate Learning Through this APP!</Text>
            <TouchableOpacity style={styles.login} onPress={() => { console.log("Pressed") }}>
                <Image style={styles.google} source={require('../../assets/google.png')} />
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 18,
                    color: "#7743DB"
                }}>Sign In with Google</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
    },
    img: {
        width: 250,
        height: 500,
        objectFit: "contain",
        alignItems: "center",
        top: 70,
    },
    viewer: {
        height: 400,
        backgroundColor: Colors.PRIMARY,
        width: 1000,
        marginTop: -40,
        padding: 20,
        position: "relative",
    },
    txt: {
        position: 'absolute',
        fontSize: 35,
        bottom: 330,
        fontFamily: 'outfit-bold',
        color: Colors.WHITE
    },
    login: {
        position: "absolute",
        flexDirection: "row",
        top: 610,
        alignItems: "center",
        gap: 10,
        backgroundColor: Colors.WHITE,
        padding: 20,
        borderRadius: 50,

    },
    google: {
        width: 30,
        height: 30,
    }
});