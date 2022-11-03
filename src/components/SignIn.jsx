import React from "react";
import useFormValidation from "../hooks/useFormValidation";
import {useAppContext} from "../context/AppContext";

const SignIn = () => {
  const {values, errors, isValid, handleChange} = useFormValidation();
  const {handleLoginSubmit, isLoading} = useAppContext();

  return (
    <div className='signin'>
      <form
        onSubmit={(e) => handleLoginSubmit(e, values.email, values.password)}
        className='form form__signin'
        name='form_signin'
        noValidate
      >
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
        <button
          disabled={!isValid}
          type="submit"
          className={`button button_type_submit button__signin ${!isValid ? "button_disabled " : ""}`}
        >
          {isLoading ? 'Выполняем вход...' : "Войти"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;