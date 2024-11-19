import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, RefreshControl, StyleSheet } from 'react-native';

const RefreshControlExample = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // Function to fetch data
  const fetchData = async () => {
    setRefreshing(true);
    try {
      // Simulate a network request
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  };

  // Effect to fetch data on initial render
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={fetchData} // Call the fetchData function when refreshing
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
  },
});

export default RefreshControlExample;
