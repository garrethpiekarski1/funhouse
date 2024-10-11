import NavBar from "./NavBar/NavBar";
import ContentMain from "./ContentMain";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavBar />
      <ContentMain>
        <Outlet />
      </ContentMain>
      <Footer />
    </>
  );
}
