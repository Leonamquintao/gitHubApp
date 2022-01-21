import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

const LandingPage: React.FC = ({navigation}) => {

  const octocat = require('../assets/octocat.png');
  const { container, imageStyle, textStyle } = styles;

  return (
    <View style={container}>
      <Image source={octocat} style={imageStyle} />

      <View>
        <Text style={textStyle}>Welcome to this awesome App</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Text style={textStyle}>Please click HERE to start</Text>
        </TouchableOpacity>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333238'
  },
  imageStyle: {
    width: 400,
    height: 300
  },
  textStyle: {
    color: '#FFF',
    textAlign: 'center',
    margin: 4
  },
});

export default LandingPage;