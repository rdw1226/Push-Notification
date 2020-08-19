import React from 'react';
import {Text} from 'react-native';
import OneSignal from 'react-native-onesignal';

class App extends React.Component {
    componentDidMount() {
        OneSignal.init('0d0139b0-4429-46f0-b6c2-e2777a1fd19e');
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