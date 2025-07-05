import { StyleSheet, Text, View, Button as RNButton, Alert } from 'react-native'
import React from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Separator = () => <View style={styles.Separator} />;

const Button = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, neque!</Text>
                    <View style={styles.button}>
                        <RNButton    
                            title="Press Me"
                            onPress={() => Alert.alert('Button Pressed')}
                        />
                    </View>
                </View>
                <Separator />
                <View>
                    <Text style={styles.title}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..</Text>
                    <View style={styles.button}>
                        <RNButton
                            title="Press Me"
                            onPress={() => Alert.alert('Button Pressed')}
                            color="#840125"
                        />
                    </View>
                </View>
                <Separator />
                <View>
                    <Text style={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, neque!</Text>
                    <View style={styles.button}>
                        <RNButton
                            title="Press Me"
                            onPress={() => Alert.alert('Button Pressed')}
                            color="#8409"
                        />
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}




export default Button

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    button: {
        
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },

    Separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})