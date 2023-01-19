import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activeNote: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [],
        // }
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action ) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            console.log('setActiveNote');
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload.notes;
        },
        setSaving: (state) => {
            state.isSaving = true;
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            //TODO
        },
        deleteNoteById: (state, action) => {

        },
    }
});

export const {
     addNewEmptyNote,
     setActiveNote,
     setNotes,
     setSaving,
     updateNote,
     deleteNoteById,
     savingNewNote
} = journalSlice.actions;