import React, {useEffect} from "react";
import PopupWithForm from "./PopupWithForm";
import {useAppContext} from "../context/AppContext";
import useFormValidation from "../hooks/useFormValidation";

const EditAvatarPopup = () => {
  const {isEditAvatarPopupOpen, isLoading, handleEditAvatarSubmit} = useAppContext();
  const {values, errors, isValid, handleChange, resetForm} = useFormValidation();

  useEffect(() => {
    resetForm();
  }, [isEditAvatarPopupOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpenPopup={isEditAvatarPopupOpen}
      submitText={isLoading ? "Сохрание..." : "Сохранить"}
      onSubmit={(e) => handleEditAvatarSubmit(e, values.avatar)}
      isValidForm={isValid}
    >
      <label className="form__label">
        <input
          value={values.avatar || ''}
          onChange={handleChange}
          type="url"
          className="input form__input form__input_type_avatar"
          name="avatar"
          required
          id="avatar"
          placeholder="Ссылка на картинку"/>
        <span className="form__error-message form__error-message_active avatar-error">{errors.avatar}</span>
      </label>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;