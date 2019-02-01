import React from "react";
import { Text, View } from "react-native";
import PlayerControls from "./PlayerControls";

class TwoPlayers extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black"
        }}
      >
        <PlayerControls playerId={1} />
        <PlayerControls playerId={2} />
      </View>
    );
  }
}

export default TwoPlayers;
