/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SignIn } from './src/screens/SignIn';
import { ActivityIndicator, StatusBar } from 'react-native';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { AuthProvider } from './src/hooks/auth';


function App(): JSX.Element {

  const [ fontsLoaded ] = useFonts({
    DMSerifDisplay_400Regular,
    DMSans_400Regular
  });

  if(fontsLoaded){
    return <ActivityIndicator/>
  }

  return (
    <>
    <StatusBar
    barStyle={'light-content'}
    translucent
    backgroundColor='transparent'
    />
    <AuthProvider>
    <SignIn/>
    </AuthProvider>
    </>
  );
}

export default App;
