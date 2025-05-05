import SearchBar from "./SearchBar";
import style from "./nav.module.css";

const Nav = ({onSearch, cities}) => {

    return <div className={style.nav}>
        <h2 className={style.title}>Weather Forecast</h2>
        <SearchBar onSearch={onSearch} cities={cities}/>
    </div>
}

export default Nav