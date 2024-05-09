// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoSW from './components/logo';
import NavbarSw  from './components/navbar';
import Character from './views/character';
import CharacterDetail from './views/characterDetail';
import Films from './views/films';
import Episode from './views/fimlsEpisode';
import Starships from './views/starships';
import Welcome from './views/welcome';



function App() {
  return (
    <div className="App fondo">
     <LogoSW/>
     <NavbarSw/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Welcome />} />
          <Route exact path='/characters/' element={<Character />} />
          <Route exact path="/films/" element={<Films />} />
          <Route exact path="/starships/" element={<Starships />} />
          <Route exact path="/characters/:id" element={<CharacterDetail />} />
          <Route exact path="/films/:episode_id" element={<Episode />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
