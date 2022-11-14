import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import TabNavigator from './TabNavigator';
import AddContact from '../screens/AddContact';
import AddGroup from '../screens/AddGroup';
import AddContactGroupScreen from '../screens/AddContactGroup';
import ExistingContact from '../screens/ExistingContact';


const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={'Go To Contacts!'} component={TabNavigator}/>
        <Stack.Screen name={'Add Contact'} component={AddContact}/>
        <Stack.Screen name={'Add Group'} component={AddGroup}/>
        <Stack.Screen name={'Add Contact Group'} component={AddContactGroupScreen}/>
        <Stack.Screen name={'Existing Contact'} component={ExistingContact}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;