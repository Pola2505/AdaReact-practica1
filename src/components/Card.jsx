import style from "./card.module.css"

export default function Card({name, temp, description, feels_like, humidity, clouds, img, onClose }) {

  const weather = temp > 15 ? style.sunny : style.cold;

  return <div className={`${style.cardContainer} ${weather}`}>
    <h2 className={style.title}>{name || 'Inexistente'}</h2>
    <button onClick={() => onClose(name)} className={style.button}>X</button>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`}></img>
    <p className={style.details}> <span className={style.temp}>{temp ? `${temp}°C` : 'No hay temperatura'}</span></p>
    <p className={style.details}> <span className={style.props}>{description || 'No hay descripcion'}</span></p>
    <p className={style.details}>ST <span className={style.props}>{feels_like ? `${feels_like}°` : 'No hay sensacion'}</span></p>
    <p className={style.details}>Humedad  <span className={style.props}>{ humidity ? `${humidity}%` : 'inexistente'}</span></p>
    <p className={style.details}>Nubes <span className={style.props}>{clouds ? `${clouds}%` : 'inexistente'}</span></p>
  
  </div>;
}
