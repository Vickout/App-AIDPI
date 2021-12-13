import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import FirstAssessment from '../pages/FirstAssessment';
import Disease from '../pages/Diseases';

import Tosse from '../pages/Tosse';
import Sibilancia from '../pages/Sibilancia';
import Diarreia from '../pages/Diarreia';
import Ouvido from '../pages/Ouvido';
import Garganta from '../pages/Garganta';
import Febre from '../pages/Febre';
import Desnutricao from '../pages/Desnutricao';
import Anemia from '../pages/Anemia';

import ClassifyTosse from '../pages/Tosse/ClassifyTosse';
import ClassifyFebre from '../pages/Febre/ClassifyFebre';
import Classification from '../pages/Classification';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: {backgroundColor: '#e27af5'},
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="FirstAssessment" component={FirstAssessment} />
    <Stack.Screen name="Disease" component={Disease} />
    <Stack.Screen name="Tosse" component={Tosse} />
    <Stack.Screen name="ClassifyTosse" component={ClassifyTosse} />
    <Stack.Screen name="Sibilancia" component={Sibilancia} />
    <Stack.Screen name="ClassifyFebre" component={ClassifyFebre} />
    <Stack.Screen name="Diarreia" component={Diarreia} />
    <Stack.Screen name="Febre" component={Febre} />
    <Stack.Screen name="Ouvido" component={Ouvido} />
    <Stack.Screen name="Garganta" component={Garganta} />
    <Stack.Screen name="Desnutricao" component={Desnutricao} />
    <Stack.Screen name="Anemia" component={Anemia} />
    <Stack.Screen name="Classification" component={Classification} />
  </Stack.Navigator>
);

export default Routes;
