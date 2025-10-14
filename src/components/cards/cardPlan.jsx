import imagenHome from "../../assets/images/Home.svg";

function CardPlan({ data }) {
  return (
    <div className="CardPlan">
      <div className="CardPlan__size">
        <img src={imagenHome} alt="img-defense" />
        <p className="CardPlan__textHome">{data.name} </p>
        <p className="CardPlan__price">Costo del plan</p>
        <p className="CardPlan__textMedic">${data.price} al mes</p>

        <div className="separation"></div>

        <ul className="CardPlan__separation">
          {data.description.map((del,i) => (
            <li key={i}>{del}</li>
          ))}
        </ul>

            <button className="CardPlan__button">Seleccionar Plan</button>

      </div>
    </div>
  );
}

export default CardPlan;
