import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteNote } from "../features/note";

export default function NoteDisplay() {
  const notesSlice = useSelector((store) => store.notesSlice);
  console.log(notesSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("id", id);
  const note = notesSlice.list?.find((note) => note.id === id);
  console.log(note);

  return (
    <div className="text-slate-100 p-4 ">
      <div className="flex justify-end">
        <Link
          to={`/edit/${id}`}
          className="px-4 py-1 text-sm bg-lime-600 rounded font-semibold hover:bg-lime-700 mr-2"
        >
          Update
        </Link>
        <button
          onClick={() => {
            dispatch(deleteNote(id));
            navigate("/");
          }}
          className="inline-block px-4 py-1 text-sm bg-[orangered] rounded font-semibold hover:bg-red-700"
        >
          Delete
        </button>
      </div>
      <p className="text-xl mb-4">{note.title}</p>
      <p className="text-base mb-4">{note.subtitle}</p>
      <p className="text-sm mb-4">{note.bodyText}</p>
    </div>
  );
}
