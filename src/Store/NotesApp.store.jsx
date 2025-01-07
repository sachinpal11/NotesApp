import { configureStore, createSlice, createStore } from "@reduxjs/toolkit"

const NotesData = [
  {
    Card_Title: "wake up",
    Card_Description: "I have to wake up early in the morning"
  },
]

const ChangeNotesSlice = createSlice({
  name: "ChangeNote",
  initialState: NotesData,
  reducers: {
    AddNote: (state, action) => {
      const newState = [{ ...action.payload }, ...state];
      return newState;
    },
    DeleteNote: (state, action) => {
      const newState = state.filter((items) => items.Card_Title != action.payload)
      return newState;
    }
  }
})
const AlertNoteSlice = createSlice({
  name: "AlertNote",
  initialState: false,
  reducers: {
    AlertMake: (state) => {
      console.log(state);
      return !state;
    }
  }
})

export const { AlertMake } = AlertNoteSlice.actions;
export const { AddNote, DeleteNote } = ChangeNotesSlice.actions;
export const NotesAppStore = configureStore({
  reducer: {
    ChangeNotes: ChangeNotesSlice.reducer,
    AlertNote: AlertNoteSlice.reducer,
  }
})