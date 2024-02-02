import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/stylesApp';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Pagina2Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalStyles}>
      <Text style={styles.textSyle}>Pagina2Screen</Text>
      <Button
        title="Ir a Screen 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
