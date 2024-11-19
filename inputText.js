import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

const TextInputExample = () => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');

  const handlePress = () => {
    Alert.alert('Input Text', text);
    Alert.alert('Input NUmber', number);
    setNumber('');
    setText('');
  };

  const handleNUmber = (text) => {
  setNumber(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Text:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Type here..."
        keyboardType="default"
      />
      <TextInput
      style={styles.input}
      value={number}
      keyboardType='numeric'
      placeholder='number....'
      onChangeText={handleNUmber}

      />
      <Button title="Submit" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default TextInputExample;