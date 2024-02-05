import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/stylesApp';
import {AuthContext} from '../context/AuthContext';

export const AlbumScreens = () => {
  const {authState, logout} = useContext(AuthContext);

  return (
    <View style={styles.globalStyles}>
      <Text style={styles.textSyle}>AlbumsScreen</Text>
      <View>
        {authState.isLoggedIn === true ? (
          <Button title="Logout" onPress={logout} />
        ) : null}
      </View>
    </View>
  );
};
