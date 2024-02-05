import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/stylesApp';
import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalStyles}>
      <Text style={styles.textSyle}>ContactsScreen</Text>
      <View>
        {authState.isLoggedIn === true ? null : (
          <Button title="SignIn" onPress={signIn} />
        )}
      </View>
    </View>
  );
};
