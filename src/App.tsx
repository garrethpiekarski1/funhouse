import "./App.scss";
import NavBar from "./layoutComponents/NavBar/NavBar.tsx";
import ContentMain from "./layoutComponents/ContentMain.tsx";
import Footer from "./layoutComponents/Footer.tsx";
import ContentDummy from "./components/ContentDummy.tsx";

function App() {
  return (
    <>
      <NavBar />
      <ContentMain>
        <ContentDummy />
      </ContentMain>
      <Footer />
    </>
  );
}

export default App;
