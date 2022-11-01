import React from "react";
import PopupWithForm from "./PopupWithForm";
import {useAppContext} from "../context/AppContext";


const ConfirmDeleteCardPopup = () => {
  const { isDeleteCardPopupOpen, isLoading, handleDeleteCardSubmit } = useAppContext();

  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      isOpenPopup={isDeleteCardPopupOpen}
      submitText={isLoading ? "Удаление..." : "Да"}
      onSubmit={handleDeleteCardSubmit}
      isValidForm={true}
    />
  );
};

export default ConfirmDeleteCardPopup;