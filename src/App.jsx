import NotesList from "./components/NotesList";
import { useSelector, useDispatch } from "react-redux";
import { getNotesFromApi } from "./features/note";
import SideBar from "./components/SideBar";
import SideNote from "./components/SideNote";
import MyHeader from "./components/MyHeader";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteDisplay from "./components/NoteDisplay";
import NoteEdit from "./components/NoteEdit";

function App() {
  const notesList = useSelector((store) => store.notesSlice.list);
  const dispatch = useDispatch();
  if (!notesList) {
    dispatch(getNotesFromApi());
  }
  console.log("notesList", notesList);
  return (
    <div className="bg-slate-800  w-full min-h-screen ">
      <div className=" ">
        <BrowserRouter>
          <MyHeader />
          {/* <SideBar /> */}
          {/* <SideNote /> */}
          <Routes>
            {/* <Route path="/" element={<NotesList />} /> */}

            <Route
              path="/"
              element={
                <div className="flex">
                  {/* <SideBar /> */}
                  <SideNote />
                </div>
              }
            />

            <Route path="/note/:id" element={<NoteDisplay />} />
            <Route path="/edit" element={<NoteEdit />} />
            <Route path="/edit/:id" element={<NoteEdit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
