import React from 'react';
import { StyleSheet, Text, View, ScrollView,
TextInput, Button } from 'react-native';

export default class Nuevo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        detailNuevo: ''
      }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{marginTop: 22}}>
            <View>
              <Text>To do:</Text>
              <TextInput 
             style = {styles.inputBox}
             onChangeText={(changedText) => this.setState({detailNuevo: changedText})} />

              <Button
                onPress={() => this.props.createTodo(this.state.detailNuevo)}
                title="Create"
                color="#1094"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
});