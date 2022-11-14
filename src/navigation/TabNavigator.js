import React from 'react';
import ContactsScreen from '../screens/Contacts';
import GroupsScreen from '../screens/Groups';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = props => {

  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarLabelStyle: {
                flex: 1,
                fontSize: 15,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
            },
            tabBarStyle: {display: 'flex'},
            tabBarIconStyle: {display: 'none'},
        }}
    >
        <Tab.Screen name={'Contacts'} component={ContactsScreen}/>
        <Tab.Screen name={'Groups'} component={GroupsScreen}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;