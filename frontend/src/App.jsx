import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Store from "./Store/Store.jsx";
import {  useState } from "react";
import { Outlet,  } from "react-router-dom";
function App() {
  
  const [show, setShow] = useState(false);
  return (
    <Store>
      <div className="app-container">
        <Sidebar show={show} setShow={setShow}></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet context={{ setShow}}/>
          <Footer></Footer>
        </div>
      </div>
    </Store>
  );
}

export default App;
