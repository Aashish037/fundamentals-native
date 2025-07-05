// basic understanding of status bar in react native. It doesn't render in the DOM like a web page, but it does provide a way to control the appearance of the status bar on mobile devices. The status bar is the small strip at the top of your mobile screen that shows important information like time, battery level, network signal, and notifications.
// import { StatusBar, StyleSheet, Text,  } from 'react-native'
// import React from 'react'
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

// const StatusBarExample = () => {
//     return (
//         <SafeAreaProvider>
//             <SafeAreaView style={styles.centeredView}>
//                 <StatusBar
//                     animated={true}
//                     backgroundColor={'#6a51ae'}
//                     barStyle={'light-content'} // 'default' | 'light-content' | 'dark-content'
//                     showHideTransition={'fade'} // 'fade' | 'slide'
//                     hidden={false} // true to hide the status bar, false to show it
//                     translucent={true} // true for a translucent status bar, false for an opaque one
//                 />
//                 <Text style={styles.text}>Welcome to the Status Bar Example!</Text>
//                 <Text style={styles.text}>Check the top of your screen for the status bar.</Text>
//             </SafeAreaView>
//         </SafeAreaProvider>
//     )
// }


// export default StatusBarExample

// const styles = StyleSheet.create({
//     centeredView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 18,
//         color: '#333',
//         marginVertical: 10,
//     },
// })

// Status Bar woh chhoti si patti hoti hai jo aapke mobile screen ke bilkul top par dikhti hai. Ismein time, Wi-Fi signal, battery level, network strength, aur notifications ke icons jaise important information dikhti hai.

// ============================================================
// Better understanding of StatusBar in React Native:

import React, {useState} from 'react';
import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  StatusBarStyle,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

    const App = () => {
    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
        STYLES[0],
    );
    const [statusBarTransition, setStatusBarTransition] = useState<
        'fade' | 'slide' | 'none'
    >(TRANSITIONS[0]);

    const changeStatusBarVisibility = () => setHidden(!hidden);

    const changeStatusBarStyle = () => {
        const styleId = STYLES.indexOf(statusBarStyle) + 1;
        if (styleId === STYLES.length) {
        setStatusBarStyle(STYLES[0]);
        } else {
        setStatusBarStyle(STYLES[styleId]);
        }
    };

    const changeStatusBarTransition = () => {
        const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
        if (transition === TRANSITIONS.length) {
        setStatusBarTransition(TRANSITIONS[0]);
        } else {
        setStatusBarTransition(TRANSITIONS[transition]);
        }
    };

    return (
        <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            barStyle={statusBarStyle}
            showHideTransition={statusBarTransition}
            hidden={hidden}
            />
            <Text style={styles.textStyle}>
            StatusBar Visibility:{'\n'}
            {hidden ? 'Hidden' : 'Visible'}
            </Text>
            <Text style={styles.textStyle}>
            StatusBar Style:{'\n'}
            {statusBarStyle}
            </Text>
            {Platform.OS === 'ios' ? (
            <Text style={styles.textStyle}>
                StatusBar Transition:{'\n'}
                {statusBarTransition}
            </Text>
            ) : null}
            <View style={styles.buttonsContainer}>
            <Button
                title="Toggle StatusBar"
                onPress={changeStatusBarVisibility}
            />
            <Button
                title="Change StatusBar Style"
                onPress={changeStatusBarStyle}
            />
            {Platform.OS === 'ios' ? (
                <Button
                title="Change StatusBar Transition"
                onPress={changeStatusBarTransition}
                />
            ) : null}
            </View>
        </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ECF0F1',
    },
    buttonsContainer: {
        padding: 10,
    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 8,
    },
});

export default App;