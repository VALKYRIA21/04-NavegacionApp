import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/stylesApp';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

// interface RouterParams {
//   id: number;
//   name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  });

  return (
    <View style={styles.globalStyles}>
      <Text style={styles.textSyle}>PersonaScreen</Text>
      <Text style={styles.textSyle}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
