import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote, setPhtotosToActiveNote, deleteNoteById } from "./";

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

        dispatch( updateNote(note));

    }
}

export const startUploadingFiles = ( files = []) => {
    return async( dispatch ) => {
        dispatch(setSaving());
        // await fileUpload( files[0] );
        const fileUploadPromises = [];
        for (const file of files ) {
            fileUploadPromises.push(fileUpload(file));
        }
        const photosUrls = await Promise.all(fileUploadPromises);
        dispatch(setPhtotosToActiveNote(photosUrls))
    }
}

export const startDeletingNote = () => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        console.log({uid, note})

        const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await deleteDoc( docRef );

        dispatch(deleteNoteById(note.id))
    }
}
