import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./layoutComponents/Layout.tsx";
import ContentDummy from "./components/ContentDummy.tsx";
import FourOhFour from "./components/pages/FourOhFour.tsx";
import About from "./components/pages/About.tsx";
import CountriesFun from "./components/pages/CountriesFun/CountriesFun.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContentDummy />} />
          <Route path="about" element={<About />} />
          <Route path="country-stuff" element={<CountriesFun />} />
        </Route>
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </>
  );
}

export default App;
