import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, TouchableOpacity, Image,View,Text,useWindowDimensions} from 'react-native';
import {EditProductStack} from '../../Share/Stack/EditProductStack';
import {ProductStack} from '../../Share/Stack/ProductStack';
import {Feed} from './Feed';
import {CreateStudy} from './CreateStudy';
import {useDispatch} from 'react-redux';
import {MoimMain} from './MoimMain';
import {MoimDetail} from './MoimDetail';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      openByDefault
      drawerType={isLargeScreen ? 'permanent' : 'back'}
      drawerStyle={isLargeScreen ? null : { width: '100%' }}
      overlayColor="transparent"
    >
      {/* Screens */}
    </Drawer.Navigator>
  );
}
function LogoTitle() {
  return (
    <View style={{flex: 1}}>
    <Text style={[{ color: "#03D2B4",fontSize: 30,fontWeight: "bold",margin: 100 }]}>Fruit</Text>
    </View>
  ); 
}
function HeaderR() {
  return ( <Image  source={require('../../../../assets/images/header/Vector.png')} style={{height:20, width:30,resizeMode:'contain',margin: 20}} /> );
 
}
function HeaderL(){
  return(<Image source={require('../../../../assets/images/header/profileimg.png')} style={{height:20, width: 30,justifyContent:'center', alignItems:'center',  resizeMode:'contain',margin: 20}}/> );
  
}
export const HomeStack = ({}) => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator initialRouteName="MoimMain">
      {EditProductStack(Stack)}
      {ProductStack(Stack)}
      <Stack.Screen
        name="MoimMain"
        component={MoimMain}
        options={{
          headerTitle: props => <LogoTitle {...props}/>,
          headerRight: ()=> <HeaderR/>,
          headerLeft: ()=> <HeaderL />
        }}
      />

      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            return (
              <Button
                onPress={() => {
                  dispatch({
                    type: 'LOGOUT',
                  });
                }}
                title="LOGOUT"
              />
            );
          },
        }}
        component={Feed}
      />
      <Stack.Screen name="MoimDetail" component={MoimDetail} />
      <Stack.Screen name="CreateStudy" component={CreateStudy} />
    </Stack.Navigator>
  );
};
