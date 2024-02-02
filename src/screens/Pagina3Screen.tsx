import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/stylesApp';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalStyles}>
      <Text style={styles.textSyle}>Pagina3Screen</Text>
      <View style={styles.buttonStyles}>
        <Button title="Volver" onPress={() => navigation.pop()} />
      </View>
      <View style={styles.buttonStyles}>
        <Button title="Ir al Screen 1" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};
