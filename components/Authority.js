import React from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
  Animated,
  StyleSheet,
  TextInput
} from "react-native";

class Authority extends React.Component {
  colorOptions = () => {
    if (this.props.authority > 39) {
      return {
        color: "black",
        background: require("../assets/authority-indicator-green.png")
      };
    }
    if (this.props.authority > 19) {
      return {
        color: "black",
        background: require("../assets/authority-indicator-yellow.png")
      };
    }
    return {
      color: "white",
      background: require("../assets/authority-indicator-red.png")
    };
  };
  render() {
    const textStyle = this.props.authorityAnimation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.5, 1]
    });
    const textStyleTransform = {
      transform: [{ scale: textStyle }]
    };
    console.log(this.colorOptions);
    return (
      <View>
        <ImageBackground
          style={{
            width: 250,
            height: 160,
            justifyContent: "center",
            alignItems: "center"
          }}
          source={this.colorOptions().background}
        >
          <View>
            <Animated.Text
              style={[
                {
                  fontSize: 70,
                  fontWeight: "bold",
                  paddingBottom: 10,
                  color: this.colorOptions().color
                },
                textStyleTransform
              ]}
            >
              {this.props.authority}
            </Animated.Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Authority;
