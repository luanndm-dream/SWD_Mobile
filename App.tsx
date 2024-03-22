/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import './src/constants/ignoreWarning';
import './src/constants/ignoreWarning';
import RootNavigation from './src/navigation/rootNavigation';

import { Provider } from 'react-redux';
import {store} from './src/redux/store'
import { useAppSelector } from '@/redux'
import { LoadingOverlay } from "./src/components";
import { GestureHandlerRootView} from 'react-native-gesture-handler';
const RootApp = () => {

const isLoading = useAppSelector((state)=>state.app.loading)
console.log(isLoading)
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      <SafeAreaProvider>
        <RootNavigation />
        {isLoading&&<LoadingOverlay/>}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
