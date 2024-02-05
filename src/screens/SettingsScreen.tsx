import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/stylesApp';
import {AuthContext} from '../context/AuthContext';

export const SettingsScreen = () => {
  const {authState} = useContext(AuthContext);

  return (
    <View style={styles.globalStyles}>
      <Text style={styles.textSyle}>SettingsScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};
