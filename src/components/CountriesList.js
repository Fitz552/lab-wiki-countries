import { useEffect, useState } from "react"
import {NavLink} from "react-router-dom"


function CountriesList (props) {
    const [countries, setCountries] = useState([])
    
    useEffect(()=> {
        setCountries(props.countries);
        } , [props.countries]
    )

    return (
        <ul className = "col-3 m-2 list-group overflow-auto" style={{maxHeight: "500px", overflow: "scroll"}}>
            {countries.map(country => {
                return (
                    <li className="list-group-item list-group-item-action" key={country.cca3}>
                        <NavLink end to={`/${country.cca3}`} className="nav-link text-secondary" activeClassName="nav-link text-white bg-info">{country.name.common}</NavLink>
                    </li>

                )
            })}
        </ul>
    )

}

export default CountriesList