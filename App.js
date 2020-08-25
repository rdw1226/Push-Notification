import React from 'react';
import {Text} from 'react-native';
import OneSignal from 'react-native-onesignal';

class App extends React.Component {
    componentDidMount() {
        OneSignal.init('');
        OneSignal.addEventListener('received', (data) => {
            console.log(data);
            console.log('sent')
        });
        OneSignal.inFocusDisplaying(2);
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('received');
    }

    render() {
        return (
            <Text>testing</Text>
        );
    }
}

export default (App);