import { StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient';

// Get the working dimensions of the device
const { width } = Dimensions.get('window');
const STORY_ITEM_SIZE = width * 0.2; // Adjust the size of each story item
const IMAGE_SIZE = STORY_ITEM_SIZE * 0.8; // Size of the avatar within the story item
const BORDER_RADIUS = 3 // Border radius for circular avatar

type UserData = {
    id: string;
    username: string;
    uri: string;
}

const userData: UserData[] = [
    {
        id: '1',
        username: 'Mewsh',
        uri: 'https://i.pinimg.com/736x/fd/8b/75/fd8b7571f2f35705a2f0d93365db32fe.jpg'
    },
    {
        id: '2',
        username: 'Mewshi',
        uri: 'https://i.pinimg.com/736x/25/06/c9/2506c909c706c6fcbaaf686aafc5032e.jpg'
    },
    {
        id: '3',
        username: 'Sheepy',
        uri: 'https://i.pinimg.com/736x/00/9f/c0/009fc09a302e18d5cb0c1ecc75d728e5.jpg'
    },
    {
        id: '4',
        username: 'Froggy',
        uri: 'https://i.pinimg.com/736x/25/7d/1d/257d1d2e68d3ba8fe97668124d31ccbb.jpg'
    },
    {
        id: '5',
        username: 'spidermann',
        uri: 'https://i.pinimg.com/736x/a4/fd/65/a4fd65229119b31ead46474765c9b56e.jpg'
    },
    {
        id: '6',
        username: 'Akbar',
        uri: 'https://i.pinimg.com/736x/ef/83/12/ef83122faee8a0c3cc1ccd1513f8fb7f.jpg'
    },
    {
        id: '7',
        username: 'Mee',
        uri: 'https://i.pinimg.com/736x/62/53/de/6253deb30cccb62e2ec3d374e6d3a92d.jpg'
    },
    {
        id: '8',
        username: 'Chad',
        uri: 'https://i.pinimg.com/736x/5f/9c/1d/5f9c1d9d15167e0a59e6dad41e8556f9.jpg'
    },
    {
        id: '9',
        username: 'Wooooo',
        uri: 'https://i.pinimg.com/736x/7e/2b/4f/7e2b4fd4738f5614a6c40f18ec2b033c.jpg'
    },
    {
        id: '10',
        username: 'God',
        uri: 'https://i.pinimg.com/736x/47/a4/77/47a47725283cd0e3a2b6c243f35403d0.jpg'
    },
]

// Individual Story Item Component
const StoryItem = ({ story }: { story: UserData }) => {
    return (
        <View style={styles.storyItem}>
            {/* Gradient border for the story */}
            <LinearGradient
                colors={['#fdf497', '#fd5949', '#d6249f', '#285AEB']} // Instagram-like gradient colors
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={styles.storyAvatarWrapper}
            >
                {/* Actual Avatar Image */}
                <Image source={{ uri: story.uri }} style={styles.storyAvatar} />
            </LinearGradient>
            
            {/* Username text */}
            <Text style={styles.storyUsername}>{story.username}</Text>
        </View>
    ) 
}         

const InstagramStroyUI = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={userData}
                    keyExtractor={(item: UserData) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContent}
                    renderItem={({item}: {item: UserData}) => (
                        <StoryItem story={item} />
                    )}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default InstagramStroyUI

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Dark background to match Instagram
        paddingVertical: 10,
    },
    flatListContent: {
        paddingHorizontal: 10, // Padding at the start and end of the list
    },
    storyItem: {
        alignItems: 'center',
        marginHorizontal: 8, // Spacing between story items
        width: STORY_ITEM_SIZE, // Fixed width for each item to ensure consistent spacing
    },
    storyAvatarWrapper: {
        width: IMAGE_SIZE + BORDER_RADIUS * 2, // Avatar size plus border on both sides
        height: IMAGE_SIZE + BORDER_RADIUS * 2,
        borderRadius: (IMAGE_SIZE + BORDER_RADIUS * 2) / 2, // Make it a perfect circle
        justifyContent: 'center',
        alignItems: 'center',
        // No specific background here as LinearGradient handles it
    },
    storyAvatar: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: IMAGE_SIZE / 2, // Make the inner avatar a perfect circle
        borderWidth: BORDER_RADIUS, // Inner border to separate from gradient
        borderColor: '#000', // Matches the background
        resizeMode: 'cover',
    },
    storyUsername: {
        color: '#fff', // White text for username
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center',
        maxWidth: '100%', // Ensure text doesn't overflow its container
    },
});