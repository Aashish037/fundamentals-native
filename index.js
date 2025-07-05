/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import AppPro from './components/ModalApp';
// import AppPro from './components/ActivityIndicator';
// import AppPro from './components/Button';
// import AppPro from './components/FlatList';
// import AppPro from './components/Image';
// import AppPro from './ImageBackground'; //imagebackground done in image file
// import AppPro from './components/ScrollView';
// import AppPro from './components/SectionList';
// import AppPro from './components/KeyboardAvoidingView';
// import AppPro from './components/Pressable';
// import AppPro from './components/RefreshControl';
// import AppPro from './components/StatusBar';
// import AppPro from './components/Touchable';
// import AppPro from './components/VirtualizedList';

// import AppPro from './DrawerLayout';

// import AppPro from './props/ImageStyle';

import AppPro from './dashboard/InstagramStroyUI';

// import AppPro from './components/Dimensions';
// import AppPro from './components/LayoutAnimation';
// import AppPro from './components/Platform';
// import AppPro from './components/PixelRatio';
// import AppPro from './components/Share';


// import AppPro from './Linking';
// import AppPro from './PermissionsAndroid';
// import AppPro from './Geolocation';
// import AppPro from './CameraRoll';
// import AppPro from './Clipboard';

// import AppPro from './UIManager';
// import AppPro from './Animated';
// import AppPro from './Appearance';


import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppPro);

// AppRegistry.runApplication(appName, {
//   initialProps: {},
//   rootTag: document.getElementById('react-root'),
// });
// right now i m using AppPro that wat i have to import AppPro from the file that i want to run
// if you want to run any other file then just import that file and use it in AppPro
// for example if you want to run ModalApp then just import ModalApp from './components/ModalApp';
// and use it in AppPro like this
// import ModalApp from './components/ModalApp';
// const AppPro = ModalApp; 