import "./App.css";
import Header from "./shared/Header/Header.jsx";
import { Outlet } from "react-router";
import Footer from "./shared/Footer/Footer.jsx";
import { Achievements } from "./shared/Achievements/Achievements.jsx";
import { Offers } from "./components/offers/Offers.jsx";
import { FeaturedProperties } from "./components/featuredProperties/FeaturedProperties.jsx";

//TODO разнеси на разные файлы scss.

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <main>
        <Achievements />
        <Offers />
        <FeaturedProperties />
      </main>
      <Footer />
    </>
  );
}

export default App;
