import React from 'react';
import { StyleSheet, Text, View, Image,
   SafeAreaView, ScrollView, } from 'react-native';
import { Icon } from 'react-native-elements'
import { createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation';
import Todo from './components/Todo';
import Done from './components/Done';
import Nuevo from './components/New';

var todos = [
  {
    checked: true,
    detail: 'ir ac omrpa'
  },
  {
    checked: false,
    detail: 'ir por el'
  }
];

const TodoStack = createStackNavigator({
  Todo: {
    screen:() => <Todo todo={todos} />,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Icon name="menu" size={30} onPress={ () => navigation.openDrawer() } />,
    })
  },
});

const DoneStack = createStackNavigator({
  Done: {
    screen: Done,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Icon name="menu" size={30} onPress={ () => navigation.openDrawer() } />,
    })
  },
});

const NewStack = createStackNavigator({
  New: {
    screen: Nuevo,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Icon name="menu" size={30} onPress={ () => navigation.openDrawer() } />,
    })
  },
});

const DrawerContent = (props) => (
<ScrollView>
  <Text>Damaso List</Text>
  <DrawerItems {...props} />
</ScrollView>
)

export default  App = createDrawerNavigator({
  Inicio: {
    screen: TodoStack,
  },
  NewTodo: {
    screen: NewStack,
  },
  Done: {
    screen: DoneStack,
  }

},{
  contentComponent: props => <DrawerContent {...props} />
});

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#cccccc',
  },
  imagen: {
    height: 200,
    alignItems: 'stretch',
  },
});
