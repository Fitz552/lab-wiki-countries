import NavBar from "./components/Navbar";
import countries from "./countries.json"
import CountriesList from "./components/CountriesList";
import { Routes, Route } from "react-router-dom"
import CountryDetails from "./components/CountryDetails";
import {useState} from "react"


function App() {


  return (
    <div className="App">
      <NavBar/>
      <div className = "container">
        <div className="row">
          <CountriesList countries={countries}/>
          <Routes>
            <Route exact path = "/:cca3" element={<CountryDetails countries={countries}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
