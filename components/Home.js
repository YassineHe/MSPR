import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Button
} from "react-native"

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").Width

export default class Home extends React.Component{
  render(){
    return(
      <View style={{height:Dev_Height,width:Dev_Width,justifyContent:"center",alignItems:"center"}}>
        <Button title="Barcode Scanner" onPress={()=> this.props.navigation.navigate("Barcode")} />
      </View>
    )
  }
}
