import NavBar from "./NavBar/NavBar";
import ContentMain from "./ContentMain";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { HomeCountryContext } from "../components/pages/CountriesFun/HomeCountryContext";
import { useState } from "react";

export default function Layout() {
  const [homeCountry, setHomeCountry] = useState("");
  const homeCountryValue = { homeCountry, setHomeCountry };

  return (
    <>
      <HomeCountryContext.Provider value={homeCountryValue}>
        <NavBar />
        <ContentMain>
          <Outlet />
        </ContentMain>
      </HomeCountryContext.Provider>
      <Footer />
    </>
  );
}
