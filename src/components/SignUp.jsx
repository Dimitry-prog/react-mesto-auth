import React from "react";

const SignUp = () => {
  return (
    <div className='signup'>
      <form className='form form__signup' name='form_signup' noValidate>
        <h2 className='form__title form__title_signup'>Регистрация</h2>
        <label className="form__label">
          <input
            // value={values.avatar || ''}
            // onChange={handleChange}
            type="email"
            className="input form__input form__input_type_email"
            name="email"
            required
            id="email"
            placeholder="Email"/>
          <span className="form__error-message form__error-message_active email-error">{}</span>
        </label>
        <label className="form__label">
          <input
            // value={values.avatar || ''}
            // onChange={handleChange}
            type="password"
            className="input form__input form__input_type_password"
            name="password"
            required
            id="password"
            placeholder="Пароль"/>
          <span className="form__error-message form__error-message_active password-error">{}</span>
        </label>
        <button type="submit" className='button button_type_submit button__signup'>Зарегистрироваться</button>
      </form>
      <a href="#" className='signup__link'>Уже зарегистрированы? Войти</a>
    </div>
  );
};

export default SignUp;