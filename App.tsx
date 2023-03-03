/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SignIn } from './src/screens/SignIn';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/hooks/auth';
import { Product } from './src/screens/Product';

function App(): JSX.Element {

  return (
    <>
    <StatusBar
    barStyle={'light-content'}
    translucent
    backgroundColor='transparent'
    />
    <AuthProvider>
    <Product/>
    </AuthProvider>
    </>
  );
}

export default App;
