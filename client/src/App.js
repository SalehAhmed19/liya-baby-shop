import Home from "./components/Pages/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import Login from "./components/Pages/Authentication/Login/Login";

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
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
}

export default App;
