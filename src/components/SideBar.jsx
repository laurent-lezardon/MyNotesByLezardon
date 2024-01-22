import editIcon from "../assets/edit.svg";
import folderIcon from "../assets/folder.svg";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="shrink-0 bg-slate-800 w-[70px] flex flex-col items-center h-full pt-6">
      <div className="flex justify-center  mb-10">
        <div className="w-2 h-2 rounded-full bg-red-500"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500 mx-1"></div>
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
      </div>
      <Link to="/edit">
        <img className="w-10 h-10 mb-10" src={editIcon} alt="" />
      </Link>
      <Link to="/">
        <img className="w-10 h-10" src={folderIcon} alt="" />
      </Link>
    </aside>
  );
}
