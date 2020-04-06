import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import { AntDesign, Ionicons, EvilIcons } from "@expo/vector-icons";
import {HomeStack} from './HomeStack';
import {SearchStack} from './SearchStack';
import {Text} from 'react-native';

const Tabs = createBottomTabNavigator();

export const AppTabs = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
            return <Text name={'home'} size={size} color={color} />;
          } else if (route.name === 'Search') {
            return <Text name={'search'} size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <Text name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={SearchStack} />
    </Tabs.Navigator>
  );
};
