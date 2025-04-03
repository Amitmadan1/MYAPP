import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import AppNavigator from './navigation/Application';
import { CartProvider } from './screens/context/cartcontext';

const App = () => (
  <CartProvider>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </CartProvider>
);

export default App;
