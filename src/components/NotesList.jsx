import { useSelector, useDispatch } from "react-redux";

export default function NotesList() {
  const notesList = useSelector((store) => store.notesSlice.list);
  const dispatch = useDispatch();
  return (
    <div className=" p-6 w-full">
      <p className="text-slate-100 mb-6 pl-2 font-semibold">My Notes</p>
      <ul className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
        {notesList &&
          notesList.map((note) => (
            <li
              className="bg-slate-100 p-4 rounded hover:bg-slate-50 cursor-pointer"
              key={note.id}
            >
              <p>{note.title}</p>
              <p>{note.subtitle}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
