import NavLink from "./NavLink";
import DropDownMenu from "./DropDownMenu";
import MENUCONFIG from "../../config/navbarConfig.json";
import APPCONFIG from "../../config/appConfig.json";
import { useState } from "react";
import clsx from "clsx";
import LoggedInInteraction from "./LoggedInInteraction";

export default function NavBar() {
  const menuItems = MENUCONFIG;
  const appConfig = APPCONFIG;

  const [mobileNavShow, setMobileNavShow] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  window.addEventListener("resize", updateWindowSize);
  function updateWindowSize() {
    if (window.innerWidth > 992) {
      setMobileNavShow(false);
    }
  }

  function handleDropDownMenuOpen(menuIndex: number) {
    if (menuIndex === activeDropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menuIndex);
    }
  }

  function handleMobileNavToggle() {
    setMobileNavShow(!mobileNavShow);
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {appConfig.appTitle}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleMobileNavToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={clsx("collapse navbar-collapse", mobileNavShow && "show")}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menuItems.map((item, index) => {
              return item.type === "navLink" ? (
                <NavLink
                  key={index}
                  routePath={item.routePath || "#"}
                  text={item.text || "Link"}
                  disabled={item.disabled}
                  isActive={item.isActive}
                  inDrowpdown={false}
                />
              ) : (
                <DropDownMenu
                  key={index}
                  text={item.text}
                  items={item.children || []}
                  activeMenu={activeDropdown === index}
                  menuToggleHandler={() => handleDropDownMenuOpen(index)}
                />
              );
            })}
          </ul>
          {appConfig.hasLogin && (
            <div className="d-flex">
              <LoggedInInteraction mobile={mobileNavShow} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
