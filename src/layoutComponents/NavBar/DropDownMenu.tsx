import clsx from "clsx";
import { DropDownMenuConfig } from "./navbar-item-types";
import DropDownDivider from "./DropDownDivider";
import DropDownLink from "./DropDownLink";

export default function DropDownMenu({
  text,
  items,
  activeMenu,
  menuToggleHandler,
}: DropDownMenuConfig) {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={menuToggleHandler}
      >
        {text}
      </a>
      <ul className={clsx("dropdown-menu", activeMenu && "show")}>
        {items.map((item, index) => {
          return item.type === "dropDownLink" ? (
            <DropDownLink
              key={index}
              routePath={item.routePath || "#"}
              text={item.text || "Link"}
              disabled={item.disabled}
              isActive={item.isActive}
            />
          ) : (
            <DropDownDivider key={index} />
          );
        })}
      </ul>
    </li>
  );
}
