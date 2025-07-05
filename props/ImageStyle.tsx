import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

/**
 * ImageStyle component demonstrates different resize modes for images in React Native.
 * It uses the SafeAreaView to ensure the content is displayed within the safe area boundaries.
 * The component renders multiple images with different resize modes: cover, contain, stretch, center, and repeat.
 */
const ImageStyle = () => {
    const imageUrl = 'https://images.pexels.com/photos/750225/pexels-photo-750225.jpeg';
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                <ScrollView style={styles.scrollContainer}>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                            resizeMode="cover" // cover, contain, stretch, center, repeat
                        />
                        <Text style={styles.text}> Resizing in cover</Text>
                    </View>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                            resizeMode="contain" // cover, contain, stretch, center, repeat
                        />
                        <Text style={styles.text}> Resizing in contain</Text>
                    </View>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                            resizeMode="stretch" // cover, contain, stretch, center, repeat
                        />
                        <Text style={styles.text}> Resizing in stretch</Text>
                    </View>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                            resizeMode="center" // cover, contain, stretch, center, repeat
                        />
                        <Text style={styles.text}> Resizing in center</Text>
                    </View>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                            resizeMode="repeat" // cover, contain, stretch, center, repeat
                        />
                        <Text style={styles.text}> Resizing in repeat</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default ImageStyle

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContainer: {
        flex: 1,
        width: '100%',
    },
    image: {
        width: '100%',
        height: 300, // cover, contain, stretch, center, repeat
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        color: '#333',
    }
})