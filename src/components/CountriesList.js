import { useCallback, useEffect, useState } from "react"
import {Link, NavLink} from "react-router-dom"


function CountriesList (props) {
    const [countries, setCountries] = useState([])
    
    useEffect(()=> {
        setCountries(props.countries);
        } , [props.countries]
    )

    return (
        <div className = "col-4 m-2">
            {countries.map(country => {
                return (
                    <div className="col-2" key={country.cca3}>
                        <NavLink to={`/${country.cca3}`} className={isActive=>"nav-link" + (!isActive ? " unselected" : "h1")}>{country.name.common}</NavLink>
                    </div>
                    )
            })}
        </div>
    )

}

export default CountriesList