// This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.

import { ScrollView, StyleSheet, Text,  RefreshControl } from 'react-native'
import React, { useCallback, useState } from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const RefreshControlExample = () => {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // Simulate a network request
        setTimeout(() => {
            setRefreshing(false);
        }, 2000); 
    }, []) 

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    refreshControl={
                        <RefreshControl 
                        refreshing={refreshing} 
                        onRefresh={onRefresh} 
                        colors={['#9Bd35A', '#689F38']} // Android spinner colors
                        progressBackgroundColor="#ffffff" // Android spinner background color
                        />
                    }
                >
                    <Text>This is a simple example of using Refresh Control in a ScrollView.</Text>
                    
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}


export default RefreshControlExample

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollViewContent: {
        padding: 16,
    },
})


// RefreshControl khud se visible nahi hota. Ise ScrollView ya FlatList (aur SectionList) ke refreshControl prop mein daala jaata hai. Jab user screen ko niche pull karta hai, toh RefreshControl dikhta hai, ek loading indicator show karta hai, aur phir aapka data refresh ho jaane ke baad woh gayab ho jaata hai.