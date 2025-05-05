import { useState } from "react";
import ContainCard from "./components/ContainCard.jsx";
import Nav from "./components/Nav.jsx";
import './index.css'

function App() {
  
  const [cities, setCities] = useState([]);

  const onSearch = (ciudad) => {

    const apiKey = import.meta.env.VITE_API_KEY_OPENWEATHER;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`)

      .then(r => r.json())
      .then((cityApi) => {
        if(cityApi.main !== undefined){

          setCities([...cities, cityApi]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
   

    
  }
  

  const quitar = (name) => {
    setCities(cities.filter(city => city.name !== name));
  };

  return (
    <div>
      <Nav onSearch = {onSearch} cities={cities}/>
      <ContainCard cities={cities} onClose={quitar}/>
    </div>
  );
}


export default App;
