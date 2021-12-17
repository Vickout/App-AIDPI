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
import ClassifyDiarreia from '../pages/Diarreia/ClassifyDiarreia';
import ClassifyDiarreiaTime from '../pages/Diarreia/ClassifyDiarreiaTime';
import Classification from '../pages/Classification';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      contentStyle: {backgroundColor: '#CEF5F5'},
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#e27af5',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name="Home" component={Home} options={{title: 'INÍCIO'}} />
    <Stack.Screen
      name="FirstAssessment"
      component={FirstAssessment}
      options={{title: 'AVALIAÇÃO DE PERIGO'}}
    />
    <Stack.Screen
      name="Disease"
      component={Disease}
      options={{title: 'AIDPI', headerBackVisible: false}}
    />
    <Stack.Screen name="Tosse" component={Tosse} options={{title: 'TOSSE'}} />
    <Stack.Screen
      name="ClassifyTosse"
      component={ClassifyTosse}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Sibilancia"
      component={Sibilancia}
      options={{title: 'SIBILÂNCIA'}}
    />
    <Stack.Screen
      name="ClassifyFebre"
      component={ClassifyFebre}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Diarreia"
      component={Diarreia}
      options={{title: 'DIARREIA'}}
    />
    <Stack.Screen
      name="ClassifyDiarreia"
      component={ClassifyDiarreia}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ClassifyDiarreiaTime"
      component={ClassifyDiarreiaTime}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Febre" component={Febre} options={{title: 'FEBRE'}} />
    <Stack.Screen
      name="Ouvido"
      component={Ouvido}
      options={{title: 'PROBLEMA DE OUVIDO'}}
    />
    <Stack.Screen
      name="Garganta"
      component={Garganta}
      options={{title: 'DOR DE GARGANTA'}}
    />
    <Stack.Screen
      name="Desnutricao"
      component={Desnutricao}
      options={{title: 'DESNUTRIÇÃO'}}
    />
    <Stack.Screen
      name="Anemia"
      component={Anemia}
      options={{title: 'ANEMIA'}}
    />
    <Stack.Screen
      name="Classification"
      component={Classification}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default Routes;
