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
import Authority from "./Authority";

class PlayerControls extends React.Component {
  state = {
    playerName: `Jugador ${this.props.playerId}`,
    authority: 50,
    authorityAnimation: new Animated.Value(0),
    change: 0
  };

  componentDidUpdate() {
    if (this.state.change !== 0) {
      clearTimeout(this.changeTimeout);
      this.changeTimeout = setTimeout(() => {
        this.setState({ change: 0, changeTimeout: null });
      }, 3000);
    }
  }

  increaseAuthority = (amount: 1) => {
    this.setState({
      authority: this.state.authority + amount,
      change: this.state.change + amount
    });
    this.animateAuthority();
  };

  animateAuthority = () => {
    Animated.timing(this.state.authorityAnimation, {
      toValue: 1,
      duration: 200
    }).start(() => this.state.authorityAnimation.setValue(0));
  };

  showChange = () =>
    this.state.change === 0
      ? ""
      : this.state.change > 0
      ? `+${this.state.change}`
      : this.state.change;

  render() {
    console.log(styles);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 10
          }}
        >
          <TouchableOpacity
            style={styles.buttonDown}
            onPress={() => this.increaseAuthority(-1)}
          >
            <Text style={styles.buttonText}>-1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDown}
            onPress={() => this.increaseAuthority(-5)}
          >
            <Text style={styles.buttonText}>-5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDown}
            onPress={() => this.increaseAuthority(-10)}
          >
            <Text style={styles.buttonText}>-10</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TextInput
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              marginBottom: 10,
              borderWidth: 0
            }}
            onChangeText={playerName => this.setState({ playerName })}
            value={this.state.playerName}
          />
          <Authority
            authority={this.state.authority}
            authorityAnimation={this.state.authorityAnimation}
          />
          <Text style={{ height: 20, fontSize: 20, color: "white" }}>
            {this.showChange()}
          </Text>
        </View>

        <View
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 10
          }}
        >
          <TouchableOpacity
            style={styles.buttonUp}
            onPress={() => this.increaseAuthority(1)}
          >
            <Text style={styles.buttonText}>+1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonUp}
            onPress={() => this.increaseAuthority(5)}
          >
            <Text style={styles.buttonText}>+5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonUp}
            onPress={() => this.increaseAuthority(10)}
          >
            <Text style={styles.buttonText}>+10</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonDown: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    padding: 5,
    margin: 5,
    backgroundColor: "tomato"
  },
  buttonUp: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    padding: 5,
    margin: 5,
    backgroundColor: "limegreen"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  }
});

export default PlayerControls;
