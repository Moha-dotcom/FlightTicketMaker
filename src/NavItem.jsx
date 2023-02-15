import { Link } from "react-router-dom";

export default function NavItem({ href, isActive, children }) {
    return (
      <li>
        <Link to={href}  className={`block px-3 py-2 rounded-md ${isActive ? 'bg-indigo-500 text-white' : 'bg-slate-50'}`} >   {children}</Link>
      
      </li>
    )
  }
  