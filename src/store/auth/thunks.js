
import { loginWithEmailPassword, logoutFirebase, resgisterUserWithEmailPassword, signInWithGoole } from '../../firebase/providers';
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
        if (!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
        const {ok, uid, photoULR, errorMessage} = await resgisterUserWithEmailPassword({email, password, displayName});

        if (!ok) return dispatch(logout({errorMessage}));
        dispatch(login({uid, displayName, email, photoULR}));

    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
        const result = await loginWithEmailPassword({email, password});
        if (!result.ok) return dispatch(logout(result));
        dispatch(login(result));
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();
        dispatch(logout({}));
    }
}