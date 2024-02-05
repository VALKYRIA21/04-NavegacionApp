import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'logout'}
  | {type: 'changeUserName'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        userName: 'Test',
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        userName: '',
      };
    case 'changeUserName':
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};
