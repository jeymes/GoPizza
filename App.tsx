/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SignIn } from './src/screens/SignIn';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/hooks/auth';
import { Product } from './src/screens/Product';
import { Home } from './src/screens/Home';

function App(): JSX.Element {

  return (
    <>
    <StatusBar
    barStyle={'light-content'}
    translucent
    backgroundColor='transparent'
    />
    <AuthProvider>
    <Home/>
    </AuthProvider>
    </>
  );
}

export default App;
