import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Pages/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <body>
        <section>
          <Navbar />
        </section>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </body>
    </>
  );
}

export default App;
