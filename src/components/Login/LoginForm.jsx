import { Formik, Form, Field, ErrorMessage } from "formik";
import imagenBlurTwo from "../../assets/images/blur-asset_2.png";
import { Route, useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const publicar = async (values) => {
    let res = await fetch(
      "https://rimac-front-end-challenge.netlify.app/api/user.json"
    );
    let data = await res.json();

    navigate("/plans-coverage",{ state: {data: data, values:values} });
  };

  const validar = (values) => {
    const errors = {};

    if (values.dni == "") errors.dni = "Ingrese un Número de DNI";
    if (values.celular == "") errors.celular = "Ingrese un Número de Celular";
    if (values.toggleOne == false) errors.toggleOne = "Debe marcar la casilla";
    if (values.toggleTwo == false) errors.toggleTwo = "Debe marcar la casilla";

    return errors;
  };

  return (
    <>
      <Formik
        initialValues={{
          dni: "",
          celular: "",
          toggleOne: true,
          toggleTwo: true,
        }}
        onSubmit={publicar}
        validate={validar}
      >
        <Form>
          <img
            src={imagenBlurTwo}
            className="Login__banner-imgBlurTwo"
            alt="img-borde"
          />

          <div className="loginForm">
            <span className="loginForm-seguro">Seguro Salud Flexible</span>
            <p className="loginForm-titulo">Creado para ti y tu familia</p>
            <p className="loginForm-text">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría, 100% online.
            </p>

            <div></div>
            <div className="loginForm__section">
              <div className="loginForm__section-select">
                <Field
                  as="select"
                  name="color"
                  className="loginForm__section__select"
                >
                  <option value="red">DNI</option>
                  <option value="green">CARNET</option>
                </Field>
                <Field
                  name="dni"
                  type="number"
                  placeholder="Nro. de Documento"
                />
              </div>
              <ErrorMessage name="dni" component="div" className="colorError" />

              <Field name="celular" type="number" placeholder="Celular" />
              <ErrorMessage
                name="celular"
                component="div"
                className="colorError"
              />

              <label className="container" id="c3">
                <Field type="checkbox" name="toggleOne" />
                <span className="checkmark"></span>

                <span className="loginForm__data">
                  Acepto la Política de Privacidad
                </span>
              </label>
              <ErrorMessage
                name="toggleOne"
                component="div"
                className="colorError"
              />
              <label className="container" id="c3">
                <Field type="checkbox" name="toggleTwo" />
                <span className="checkmark"></span>
                <span className="loginForm__data">
                  Acepto la Política Comunicaciones Comerciales
                </span>
              </label>
              <ErrorMessage
                name="toggleTwo"
                component="div"
                className="colorError"
              />
              <button className="loginForm__cotizar" type="submit">
                Cotiza aquí
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default LoginForm;
