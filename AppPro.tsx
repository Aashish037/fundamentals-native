import { 
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    useColorScheme,
    } from 'react-native'
import React, { JSX } from 'react'

const AppPro = (): JSX.Element  => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView style={styles.container}>
            <View>
                {/* <Text style={styles.title}> Hello </Text> */}
                <Text style={isDarkMode ? styles.darkText : styles.lightText}>App</Text>
            </View>
        </SafeAreaView>
    )
}

export default AppPro

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    darkText: {
        color: '#fff',
    },
    lightText: {        
        color: '#000',
    },
    // title:{ color: 'blue', fontSize: 20, textAlign: 'center', marginTop: 50 }
})