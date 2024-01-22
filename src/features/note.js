import { createSlice } from "@reduxjs/toolkit";

const initialState = { list: undefined };

const notesSlice = createSlice({
  name: "notesSlice",
  initialState,
  reducers: {
    addNotesFromApi: (state, action) => {
      //console.log("action.payload", action.payload.notes);
      state.list = action.payload.notes;
    },
    addNote: (state, action) => {
      console.log(action.payload);
      state.list.push(action.payload);
    },
    deleteNote: (state, action) => {
      console.log("deleteNote", action.payload);
      const indexOfNoteToDelete = state.list.findIndex(
        (note) => note.id === action.payload
      );
      console.log("indexOfNoteToDelete", indexOfNoteToDelete);
      state.list.splice(indexOfNoteToDelete, 1);
    },
    updateNote: (state, action) => {
      const indexOfNoteToUpdate = state.list.findIndex(
        (note) => note.id === action.payload.id
      );
      console.log("indexOfNoteToUpdate", indexOfNoteToUpdate);
      state.list[indexOfNoteToUpdate] = action.payload;
    },
  },
});

export const getNotesFromApi = (action) => (dispatch, getState) => {
  fetch("./data/notes.json")
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      dispatch(addNotesFromApi(data));
    });
};

export default notesSlice.reducer;
export const { addNote, deleteNote, updateNote, addNotesFromApi } =
  notesSlice.actions;
