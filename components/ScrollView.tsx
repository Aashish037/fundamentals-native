import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const ScrollText = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView} edges={['top']}>
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                    <Text style={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, modi odit. Deserunt reprehenderit, hic quia non quod dicta officia dolorem quaerat aperiam at velit. Amet, sed quasi voluptate esse ipsa consequatur temporibus voluptas debitis et. Nesciunt ratione expedita vel ad quia culpa tempora quidem aperiam ipsam animi. Dicta eligendi numquam amet dolorem eos, officiis, reprehenderit vitae rem quasi ab adipisci ratione sequi inventore. Laboriosam culpa debitis amet distinctio deleniti ut quos illo saepe ipsum magnam et inventore nam possimus, quas necessitatibus autem officia ab labore quisquam totam molestiae? Exercitationem excepturi inventore ipsa illum, temporibus vel delectus soluta harum asperiores! Molestias?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident expedita dignissimos maxime facilis eligendi dolorem cumque! Laboriosam, eius. Autem omnis, laudantium ut nobis doloremque placeat modi totam suscipit voluptates hic. Doloremque, non sequi. Labore quisquam culpa libero beatae dolorum aspernatur voluptatibus quae aperiam cum assumenda dolores repellendus doloribus sunt esse, a illo dolor ipsa quo autem eveniet debitis. Similique odit numquam quas sequi, voluptates natus harum ad quisquam ea sint aut, sunt architecto cumque, veniam nobis dolore. At sit libero est. Quam aliquam facilis accusamus magnam, explicabo neque beatae laborum suscipit dolore sint excepturi expedita sed cumque dolorum, similique nesciunt.lorem 100
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita dignissimos maxime facilis eligendi dolorem cumque! Laboriosam, eius. Autem omnis, laudantium ut nobis doloremque placeat modi totam suscipit voluptates hic. Doloremque, non sequi. Labore quisquam culpa libero beatae dolorum aspernatur voluptatibus quae aperiam cum assumenda dolores repellendus doloribus sunt esse, a illo dolor ipsa quo autem eveniet debitis. Similique odit numquam quas sequi, voluptates natus harum ad quisquam ea sint aut, sunt architecto cumque, veniam nobis dolore. At sit libero est. Quam aliquam facilis accusamus magnam, explicabo neque beatae laborum suscipit dolore sint excepturi expedita sed cumque dolorum, similique nesciunt.lorem 100
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita dignissimos maxime facilis elig endi dolorem cumque! Laboriosam, eius. Autem omnis, laudantium ut nobis doloremque placeat modi totam suscipit voluptates hic. Doloremque, non sequi. Labore quisquam culpa libero beatae dolorum aspernatur voluptatibus quae aperiam cum assumenda dolores repellendus doloribus sunt esse, a illo dolor ipsa quo autem eveniet debitis. Similique odit numquam quas sequi, voluptates natus harum ad quisquam ea sint aut, sunt architecto cumque, veniam nobis dolore. At sit libero est. Quam aliquam facilis accusamus magnam, explicabo neque beatae laborum suscipit dolore sint excepturi expedita sed cumque dolorum, similique nesciunt.lorem 100
                    </Text>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}



export default ScrollText

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scroll: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: 'green',
    },
    text: {
        fontSize: 30,
        lineHeight: 40,
        color: 'white',
        marginBottom: 16,
    },
})


/*
ScrollView: Chhoti aur fixed lists ke liye best hai. Sab kuch ek baar mein load kar deta hai. Simple hai.

FlatList: Badi aur dynamic lists ke liye mandatory hai. Smartly sirf dikhne wale items load karta hai (virtualization), isliye performantance aur memory-efficient hai. Features zyada hain.
*/