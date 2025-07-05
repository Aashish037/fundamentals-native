import { StyleSheet, ActivityIndicator as RNActivityIndicator } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const ActivityIndicatorScreen = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles.centeredView, styles.horizontal]}>
                <RNActivityIndicator />
                <RNActivityIndicator size="large" color="#0000ff" />
                <RNActivityIndicator size="small" color="#00ff00" />
                <RNActivityIndicator size="large" color="#ff0000" />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default ActivityIndicatorScreen

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontal : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    }
})