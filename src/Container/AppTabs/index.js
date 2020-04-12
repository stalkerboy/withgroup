import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import { AntDesign, Ionicons, EvilIcons } from "@expo/vector-icons";
import {HomeStack} from './HomeStack';
import {SearchStack} from './SearchStack';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Tabs = createBottomTabNavigator();

export const AppTabs = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
            return <Icon name="home" size={size} color={color} />;
          } else if (route.name === 'Search') {
            return <Icon name="search1" size={size} color={color} title="" />;
          }

          // You can return any component that you like here!
          return <Text name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        // showLabel: false,
      }}>
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={SearchStack} />
    </Tabs.Navigator>
  );
};
