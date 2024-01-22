import editIcon from "../assets/edit.svg";
import folderIcon from "../assets/folder.svg";
import { Link } from "react-router-dom";

export default function MyHeader() {
  return (
    <header className="flex border-b border-slate-400 justify-between items-center px-4">
      <div className="p-4 ">
        <h1 className="text-slate-100 text-xl">MyHeader</h1>
        <p className="text-sm text-[orangered] ml-12 font-semibold">
          By Lezardon
        </p>
      </div>
      <nav className="flex ">
        <Link to="/edit">
          <img className="w-10 h-10 mr-6" src={editIcon} alt="" />
        </Link>
        <Link to="/">
          <img className="w-10 h-10" src={folderIcon} alt="" />
        </Link>
      </nav>
    </header>
  );
}
