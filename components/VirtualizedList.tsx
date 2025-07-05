import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
    id: string;
    title: string;
}

const getItem = (_data: unknown, index: number): ItemData => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
});

const getItemCount = (_data: unknown): number => {
    return 100; // yahan aap apne data ka length return kar sakte hain
};

type ItemProps = {
    title: string;
}

const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);



const VirtualizedListExample = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                <VirtualizedList
                    initialNumToRender={4}
                    renderItem={({item}) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                    getItemCount={getItemCount}
                    getItem={getItem}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default VirtualizedListExample

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
    },
    title: {
        fontSize: 32,
    },
})




// VirtualizedList React Native mein bahut lambi lists ko handle karne ka engine hai. Yeh sirf screen par dikhne wale items ko render karta hai, memory bachata hai, aur scrolling ko smooth banata hai. FlatList aur SectionList isi power ko simple tarike se provide karte hain, isliye VirtualizedList ko tabhi use karein jab aapko uske low-level controls ki zaroorat ho.