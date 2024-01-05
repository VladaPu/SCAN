import React, { useEffect, useState } from "react";
import Inputs from "../Inputs";
import "./Form.css";
import FormFooter from "../FormFooter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dropStatus, signIn } from "../../../store/slices/profile";

const Form = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signInStatus = useSelector((state) => state.profile.status);

  useEffect(() => {
    if (signInStatus === "done") {
      navigate("/");
      dispatch(dropStatus());
    }
    if (signInStatus === "error") {
      setError(true);
    }
  }, [signInStatus, navigate, dispatch]);

  const handleSubmit = async () => {
    dispatch(signIn({ login, password }));
  };

  const submitDisable = !(login && password);

  return (
    <div className="form__container">
      <div className="form__linkBox">
        <a className="form__link" href="xxx">
          Войти
        </a>
        <a className="form__link form__link_inactive" href="xxx">
          Зарегистрироваться
        </a>
      </div>
      <Inputs
        login={login}
        password={password}
        setLogin={setLogin}
        setPassword={setPassword}
        error={error}
      />
      <button
        className="form__button"
        onClick={handleSubmit}
        disabled={submitDisable}
        style={{ opacity: submitDisable ? "50%" : "100%" }}
      >
        Войти
      </button>
      <a className="form__ResumeLink" href="xxx">
        Восстановить пароль
      </a>
      <FormFooter />
    </div>
  );
};

export default Form;
