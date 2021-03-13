import React from "react";
import { ImageComponent, StyleSheet, Text, View, Image, } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function HomeScreen({navigation}){
  return (

    <View style={styles.container}>
        <View style={{width: "100", flex: 1, marginTop: 60}} >
          <Image
          source={require("./img/raw.png")}
           style={{flex: 1}}
           resizeMethod="contain" />
        </View>
        <View style={{flex: 2, alignItems: "center"}}>
          <Text style={{fontWeight:"100", fontSize: 29}}>HomeScreen</Text>
          <TouchableOpacity 
          style={styles.button}
           onPress={() => {
                navigation.navigate("QRCODE");
          }}
          >

             <Text style={{ color:"#FFF"}}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

function MusicScreen(navigation){

  return(
    <View style={styles.container}>
        <View style={{width: "100", flex: 1, marginTop: 60}} >
          <Image
          source={require("./img/raw.png")}
           style={{ width: 400, height: 390, }}
           resizeMethod="contain" />
           
        </View>
        <View style={{flex: 2, alignItems: "center"}}>
          <Text style={{fontWeight:"250", fontSize: 29}}>TAP</Text>
          <TouchableOpacity 
          style={styles.button}
           onPress={() => {
                navigation.navigate("QR Code");
          }}
>
             <Text style={{ color:"#FFF"}}>PAST</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const Main = createStackNavigator();


export default function App() {

  return (

    <NavigationContainer>
      <Main.Navigator>
           <Main.Screen name="SCAN" component={HomeScreen} />
           <Main.Screen name="QRCODE" component={MusicScreen} />
      </Main.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    alignItems :"center",
    justifyContent: "center",

  },

  button: {
    marginTop: 30,
    backgroundColor: "#23A6D9",
    paddingVertical: 12,
    alignItems: "center",
    width: 180,
    borderRadius: 12,
  },
});
