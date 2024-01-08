import './App.css'
import Header from "./screens/Header/Header.jsx";
import {Outlet} from "react-router";
import Footer from "./screens/Footer/Footer.jsx";


function App() {

    return (
        <>
          <Header/>
          <Outlet>

          </Outlet>
          <Footer/>
        </>
    )
}

export default App
