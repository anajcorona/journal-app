
import { signInWithGoole } from '../../firebase/providers';
import { checkingCredentials,logout, login } from './';

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
        const result = await signInWithGoole();
        // console.log({result});
        if (!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
}