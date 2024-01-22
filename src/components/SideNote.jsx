import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function SideNote() {
  const notesList = useSelector((store) => store.notesSlice.list);
  return (
    <div className="shrink-0 grow  bg-slate-100 text-slate-900 w-[275px]  p-2 flex flex-col items-center">
      <ul className="w-full divide-y divide-slate-400">
        {notesList &&
          notesList.map((note) => (
            <li key={note.id} className="relative cursor-pointer">
              <Link
                className="block w-full h-full px-2 py-1 text-sm text-slate-800 "
                to={`/note/${note.id}`}
              >
                <span className="block font-semibold ">{note.title}</span>
                <span className="block pl-2">{note.subtitle}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
