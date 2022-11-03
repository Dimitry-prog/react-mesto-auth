import React from "react";
import useFormValidation from "../hooks/useFormValidation";
import { registerUser} from "../utils/authentication";
import {Link, useNavigate} from "react-router-dom";
import {useAppContext} from "../context/AppContext";

const SignUp = () => {
  const {values, errors, isValid, handleChange} = useFormValidation();
  const navigate = useNavigate();
  const {setIsInfoTooltipPopupOpen, setUserInfo} = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    registerUser(values.email, values.password)
      .then(res => {
        if(res.data){
          setUserInfo({email: res.data.email})
          setIsInfoTooltipPopupOpen({isOpenTooltip: true, type: 'success', message: "Вы успешно зарегистрировались!"})
          navigate('/sign-in');
        }
      })
      .catch(e => {
        console.log(e);
        setIsInfoTooltipPopupOpen({isOpenTooltip: true, type: 'fail', message: "Что-то пошло не так!\n" +
            "Попробуйте ещё раз."})
      })

  }

  return (
    <div className='signup'>
      <form onSubmit={handleSubmit} className='form form__signup' name='form_signup' noValidate>
        <h2 className='form__title form__title_signup'>Регистрация</h2>
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
            minLength='3'
            id="password"
            placeholder="Пароль"/>
          <span className="form__error-message form__error-message_active password-error">{errors.password}</span>
        </label>
        <button disabled={!isValid} type="submit" className={`button button_type_submit button__signup ${!isValid ? "button_disabled " : ""}`}>Зарегистрироваться</button>
      </form>
      <Link to='/sign-in' className='signup__link'>Уже зарегистрированы? Войти</Link>
    </div>
  );
};

export default SignUp;