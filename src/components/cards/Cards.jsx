import { useState } from "react";
import imagenDefense from "../../assets/images/defense.svg";

function Cards({ dataForMy, title, text }) {
  const [check, setCheck] = useState(false);

  const changeValue = (e) => {
    setCheck(e.target.checked);
    dataForMy(e.target.checked);
  };

  return (
    <>
      <div className="Card">
        <img src={imagenDefense} alt="img-defense" />
        <label className="checkContainer" id="c2">
          <input checked={check} type="checkbox" onChange={changeValue} />
          <span className="check"></span>
        </label>

        <p className="CardTitle">{title}</p>
        <p className="CardText">{text}</p>
      </div>
    </>
  );
}

export default Cards;
