import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const { mainContainer } = styles;
  return (
    <SafeAreaView style={mainContainer}>
      <StatusBar 
        backgroundColor='transparent' 
        translucent barStyle='light-content'
      />
      <AppNavigator/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#333238'
  }
});

export default App;
