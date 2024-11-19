import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const FlatListExample = () => {
  const fruits = [
    { id: "1", name: "Apple" },
    { id: "2", name: "Banana" },
    { id: "3", name: "Cherry" },
    { id: "4", name: "Date" },
    { id: "5", name: "Fig" },
    { id: "6", name: "Grape" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={fruits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default FlatListExample;
