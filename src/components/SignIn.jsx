import React from "react";
import useFormValidation from "../hooks/useFormValidation";
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../context/AppContext";
import {authorizeUser} from "../utils/authentication";

const SignIn = () => {
  const {values, errors, isValid, handleChange} = useFormValidation();
  const navigate = useNavigate();
  const {setIsAuth, setIsInfoTooltipPopupOpen, userInfo} = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    authorizeUser(values.email, values.password)
      .then(res => {
        if(res.token){
          localStorage.setItem('token', res.token);
          setIsAuth(true);
          navigate('/');
        }
      })
      .catch(e => {
        console.log(e);
        setIsInfoTooltipPopupOpen({isOpenTooltip: true, type: 'fail', message: "Что-то пошло не так!\n" +
            "Попробуйте ещё раз."})
      })
  }

  return (
    <div className='signin'>
      <form onSubmit={handleSubmit} className='form form__signin' name='form_signin' noValidate>
        <h2 className='form__title form__title_signin'>Вход</h2>
        <label className="form__label">
          <input
            value={values.email || ''}
            onChange={handleChange}
            type="email"
            className="input form__input form__input_type_email"
            name="email"
            required
            id="email"
            placeholder="Email"/>
          <span className="form__error-message form__error-message_active email-error">{errors.email}</span>
        </label>
        <label className="form__label">
          <input
            value={values.password || ''}
            onChange={handleChange}
            type="password"
            className="input form__input form__input_type_password"
            name="password"
            required
            id="password"
            placeholder="Пароль"/>
          <span className="form__error-message form__error-message_active password-error">{errors.password}</span>
        </label>
        <button disabled={!isValid} type="submit" className={`button button_type_submit button__signin ${!isValid ? "button_disabled " : ""}`}>Войти</button>
      </form>
    </div>
  );
};

export default SignIn;