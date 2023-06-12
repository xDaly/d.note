import { createSelector } from '@reduxjs/toolkit';

const selectNotes = (state) => state.notes;

export const selectAllNotes = createSelector(
  selectNotes,
  (notes) => notes
);

export const selectNoteById = createSelector(
  selectNotes,
  (notes, noteId) =>   notes.find((note) => note.id == noteId) 
);