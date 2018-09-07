import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default class App extends Component {
  pressBtn = () => {
    alert("Press");
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Press NTFN" onPress={this.pressBtn}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
