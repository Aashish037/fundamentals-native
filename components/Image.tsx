import { StyleSheet, Image as RNImage, ImageBackground } from 'react-native'
import React from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

// can put the image uri here
// // const imageuri1= "https://images.pexels.com/photos/1595244/pexels-photo-1595244.jpeg"
// and use imageUri1 in source of RNImage


const ImageGallery = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView} edges={['top', 'left', 'right']}>
                <ImageBackground
                    style={styles.imageBackground}
                    source={{uri:'https://images.pexels.com/photos/1595244/pexels-photo-1595244.jpeg'}}
                    resizeMode="cover"
                >
                    <RNImage
                        style={styles.image}
                        source={{uri:'https://images.pexels.com/photos/1054222/pexels-photo-1054222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
                    />
                    <RNImage
                        style={styles.image}
                        source={{uri:'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
                    />
                    <RNImage
                        style={styles.image}
                        source={{uri:'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
                    />
                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default ImageGallery

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
})