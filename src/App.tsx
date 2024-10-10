import "./App.scss";
import NavBar from "./layoutComponents/NavBar/NavBar.tsx";
import ContentMain from "./layoutComponents/ContentMain.tsx";
import Footer from "./layoutComponents/Footer.tsx";

function App() {
  return (
    <>
      <NavBar />
      <ContentMain>
        <div className="row">
          <div className="col-md-12">
            <h1>Put your app here!</h1>
          </div>
        </div>
      </ContentMain>
      <Footer />
    </>
  );
}

export default App;
