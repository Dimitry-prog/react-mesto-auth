import React, {useEffect} from "react";
import PopupWithForm from "./PopupWithForm";
import {useAppContext} from "../context/AppContext";
import useFormValidation from "../hooks/useFormValidation";

const AddCardPopup = () => {
  const {isAddPlacePopupOpen, isLoading, handleAddCardSubmit} = useAppContext();
  const {values, errors, isValid, handleChange, resetForm} = useFormValidation();

  useEffect(() => {
    resetForm();
  }, [isAddPlacePopupOpen]);

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      isOpenPopup={isAddPlacePopupOpen}
      submitText={isLoading ? "Сохрание..." : "Создать"}
      onSubmit={(e) => handleAddCardSubmit(e, values.place, values.link)}
      isValidForm={isValid}
    >
      <label className="form__label">
        <input
          value={values.place || ''}
          onChange={handleChange}
          type="text"
          className="input form__input form__input_type_place"
          name="place"
          placeholder="Название"
          required
          id="place"
          minLength="2"
          maxLength="30"/>
        <span className="form__error-message form__error-message_active place-error">{errors.place}</span>
      </label>
      <label className="form__label">
        <input
          value={values.link || ''}
          onChange={handleChange}
          type="url"
          className="input form__input form__input_type_link"
          name="link"
          placeholder="Ссылка на картинку"
          required
          id="link"/>
        <span className="form__error-message form__error-message_active link-error">{errors.link}</span>
      </label>
    </PopupWithForm>
  );
};

export default AddCardPopup;