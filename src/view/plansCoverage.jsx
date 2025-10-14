import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import imagenArrow from "../../src/assets/images/arrow.png";
import Cards from "../components/cards/Cards";
import CardPlan from "../components/cards/cardPlan";

function PlansCoverage() {
  const { state } = useLocation();
  const [value, setValue] = useState(1);
  const [dataMy, setDataMy] = useState(false);
  const [dataAny, setDataAny] = useState(false);

  const [dataPlan, setDataPlan] = useState();

  useEffect(() => {
    const publicar = async () => {
      let res = await fetch(
        "https://rimac-front-end-challenge.netlify.app/api/plans.json"
      );
      let data = await res.json();
      setDataPlan(data);
    };
    publicar();
  }, []);

  const dataForMy = (e) => {
    setDataMy(e);
  };

  const dataForAny = (e) => {
    setDataAny(e);
  };

  return (
    <>
      <div className="Plans">
        <div className="Plans__tap" onClick={() => setValue(1)}>
          <span className={value == 1 ? "Plans__tap--active" : "Plans__number"}>
            1
          </span>
          <p className={value == 1 ? "color" : "colorTwo"}>
            Planes y coberturas
          </p>
        </div>
        <span className="row">---</span>
        <div className="Plans__tap" onClick={() => setValue(2)}>
          <span className={value == 2 ? "Plans__tap--active" : "Plans__number"}>
            2
          </span>
          <p className={value == 2 ? "color" : "colorTwo"}>Resumen</p>
        </div>
      </div>

      {value == 1 ? (
        <div className="Plans__quote">
          <div className="Plans__quote--container">
            <div className="Plans__quote--img">
              <img src={imagenArrow} alt="img-arrow" />
            </div>
            <Link to="/">Volver</Link>
          </div>
          <div className="Plans__date">
            <p>
              {state.data.name} ¿Para quién deseas <br /> cotizar?
            </p>
            <span>
              Selecciona la opción que se ajuste más a tus necesidades.
            </span>
          </div>
          <div className="Card__container">
            <Cards
              dataForMy={dataForMy}
              title={"Para Mí"}
              text={
                "Cotiza tu seguro de salud y agrega familiares si así lo deseas."
              }
            />
            <Cards
              dataForMy={dataForAny}
              title={"Para alguien más"}
              text={
                "Realiza una cotización para uno de tus familiares o cualquier persona."
              }
            />
          </div>

          {dataMy == true && (
            <div className="CardPlan__container">
              {dataPlan.list.map((del, i) => (
                <CardPlan key={i} data={del} />
              ))}
            </div>
          )}
          {/* {dataAny == true && <h1>hola2</h1>} */}
        </div>
      ) : (
        <div className="Plans__quote">
          <div className="Plans__quote--container">
            <div className="Plans__quote--img">
              <img src={imagenArrow} alt="img-arrow" />
            </div>
            <Link to="/">Volver</Link>
          </div>

          <div>
            <p>Resumen del seguro</p>
          </div>
          <div className="Plans__card">
            <div>
              <p className="Plans__card--text">Precios calculados para:</p>
              <p className="Plans__card--textName">
                {state.data.name} {state.data.lastName}
              </p>
            </div>
            <hr />
            <div>
              <p className="Plans__card--textPay">Responsable de pago</p>
              <p className="Plans__card--date">DNI: {state.values.dni}</p>
              <p className="Plans__card--date">
                Celular: {state.values.celular}
              </p>

              <p className="Plans__card--textPay">Plan elegido</p>
              <p className="Plans__card--date">Plan en Casa y Clínica</p>
              <p className="Plans__card--date">Costo del Plan: $99 al mes</p>
            </div>
          </div>
        </div>
      )}

      <div></div>
    </>
  );
}

export default PlansCoverage;
