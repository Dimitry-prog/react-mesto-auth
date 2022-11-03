import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddCardPopup from "./AddCardPopup";
import ConfirmDeleteCardPopup from "./ConfirmDeleteCardPopup";

const MainLayout = () => {
  return (
    <>
      <Main/>
      <Footer/>

      <ImagePopup/>
      <EditAvatarPopup/>
      <EditProfilePopup/>
      <AddCardPopup />
      <ConfirmDeleteCardPopup/>
    </>
  );
};

export default MainLayout;