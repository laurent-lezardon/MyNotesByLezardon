import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./features/note";

export const store = configureStore({
  reducer: { notesSlice },
});
