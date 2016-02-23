/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const englishToGerman = require('./english_german.json');

const styles = StyleSheet.create({
  // For the container View
  parent: {
    padding: 16,
  },

  // For the Text label
  germanLabel: {
    marginTop: 20,
    fontWeight: 'bold',
  },

  // For the Text meaning
  germanWord: {
    marginTop: 15,
    fontSize: 30,
    fontStyle: 'italic',
  },
});

class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.showMeaning = this.showMeaning.bind(this);
  }

  handleChange(txt) {
    this.setState({
      input: txt,
    });
  }

  showMeaning() {
    const meaning = this.state.input in englishToGerman ?
                      englishToGerman[this.state.input] :
                      'Not found';
    this.setState({
      output: meaning,
    });
  }

  render() {
    return (
      <View style={styles.parent}>
        <Text>
          Type something in English:
        </Text>
        <TextInput
          text={this.state.input}
          onChangeText={this.handleChange}
          onSubmitEditing = {this.showMeaning}
        />
        <Text style={styles.germanLabel}>
          Its German equivalent is:
        </Text>
        <Text style={styles.germanWord}>
          {this.state.output}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Dictionary', () => Dictionary);
