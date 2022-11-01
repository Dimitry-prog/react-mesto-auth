import React, {useEffect} from "react";
import PopupWithForm from "./PopupWithForm";
import {useAppContext} from "../context/AppContext";
import useFormValidation from "../hooks/useFormValidation";

const EditProfilePopup = () => {
  const {currentUser,isEditProfilePopupOpen, isLoading, handleEditProfileSubmit} = useAppContext();
  const {values, errors, isValid, setValues, setIsValid, handleChange} = useFormValidation();

  useEffect(() => {
    setIsValid(true);
    setValues({
      name: currentUser.name,
      about: currentUser.about
    })
  }, [currentUser, isEditProfilePopupOpen]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpenPopup={isEditProfilePopupOpen}
      submitText={isLoading ? "Сохрание..." : "Сохранить"}
      onSubmit={(e) => handleEditProfileSubmit(e, values.name, values.about)}
      isValidForm={isValid}
    >
      <label className="form__label">
        <input
          value={values.name || ''}
          onChange={handleChange}
          type="text"
          className="input form__input form__input_type_name"
          name="name"
          required
          id="name"
          placeholder="Enter name"/>
         <span className="form__error-message form__error-message_active name-error">{errors.name}</span>
      </label>
      <label className="form__label">
        <input
          value={values.about || ''}
          onChange={handleChange}
          type="text"
          className="input form__input form__input_type_activity"
          name="about"
          required
          id="about"
          placeholder="Enter activity"
          minLength="2"
          maxLength="200"/>
        <span className="form__error-message form__error-message_active about-error">{errors.about}</span>
      </label>
    </PopupWithForm>
  );
};

export default EditProfilePopup;