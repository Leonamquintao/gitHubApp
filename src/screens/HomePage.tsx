import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ListItem from '../components/ListItem';
import FooterComponent from '../components/FooterComponent';
import {fetchApiData} from '../services/HttpService';
import { Item } from '../types';

const HomePage: React.FC = () => {

  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [repositories, setRepositories] = useState<Item[]>([]);

  useEffect(() => {
    loadFromApi();
  },[]);

  const { container, flatStyle, loadingStyle, loadingText } = styles;

  const loadFromApi = async () => {
    if(loading) return;
    setLoading(true);
    const response = await fetchApiData(page);
    setRepositories([...repositories, ...response.data.items]);
    setLoading(false);
    setPage(page + 1);
  }

  return (
    <View style={container}>
      { repositories.length > 0 ?
      <FlatList
        style={flatStyle}
        contentContainerStyle={{ marginHorizontal: 20}}
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={  ({ item }) =>  <ListItem item={item} /> }
        onEndReachedThreshold={0.1}
        onEndReached={loadFromApi}
        ListFooterComponent={ <FooterComponent />}
      /> :
      <View style={loadingStyle}>
        <Text style={loadingText}>Loading...</Text>
      </View>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333238'
  },
  flatStyle: {
    marginTop: 30
  },
  loadingStyle: {
    marginTop: 30,
    alignItems: 'center'
  },
  loadingText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default HomePage;