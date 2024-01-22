import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, updateNote } from "../features/note";
import { nanoid } from "nanoid";
import { useParams, useNavigate } from "react-router-dom";

export default function NoteEdit() {
  const notesList = useSelector((store) => store.notesSlice.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputsNote, setInputsNote] = useState({
    title: "",
    subtitle: "",
    bodyText: "",
  });
  const [inputsNoteValidation, setInputsNoteValidation] = useState({
    title: false,
    subtitle: false,
    bodyText: false,
  });
  //console.log(inputsNoteValidation);
  const { id } = useParams();

  useEffect(() => {
    if (id && notesList) {
      const noteId = notesList.find((note) => note.id === id);
      //console.log("noteId", noteId);
      setInputsNote({
        title: noteId.title,
        subtitle: noteId.subtitle,
        bodyText: noteId.bodyText,
      });
    } else {
      setInputsNote({
        title: "",
        subtitle: "",
        bodyText: "",
      });
    }
  }, [id]);

  const handleSubmitNote = (e) => {
    e.preventDefault();
    if (Object.values(inputsNote).every((value) => value)) {
      console.log("every thing fine !");
      setInputsNoteValidation({
        title: "",
        subtitle: "",
        bodyText: "",
      });
      if (id) {
        dispatch(updateNote({ ...inputsNote, id: id }));
      } else dispatch(addNote({ ...inputsNote, id: nanoid(8) }));
      setInputsNote({
        title: "",
        subtitle: "",
        bodyText: "",
      });
      navigate("/");
    } else {
      console.log("something gone wrong !");
      for (const [key, value] of Object.entries(inputsNote)) {
        if (value.length === 0) {
          console.log(key);
          setInputsNoteValidation((previous) => ({ ...previous, [key]: true }));
        } else {
          setInputsNoteValidation((previous) => ({
            ...previous,
            [key]: false,
          }));
        }
      }
    }
  };

  return (
    <div className="text-slate-100 p-4 w-full h-full">
      <h2 className="text-xl text-center">NoteEdit</h2>
      <form onSubmit={handleSubmitNote} className="p-2 h-full">
        {/* Input Title */}
        <label className="">
          <span className="block text-sm font-semibold mb-1">Title</span>
          <input
            spellCheck="false"
            onChange={(e) =>
              setInputsNote({ ...inputsNote, title: e.target.value })
            }
            className={`w-full rounded pl-2 text-slate-800 text-sm mb-2 ${
              !inputsNoteValidation.title
                ? "outline outline-none"
                : "outline outline-2 outline-[orangered] "
            }`}
            type="text"
            value={inputsNote.title}
          />
          {/* Input Subtitle */}
        </label>
        <label className="">
          <span className="block text-sm font-semibold mb-1">Subtitle</span>
          <input
            spellCheck="false"
            onChange={(e) =>
              setInputsNote({ ...inputsNote, subtitle: e.target.value })
            }
            className={`w-full rounded pl-2 text-slate-800 text-sm mb-2 ${
              !inputsNoteValidation.subtitle
                ? "outline outline-none"
                : "outline outline-2 outline-[orangered] "
            }`}
            type="text"
            value={inputsNote.subtitle}
          />
        </label>
        {/* TextArea BodyText */}
        <label className="block h-full mb-3">
          <span className="block text-sm font-semibold mb-1">BodyText</span>
          <textarea
            spellCheck="false"
            onChange={(e) =>
              setInputsNote({ ...inputsNote, bodyText: e.target.value })
            }
            className={`w-full h-full rounded pl-2 text-slate-800 min-h-[300px] text-sm mb-2 ${
              !inputsNoteValidation.bodyText
                ? "outline outline-none"
                : "outline outline-2 outline-[orangered] "
            }`}
            type="text"
            value={inputsNote.bodyText}
          />
        </label>
        <button
          type="submit"
          onClick={handleSubmitNote}
          className="px-4 py-2 text-sm rounded font-semibold bg-lime-700 w-full"
        >
          Validate
        </button>
      </form>
    </div>
  );
}
