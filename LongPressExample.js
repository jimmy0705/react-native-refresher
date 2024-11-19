import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Alert } from "react-native";

const LongPressExample = () => {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    Alert.alert("short press");
  };

  const handleLongPress = () => {
    Alert.alert("long press");
  };

  return(
    <View>
        <Pressable 
        style={styles.pressableBtn}
        onPress={handlePress}
        onLongPress={handleLongPress}
        >
            <Text>Press or Hold me</Text>
        </Pressable>
    </View>
  )
};


const styles = StyleSheet.create({
    pressableBtn :{
        padding: 10,
        backgroundColor: 'plum',
        textAlign: 'center',
        alignItems: 'center',
        // borderRadius: 6,
        marginBottom: 20,
    }
})


export default LongPressExample;