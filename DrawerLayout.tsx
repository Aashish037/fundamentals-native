// this layout is only in sndroid 

import { StyleSheet, Text, View, DrawerLayoutAndroid, Button } from 'react-native'
import React, { useRef, useState} from 'react'

const DrawerLayout = () => {

    const drawer = useRef<DrawerLayoutAndroid>(null);
    const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>('left');

    const changeDrawerPosition = () => {
        if( drawerPosition === 'left') {
            setDrawerPosition('right');
        } else {
            setDrawerPosition('left');
        }
    }

    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}> I'm a navigation drawer </Text>
            <Button title="Close Drawer" onPress={()=> drawer.current?.closeDrawer()} />
        </View>
    )

    return (
            <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={300}
                drawerPosition={drawerPosition}
                renderNavigationView={navigationView}>
                <View style={styles.container}>
                    <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
                    <Button
                        title="Change Drawer Position"
                        onPress={() => changeDrawerPosition()}
                    />
                    <Text style={styles.paragraph}>
                        Swipe from the side or press button below to see it!
                    </Text>
                    <Button
                        title="Open drawer"
                        onPress={() => drawer.current?.openDrawer()}
                    />
                </View>
            </DrawerLayoutAndroid>
    )
}

export default DrawerLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navigationContainer: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 16,
    },
    paragraph: {
        margin: 16,
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
    },
    button: {
        margin: 16,
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    drawerButton: {
        position: 'absolute',
        top: 50,
        right: 20,
    },
    drawerButtonText: {
        color: '#007BFF',
        fontSize: 16,
    },
    drawerContent: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    drawerItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    drawerItemText: {
        fontSize: 16,
        color: '#333',
    },
    drawerHeader: {
        padding: 20,
        backgroundColor: '#007BFF',
        alignItems: 'center',
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
})