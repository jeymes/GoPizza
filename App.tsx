/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SignIn } from './src/screens/SignIn';
import { StatusBar } from 'react-native';

function App(): JSX.Element {
  return (
    <>
    <StatusBar
    barStyle={'light-content'}
    translucent
    backgroundColor='transparent'
    />
      <SignIn/>
    </>
  );
}

export default App;
