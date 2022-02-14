import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import { useAuth } from './hooks/auth';
import AppProvider from './hooks';

const App = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={`${user ? 'light-content' : 'dark-content'}`}
        backgroundColor={`${user ? '#e27af5' : '#f5f5f5'}`}
      />
      <View style={{ flex: 1, backgroundColor: '#e27af5' }}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </View>
    </NavigationContainer>
  );
};

export default App;
