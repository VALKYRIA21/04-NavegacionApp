import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Tabs1Screen} from '../screens/Tabs1Screen';
import {StackNavigator} from './StackNavigator';
import {colores} from '../theme/stylesApp';
import {Platform, Text} from 'react-native';
import {TopTabsNavigator} from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: props => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tabs1Screen':
              iconName = 'T1';
              break;

            case 'Tabs2Screen':
              iconName = 'T2';
              break;

            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{color: props.color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tabs1Screen"
        options={{title: 'Tab 1'}}
        component={Tabs1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tabs2Screen"
        options={{title: 'Tab 2'}}
        component={TopTabsNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 20,
        },
        tabBarIcon: props => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tabs1Screen':
              iconName = 'T1';
              break;

            case 'Tabs2Screen':
              iconName = 'T2';
              break;

            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{color: props.color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tabs1Screen"
        options={{title: 'Tab 1'}}
        component={Tabs1Screen}
      />
      <BottomTabIOS.Screen
        name="Tabs2Screen"
        options={{title: 'Tab 2'}}
        component={TopTabsNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};

export default Tabs;
