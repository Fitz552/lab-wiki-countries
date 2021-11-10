import { useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom'
function CountryDetails(props) {
    const {cca3} = useParams();
    const [country, setCountry] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(()=> { 
        let currentCountry = props.countries.filter(country=>{return cca3 === country.cca3})
        setCountry(currentCountry)
        setLoaded(true)
    }, [cca3])

    function searchName(cc3) {
        let currentCountry = props.countries.filter(country=>{return cc3 === country.cca3})
        return currentCountry[0].name.official
    }

    return(
        
        <div className = "col">
            {loaded &&
                <div>
                <p className = "h1">
                    {country[0].name.official}
                </p>
                <div className="row">
                    <div className="col">
                        <p>Capital</p>
                    </div>
                    <div className="col">
                        <p>{country[0].capital}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Area</p>
                    </div>
                    <div className="col">
                        <p>{country[0].area} KM²</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Borders</p>
                    </div>
                    <ul className="col">
                        {country[0].borders.map(border => {
                            return(
                                <li key={border}>
                                    <Link to={`/${border}`}>{searchName(border)}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        }
        </div>
    )
}

export default CountryDetails