import './App.css'
import Header from "./shared/Header/Header.jsx";
import {Outlet} from "react-router";
import Footer from "./shared/Footer/Footer.jsx";
import {OurAchievements} from "./shared/OurAchievements/OurAchievements.jsx";


//TODO разнеси на разные файлы scss.

function App() {

    return (
        <>
            <Header/>
            <Outlet/>
            <OurAchievements/>
            <Footer/>
        </>
    )
}

export default App
