import React from "react";
import {useAppContext} from "../context/AppContext";

const ImagePopup = () => {
  const {selectedCard, isImagePopupOpen, handleClosePopups} = useAppContext();

  return (
    <div className={isImagePopupOpen ? `pop-up pop-up_img pop-up_opened` : `pop-up pop-up_img`}>
      <div className="pop-up__overlay pop-up__overlay_type_img">
        <button
          onClick={handleClosePopups}
          className="button button_type_close-img pop-up__close" type="button" aria-label="ClosePopUp"
        >
        </button>
        <figure className="pop-up__fiqure">
          <img src={selectedCard.src} className="pop-up__picture" alt={selectedCard.alt}/>
          <figcaption className="pop-up__text">{selectedCard.alt}</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ImagePopup;