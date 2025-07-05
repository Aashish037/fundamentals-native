// React Native mein, Touchable components woh elements hote hain jo user ke touch interactions (chhoone aur dabaane) par respond karte hain. Ye components user ko interactive experience dete hain, jaise ki buttons, links, ya kisi bhi cheez par click karne ke liye.

import React, {useState} from 'react';
import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';

const TouchableExample = () => {

    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => setCount(count + 1)}
            >
                <Text style={styles.buttonText}>TouchableOpacity Count: {count}</Text>
            </TouchableOpacity>

            <TouchableHighlight 
                style={styles.button} 
                onPress={() => setCount(count + 1)}
                underlayColor="#DDDDDD"
            >
                <Text style={styles.buttonText}>TouchableHighlight Count: {count}</Text>
            </TouchableHighlight>

            <TouchableWithoutFeedback 
                onPress={() => setCount(count + 1)}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableWithoutFeedback Count: {count}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
};


export default TouchableExample;    


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 12,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});
