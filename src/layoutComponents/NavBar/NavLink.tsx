import { Link } from "react-router-dom";
import { NavLinkProperties } from "./navbar-item-types";
import clsx from "clsx";

export default function NavLink({
  routePath,
  text,
  isActive,
  disabled,
  inDrowpdown,
}: NavLinkProperties) {
  return (
    <li className="nav-item">
      <Link
        className={clsx(
          inDrowpdown ? "dropdown-item" : "nav-link",
          isActive && "active",
          disabled && "disabled"
        )}
        to={routePath}
      >
        {text}
      </Link>
    </li>
  );
}
