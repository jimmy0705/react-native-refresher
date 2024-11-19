import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';

const DATA = [
  { id: '1', title: 'Item 1', description: 'This is item 1' },
  { id: '2', title: 'Item 2', description: 'This is item 2' },
  { id: '3', title: 'Item 3', description: 'This is item 3' },
];

const DynamicList = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => setSelectedId(item.id === selectedId ? null : item.id)}
          style={({ pressed }) => [
            styles.item,
            { backgroundColor: pressed ? '#d1e7dd' : '#f8f9fa' },
          ]}
        >
          <Text style={styles.title}>{item.title}</Text>
          {selectedId === item.id && <Text>{item.description}</Text>}
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ced4da',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DynamicList;
