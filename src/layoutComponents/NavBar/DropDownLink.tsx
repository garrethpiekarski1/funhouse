import { NavLinkProperties } from "./navbar-item-types";
import clsx from "clsx";

export default function DropDownLink({
  routePath,
  text,
  isActive,
  disabled,
}: NavLinkProperties) {
  return (
    <li>
      <a
        className={clsx(
          "dropdown-item",
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
