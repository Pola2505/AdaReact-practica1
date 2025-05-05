import { useState } from "react";
import style from "./searchBar.module.css";

const SearchBar = ({ onSearch }) => {

  const [city, setCity] = useState('');
  
  
  return (
    <form className={style.searchContainer}>
      <input
        type="text"
        placeholder="Ingrese su ciudad..."
        onChange={(e) => { setCity(e.target.value) }}
        className={style.input}
        value={city}
      />
      <input type="submit" value="Agregar" className={style.button} onClick ={(e) => {
        e.preventDefault()
        onSearch(city)
        setCity('')
      }
       
      }/>
    </form>
  );
}

export default SearchBar;