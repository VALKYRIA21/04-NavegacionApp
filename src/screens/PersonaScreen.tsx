import React, {useContext, useEffect, useRef} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/stylesApp';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';
import {AuthContext} from '../context/AuthContext';

// interface RouterParams {
//   id: number;
//   name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  const {changeUsername} = useContext(AuthContext);

  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  });
  const userRef = useRef<string>();
  useEffect(() => {
    if (params.name !== userRef.current) {
      userRef.current = params.name;
      changeUsername(params.name);
    }
  });

  return (
    <View style={styles.globalStyles}>
      <Text style={styles.textSyle}>PersonaScreen</Text>
      <Text style={styles.textSyle}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
