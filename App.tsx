/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/hooks/auth';
import {Routes} from './src/routes/index'

function App(): JSX.Element {

  return (
    <>
    <StatusBar
    barStyle={'light-content'}
    translucent
    backgroundColor='transparent'
    />
    <AuthProvider>
      <Routes/>
    </AuthProvider>
    </>
  );
}

export default App;
