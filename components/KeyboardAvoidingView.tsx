import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, Keyboard, TouchableWithoutFeedback, Button } from 'react-native'
import React from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const KeyboardAvoidingViewExample = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView 
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.keyboardAvoidingView}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inner}>
                            <Text style={styles.title}>Keyboard Avoiding View Example</Text>
                            <TextInput 
                                placeholder="Type here..." 
                                style={styles.textInput} 
                                multiline={false}
                            />
                            <View style={styles.buttonContainer}>
                                <Button title="Submit" onPress={() => {}} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default KeyboardAvoidingViewExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    keyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        width: '100%',
    },
    buttonContainer: {
        marginTop: 12,
    },
})


/*

*/ 