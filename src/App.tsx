import React from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#e27af5" />
    <View style={{flex: 1, backgroundColor: '#e27af5'}}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
