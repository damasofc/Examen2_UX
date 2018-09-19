import React from 'react';
import { StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListItem from './ListItem';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo : []
    }
   this.onPress = this.onPress.bind(this);
   this.createTo = this.createTo.bind(this);
  }

  componentDidMount(){
      this.setState({
          todo: this.props.todo
      })
  }

  createTo(detail)
  {
    let arr = this.state.todo.slice();
    arr.push({checked: false,detail: detail});
    this.setState({
      todo: arr
    });

    console.log(this.state.todo);
    this.forceUpdate();
  }

  onPress(key){
    const arr = this.state.todo.slice();
    arr[key].checked = !arr[key].checked;
    this.setState({
      todo: arr
    });
  }

  render() {
    return (
      <ScrollView>
          <Text>Todo Taks</Text>
          {this.state.todo.map((it,i) => {
          return (
            <ListItem key={i} press={() => {this.props.onPress(i); this.forceUpdate();}} checked={it.checked} detail={it.detail} />
            )
        }) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
});
