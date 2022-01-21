import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const FooterComponent: React.FC = () => {
  const {loadingContainer} = styles;

  return (
    <View style={loadingContainer}>
      <ActivityIndicator size={25} color={'#FFF'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    padding: 10
  }
});

export default FooterComponent;