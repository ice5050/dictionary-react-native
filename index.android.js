/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class Dictionary extends Component {
  render() {
    return (
      <View style = { styles.parent } >
        <Text>
          Type something in English:
        </Text>
        <TextInput />
        <Text style = { styles.germanLabel } >
          Its German equivalent is:
        </Text>
        <Text style = { styles.germanWord } >
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // For the container View
  parent: {
    padding: 16
  },

  // For the Text label
  germanLabel: {
    marginTop: 20,
    fontWeight: 'bold'
  },

  // For the Text meaning
  germanWord: {
    marginTop: 15,
    fontSize: 30,
    fontStyle: 'italic'
  },
});

AppRegistry.registerComponent('Dictionary', () => Dictionary);
