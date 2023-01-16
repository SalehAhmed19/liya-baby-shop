import Home from "./components/Pages/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import Login from "./components/Pages/Authentication/Login/Login";
import Info from "./components/Shared/Info/Info";
import Category from "./components/Pages/Category/Categories";
import NewsLetter from "./components/Pages/Home/NewsLetter/NewsLetter";

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
            <Route path="/categories" element={<Category />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <section>
          <Info />
          <NewsLetter />
        </section>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
}

export default App;
