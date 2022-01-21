import React from 'react';
import { Linking, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import { Item } from '../types';

const ListItem = ({ item }: { item: Item }) => {

  const {
    name, full_name, description,
    html_url, stargazers_count,
    watchers_count, size, updated_at
  } = item;

  const { 
    itemContainer, headerTextStyle, basicTextStyle,
    updatedTextStyle, descriptionContainer,
    bottomContainer, row
  } = styles;

  const navigation = useNavigation<any>();

  return (
    <View style={itemContainer}>

      <View style={{ flex: 1, flexDirection: 'row'}}>
        <View style={{ flex: .1}}>
          <Icon name='github' size={22} color={'#FFF'} />
        </View>
  
        <TouchableOpacity style={{ flex: .9}} onPress={() => Linking.openURL(html_url)}>
          <Text numberOfLines={1} style={headerTextStyle}>{full_name}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('TopContributorsPage', { owner: item.owner.login, repo: name })}>
        <View style={descriptionContainer}>
          <Text style={basicTextStyle}>{description}</Text>
        </View>

        <View style={bottomContainer}>
          <View style={row}>
            <Icon name='star' size={14} color={'#d0e1f2'} />
            <Text style={basicTextStyle}>{stargazers_count}</Text>
          </View>

          <View style={row}>
            <Icon name='eye' size={14} color={'#d0e1f2'} />
            <Text style={basicTextStyle}>{watchers_count}</Text>
          </View>
    
          <View style={row}>
            <Icon name='database' size={14} color={'#d0e1f2'} />
            <Text style={basicTextStyle}>{(size / 1024).toFixed()} MB</Text>
          </View>
    
          <View>
            <Text style={updatedTextStyle}>updated</Text>
            <Text style={updatedTextStyle}>{moment(updated_at).fromNow()}</Text>
          </View>

        </View>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    borderBottomWidth: .5,
    borderBottomColor: '#FFF',
    paddingVertical: 10
  },
  headerTextStyle: {
    color: '#4390de',
    fontSize: 16,
    fontWeight: 'bold'
  },
  basicTextStyle: {
    color: '#FFF',
    fontSize: 12,
    marginHorizontal: 2
  },
  updatedTextStyle: {
    color: '#d0e1f2',
    fontSize: 10,
    marginHorizontal: 2
  },
  descriptionContainer: {
    flex: 1,
    marginVertical: 10
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 4
  }
});

export default ListItem;