import React ,{useState} from 'react';
import '../css/style.css';
import rain from '../images/weather.gif';
import { WiDayFog } from "react-icons/wi";
import axios from 'axios';
const Tempapp = () => {
    const [city,setCity]=useState("");
    const[search ,setSearch]=useState({
        country:'',
        humidity:0,
        temp:0,
        temp_max:0,
        temp_min:0,

    }
    );

    const handleClick=()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c2eec3f0e22f2759fc28e6524f31aa5`)
        .then((response)=>{
            setSearch({
                country:response.data.sys.country,
                humidity:response.data.main.humidity,
                temp:response.data.main.temp,
                temp_max:response.data.main.temp_max,
                temp_min:response.data.main.temp_min,

            }
            )
        })
    }
    return (
        <>

            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-4  mx-auto">
                        <div className="card text-center" style={{backgroundImage:`url(${rain})` ,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>  
                            <input type="text"
                                placeholder='search'
                                onChange={(e) =>{ setCity(e.target.value)}} />
                             <button className="btn btn-primary m-auto mt-3" onClick={handleClick}>Get Temp</button>
                            <h3 className="mt-3"><WiDayFog size="5rem"/></h3>
                            <h3 className="mt-3">{search.country}</h3>
                            <h3 className="mt-3">{search.humidity}</h3>
                            <h3 className="mt-3">{search.temp}</h3>
                            <h3 className="mt-3">{search.temp_max}</h3>
                            <h3 className="mt-3">{search.temp_min}</h3>



                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Tempapp