import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumScreens} from '../screens/AlbumScreens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/stylesApp';
import {StyleSheet, Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
      }}
      sceneContainerStyle={styles.tabStyle}
      screenOptions={({route}) => ({
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarPressColor: 'white',
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarIcon: () => {
          let iconName: string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'CH';
              break;

            case 'ContactsScreen':
              iconName = 'CT';
              break;

            case 'AlbumsScreen':
              iconName = 'AB';
              break;
          }
          return <Text style={{color: colores.primary}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumScreens} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: 'white',
  },
});
