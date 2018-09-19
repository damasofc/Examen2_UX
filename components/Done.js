import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ListItem from './ListItem';

export default class Done extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        todo : []
    }
  }

  componentDidMount(){
    this.setState({
        todo: this.props.todo
    })
}
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Done</Text>
          {this.state.todo.map((it,i) => {
          return (
            it.checked?<ListItem key={i} press={() => {this.props.onPress(i); this.forceUpdate();}} checked={it.checked} detail={it.detail} />:
            null)
        }) }
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