import Card from "./Card";
import style from "./containCard.module.css"

export default function ContainCard({ cities, onClose}) {
  
  return (

    <div className={style.cards}>
      { 
        cities.length > 0 ? cities.map((city) => 
        <Card 
        name={city.name}
        key={city.name}
        temp={city.main.temp}
        description={city.weather[0].description}
        feels_like={city.main.feels_like}
        humidity={city.main.humidity}
        clouds={city.clouds.all}
        img={city.weather[0].icon}
        onClose={onClose}
        />
      )
    : <h1 className={style.noExisten}>No existen ciudades</h1>
    } 
      
    </div>
  )

};
