import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving } from "./";

export const starNewNote = ( ) => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        dispatch(savingNewNote());

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        };
        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ));
        const setDocResp = await setDoc( newDoc, newNote );
        console.log('newDoc',newDoc);
        console.log('setDocRespo',setDocResp);

        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));

    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        if(!uid) throw new Error('El UID del usuario no existe');
        console.log(uid);
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch(setSaving());
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;
        console.log('NOTETOFIRESTORE',noteToFireStore);

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}` );
        await setDoc(docRef, noteToFireStore, {merge:true} );


    }
}
