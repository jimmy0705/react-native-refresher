import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
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
        {/* <Text style={{fontSize: 20, fontWeight: 'bold'}}><Text style={{color:'yellow'}}>Hello</Text> World</Text> */}
        {/* <View style={{width: 200, height: 200, backgroundColor: 'lightblue'}}></View> */}
        <Image source={logoImg} style={{ width: 200, height: 200 }} />
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{ width: 200, height: 200 }}
        />
        {/* <ImageBackground source={logoImg} style={{flex:1}}>
        {" "}
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>World</Text>
      </ImageBackground> */}
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
        <Image source={logoImg} style={{ width: 200, height: 200 }} />
      </ScrollView>
    </View>
  );
}
