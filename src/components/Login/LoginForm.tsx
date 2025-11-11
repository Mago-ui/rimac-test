import { useForm } from "react-hook-form";
// import imagenBlurTwo from "../../assets/images/blur-asset_2.png";
import { useNavigate } from "react-router-dom";
import { environment } from "../../environments/environment";
import { PATH } from '../../constants';

interface FormValues {
  dni: string;
  celular: string;
  toggleOne: boolean;
  toggleTwo: boolean;
  color: string;
}

function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      dni: "",
      celular: "",
      toggleOne: true,
      toggleTwo: true,
      color: "red",
    },
  });

  const publicar = async (values: FormValues) => {
    let res = await fetch(
      `${environment.apiUrl}${PATH.GET_USER}`
    );
    let data = await res.json();

    navigate("/plans-coverage", { state: { data, values } });
  };

  return (
    <>
      <form onSubmit={handleSubmit(publicar)}>
        {/* <img
          src={imagenBlurTwo}
          className="Login__banner-imgBlurTwo"
          alt="img-borde"
        /> */}

        <div className="loginForm">
          <span className="loginForm-seguro">Seguro Salud Flexible</span>
          <p className="loginForm-titulo">Creado para ti y tu familia</p>
          <p className="loginForm-text">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría, 100% online.
          </p>

          <div className="loginForm__section">
            <div className="loginForm__section-select">
              <select
                {...register("color")}
                className="loginForm__section__select"
              >
                <option value="red">DNI</option>
                <option value="green">CARNET</option>
              </select>

              <input
                type="number"
                placeholder="Nro. de Documento"
                {...register("dni", { required: "Ingrese un Número de DNI" })}
              />
              {errors.dni && <div className="colorError">{errors.dni.message}</div>}
            </div>

            <input
              type="number"
              placeholder="Celular"
              {...register("celular", { required: "Ingrese un Número de Celular" })}
            />
            {errors.celular && (
              <div className="colorError">{errors.celular.message}</div>
            )}

            <label className="container" id="c3">
              <input type="checkbox" {...register("toggleOne", { required: "Debe marcar la casilla" })} />
              <span className="checkmark"></span>
              <span className="loginForm__data">
                Acepto la Política de Privacidad
              </span>
            </label>
            {errors.toggleOne && (
              <div className="colorError">{errors.toggleOne.message}</div>
            )}

            <label className="container" id="c3">
              <input type="checkbox" {...register("toggleTwo", { required: "Debe marcar la casilla" })} />
              <span className="checkmark"></span>
              <span className="loginForm__data">
                Acepto la Política Comunicaciones Comerciales
              </span>
            </label>
            {errors.toggleTwo && (
              <div className="colorError">{errors.toggleTwo.message}</div>
            )}

            <button className="loginForm__cotizar" type="submit">
              Cotiza aquí
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
