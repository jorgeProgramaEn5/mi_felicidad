import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Hero, ListCard, Texto, Footer } from "./Components";
import "./styles/App.css"
import { banner, card_data } from './Constant';
import { useState } from "react";
// import { socrates_500x450, pinker_500x450, haidt_500x450 } from './Assets';
// import Tarjeta from "./Components/Tarjeta";


function App() {

const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  // searchValue={searchValue}

  const targets = card_data.filter(data =>{
    return data.title.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <div className="app row">
      <div className="container-fuid">
        <div className="row">
          <div className="col"><Navbar handleSearchChange={handleSearchChange} /></div>
        </div>
        <div className="row fixed_navbar">
          <div className="col"><Hero banners={ banner }/></div>
        </div>
        <div className="row">
          <div className="col"><Texto /></div>
        </div>
        <div className="row d-flex">
          <div className="col-md-12"><ListCard targets={targets} /></div>
        </div>
        <div className="row">
          <div className="col-md-12"><Footer /></div>
        </div>
      </div>
    </div>
  );
}

export default App;