import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type Story = {
    id: string;
    title: string;
};

const StoryList = () => {
    const storyData: Story[] = [
        { id: '1', title: 'Story 1' },
        { id: '2', title: 'Story 2' },
        { id: '3', title: 'Story 3' },
    ];

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                <FlatList
                    data={storyData}
                    keyExtractor={(item: Story) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContent}
                    renderItem={({ item }: { item: Story }) => (
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    )}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default StoryList;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    flatListContent: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
})