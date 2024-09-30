import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookDetails from './src/components/Book/Book';
import BookSearch from './src/components/Books/Books';
import Manual from './src/components/Manual/Manual';
import Feedback from './src/components/FeedBack/Feedback';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BookSearch">
        <Stack.Screen name="BookSearch" component={BookSearch} options={{ title: 'Biblioteca Online' }} />
        <Stack.Screen name="BookDetails" component={BookDetails} options={{ title: 'Detalhes do Livro' }} />
        <Stack.Screen name="Feedback" component={Feedback} options={{ title: 'Feedback' }} />
        <Stack.Screen name="Manual" component={Manual} options={{ title: 'Manual de Uso' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
