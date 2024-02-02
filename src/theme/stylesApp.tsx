import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalStyles: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonStyles: {
    marginVertical: 5,
  },
  textSyle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  containerPersonaButton: {
    flexDirection: 'row',
  },
  buttonPersonaStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 10,
  },
  textButtonStylePersona: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuBoton: {
    marginVertical: 10,
  },
  menuTexto: {
    fontSize: 20,
  },
});
