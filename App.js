import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _onPressButton() {
    Alert.alert('Got \'em.')
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 0.5, backgroundColor: 'powderblue', height: '100%'}} />
        <View style={{flex: 1, backgroundColor: 'skyblue', height: '100%'}} />
        <View style={{flex: 1.5, backgroundColor: 'steelblue', height: '100%'}} />

        <View style={styles.container}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color='white'
            style={{padding: '35'}}
          />

          <View style={{backgroundColor: 'yellow', padding: 15}}>
            <TextInput
              style={{fontSize: 22}}
              placeholder="I am magic translator."
              onChangeText={(text) => this.setState({text})}
            />
            <Text style={{padding: 10, fontSize: 62}}>
              {this.state.text.split(' ').map((word) => word && '🥑').join(' ')}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
});
