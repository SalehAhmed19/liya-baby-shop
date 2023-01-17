import Home from "./components/Pages/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import Login from "./components/Pages/Authentication/Login/Login";
import Info from "./components/Shared/Info/Info";
import Category from "./components/Pages/Category/Categories";
import NewsLetter from "./components/Pages/Home/NewsLetter/NewsLetter";
import BabyDiaper from "./components/Pages/Category/BabyDiaper";
import NewBornEssentials from "./components/Pages/Category/NewBornEssentials";
import BabyDressGirl from "./components/Pages/Category/BabyDressGirl";
import BabyDressBoy from "./components/Pages/Category/BabyDressBoy";
import WomenDress from "./components/Pages/Category/WomenDress";
import ManClothing from "./components/Pages/Category/ManClothing";
import OfferItems from "./components/Pages/Category/OfferItems";

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
            <Route path="/categories" element={<Category />}></Route>
            <Route path="/baby-diaper-wipes" element={<BabyDiaper />} />
            <Route
              path="/new-born-essentials"
              element={<NewBornEssentials />}
            />
            <Route path="/baby-girl-dress" element={<BabyDressGirl />} />
            <Route path="/baby-boy-dress" element={<BabyDressBoy />} />
            <Route path="/women-dress" element={<WomenDress />} />
            <Route path="/men-clothing" element={<ManClothing />} />
            <Route path="/offer-items" element={<OfferItems />} />
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
