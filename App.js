import { View, Text, Image, ImageBackground, ScrollView, Button } from "react-native";
import PressableButton from "./PressableButton";
import LongPressExample from "./LongPressExample";
import DynamicList from "./dynamicList";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        padding: 60,
        backgroundColor: "yellow",
      }}
    >
      <ScrollView>
        {/* <PressableButton/> */}
        <LongPressExample/>
        <DynamicList/>
      {/* <Button title="Normal Button :)" onPress={() =>console.log('hello :)')} color="midnightblue"  disabled={false}/> */}

        {/* <Image source={logoImg} style={{ width: 200, height: 200 }} />
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{ width: 200, height: 200 }}
        />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Image source={logoImg} style={{ width: 200, height: 200 }} /> */}
      </ScrollView>
    </View>
  );
}
