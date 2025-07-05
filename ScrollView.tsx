import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const ScrollView = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView} edges={['top', 'left', 'right']}>
                <View>
                    <Text>ScrollView</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}



export default ScrollView

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})