import React from "react";
import {useAppContext} from "../context/AppContext";

const PopupWithForm = ({
  name,
  title,
  isOpenPopup,
  submitText,
  onSubmit,
  isValidForm,
  children
}) => {
  const {handleClosePopups} = useAppContext();

  return (
    <div className={isOpenPopup ? `pop-up pop-up_${name} pop-up_opened` : `pop-up pop-up_${name}`}>
      <div className="pop-up__overlay">
        <button
          onClick={handleClosePopups}
          className={`button button_type_close-profile pop-up__close`} type="button" aria-label="ClosePopUp"
        >
        </button>
        <form onSubmit={onSubmit} className={`form form_type_${name} pop-up__form`} name={`pop-up-form-${name}`} noValidate>
          <h3 className="form__title">{title}</h3>
          {children}
          <button type="submit" disabled={!isValidForm} className={`button button_type_submit ${!isValidForm ? "button_disabled " : ""}`}>{submitText}</button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;