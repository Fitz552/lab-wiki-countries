import NavBar from "./components/Navbar";
//import countries from "./countries.json"
import CountriesList from "./components/CountriesList";
import { Switch, Route } from "react-router-dom"
import CountryDetails from "./components/CountryDetails";
import {useState, useEffect} from "react"
import axios from "axios"


function App() {

  const [countries, setCountries] = useState([]);
  const [loaded, setLoaded] = useState(false)

  useEffect(() => axios.get("https://restcountries.com/v3.1/all").then(response =>
    setCountries(response.data)
  ).then(setLoaded(true)), [])

  return (
    <div className="App">
    { loaded &&
      <div>
        <NavBar/>
        <div className = "container">
          <div className="row">
            <CountriesList countries={countries}/>
            <Switch>
              <Route exact strict path = "/:cca3" render = {(routeProps) => {return <CountryDetails countries={countries}/>}}/>
            </Switch>
          </div>
        </div>
      </div>
    
    }
    </div>
  );
}

export default App;
