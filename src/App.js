import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Hero, ListCard, Texto } from "./Components";
import "./styles/App.css"
import { banner, } from './Constant';
// import { socrates_500x450, pinker_500x450, haidt_500x450 } from './Assets';
// import Tarjeta from "./Components/Tarjeta";


function App() {
  return (
    <div className="app row">
      <div className="container-fuid">
        <div className="row">
          <div className="col"><Navbar /></div>
        </div>
        <div className="row">
          <div className="col"><Hero banners={ banner }/></div>
        </div>
        <div className="row">
          <div className="col"><Texto /></div>
        </div>
        <div className="row d-flex">
          <div className="col-md-12"><ListCard /></div>
        </div>
      </div>
    </div>
  );
}

export default App;