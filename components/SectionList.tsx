import { StyleSheet, Text, View, SectionList } from 'react-native'
import React from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type SectionData = {
    title: string;
    data: string[];
}

const sections : SectionData[] = [
    {
        title: 'Sci-FI Movies',
        data: ['Interstellar', 'Inception', 'The Matrix'],
    },
    {
        title: 'Comedy Movies',
        data: ['Hera Pheri', 'Golmaal', '3 Idiots'],
    },
    {
        title: 'Action Movies',
        data: ['Brothers', 'War', 'Dhoom'],
    }
]

// Move component definition outside of render
const ListHeaderComponent = () => (
    <View style={styles.mainHeader}>
        <Text style={styles.mainHeaderText}>Movie Categories</Text>
    </View>
);

const SectionListing = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView} edges={['top']}>
                <SectionList
                    sections={sections}
                    keyExtractor={(item, index) => item + index}
                    ListHeaderComponent={ListHeaderComponent}
                    renderItem={({ item }) => (
                        <View style={styles.sectionView}>
                            <Text style={styles.headerText}>{item}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={styles.headerView}>
                            <Text style={styles.headerText}>{title}</Text>
                        </View>
                    )}
                    
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default SectionListing

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionView: {
        padding: 10,
        backgroundColor: '#f9c2ff',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    mainHeader: {
        padding: 15,
        backgroundColor: '#e0e0e0',
        borderBottomWidth: 2,
        borderBottomColor: '#999',
        alignItems: 'center',
    },
    mainHeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    headerView: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },  
})


/*

SectionList basically FlatList hi hai, 
par FlatList flat (seedhi) list ke liye hai, aur SectionList grouped (sections mein divided) lists ke liye perfect hai. Iska main power sections, renderSectionHeader, aur stickySectionHeadersEnabled mein hai.
*/ 