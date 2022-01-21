import React, { useEffect, useState } from 'react';
import { View, Button, Image, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {fetchTopContributors} from '../services/HttpService';
import { ContribItem } from '../types';
import ContributorsItem from '../components/ContribItem';

const TopContributorsPage: React.FC = ({route}) => {
  
  const [contributors, setContributors] = useState<ContribItem[]>([]);

  useEffect(() => {
    loadFromApi();
  },[]);

  const navigation = useNavigation();
  const { container, flatStyle, flex1 } = styles;

  const loadFromApi = async () => {
    const response = await fetchTopContributors(route.params.owner, route.params.repo);
    setContributors(response.data);
  }

  return (
    <View style={container}>
      <View style={flex1}>
        { contributors.length > 0 &&
          <FlatList
            numColumns={3}
            style={flatStyle}
            contentContainerStyle={{ marginHorizontal: 20}}
            data={contributors}
            keyExtractor={item => String(item.id)}
            renderItem={  ({ item }) =>  <ContributorsItem item={item} /> }
          />
        }
      </View>
      <View>
        <Button title='Back' onPress={() => navigation.goBack()} />
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333238'
  },
  flex1: { flex: 1 },
  flatStyle: {
    marginTop: 30
  },
});

export default TopContributorsPage;