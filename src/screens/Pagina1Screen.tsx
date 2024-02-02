import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/stylesApp';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalStyles}>
      <Text style={styles.textSyle}>Pagina1Screen</Text>
      <View style={styles.buttonStyles}>
        <Button
          title="Ir a la Screen2"
          onPress={() => navigation.navigate('Pagina2Screen')}
        />
      </View>
      <Text style={styles.textSyle}> Navegar con Argumentos</Text>
      <View style={styles.containerPersonaButton}>
        <View style={styles.buttonStyles}>
          <TouchableOpacity
            style={{...styles.buttonPersonaStyle, backgroundColor: '#1EC778'}}
            onPress={() =>
              navigation.navigate('PersonaScreen', {
                id: 1,
                name: 'Pedro',
              })
            }>
            <Text style={styles.textButtonStylePersona}>Pedro</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonStyles}>
          <TouchableOpacity
            style={{...styles.buttonPersonaStyle, backgroundColor: '#C71E51'}}
            onPress={() =>
              navigation.navigate('PersonaScreen', {
                id: 2,
                name: 'Maria',
              })
            }>
            <Text style={styles.textButtonStylePersona}>Maria</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
