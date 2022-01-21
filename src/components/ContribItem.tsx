import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ContribItem } from '../types';

const ContributorsItem = ({ item }: { item: ContribItem }) => {

  const { login, avatar_url, contributions} = item;

  const { itemContainer, imageStyle, title, smallText } = styles;

  return (
    <View style={itemContainer}>
      <Image source={{ uri: avatar_url}} style={imageStyle} />
      <Text style={title}>{login}</Text>
      <Text style={smallText}>contributions: {contributions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer:{
    flex: 1,
    margin: 4
  },
  imageStyle: {
    width: 100,
    height: 100
  },
  title: {
    color: '#FFF',
    fontSize: 12
  },
  smallText: {
    color: '#d0e1f2',
    fontSize: 10
  }
});

export default ContributorsItem;