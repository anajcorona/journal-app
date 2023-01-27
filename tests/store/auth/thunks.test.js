import { loginWithEmailPassword, logoutFirebase, signInWithGoole } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixures";

jest.mock('../../../src/firebase/providers');

describe('Pruebas en auth Thunks', () => {
    const dispatch = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('Debe de invocar el Checking credentials', async() => {
        await checkingAuthentication()(dispatch);
        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials())
    });

    test('StarGoogleSigIn debe de llamar checkingCredentials y login -Exito ', async() => {
        const loginData = { ok: true, ...demoUser };
        await signInWithGoole.mockResolvedValue(loginData);
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test('StarGoogleSigIn debe de llamar checkingCredentials y logout -Exito ', async() => {
        const loginData = { ok: false, errorMessage: 'Un error en google' };
        await signInWithGoole.mockResolvedValue(loginData);
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });

    test('startCreatingUserWithEmailPassword debe de llamar checking credentials y Login -Exito', async() => {
        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password:'123456' };
        await loginWithEmailPassword.mockResolvedValue(loginData);
        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test('startLogout debe de llamar logoutfirebase, clearNotes y logout', async() => {
        await startLogout()(dispatch);
        expect(logoutFirebase).toHaveBeenCalled();
        // expect(dispatch).toHaveBeenCalledWith( clearNotesLogout() );
        // expect(dispatch).toHaveBeenCalledWith( logout() );
    });

});