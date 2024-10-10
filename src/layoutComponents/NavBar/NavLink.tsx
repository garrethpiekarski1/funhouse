import { NavLinkProperties } from "./navbar-item-types";
import clsx from "clsx";

export default function NavLink({
  routePath,
  text,
  isActive,
  disabled,
}: NavLinkProperties) {
  return (
    <li className="nav-item">
      <a
        className={clsx(
          "nav-link",
          isActive && "active",
          disabled && "disabled"
        )}
        href={routePath}
      >
        {text}
      </a>
    </li>
  );
}
