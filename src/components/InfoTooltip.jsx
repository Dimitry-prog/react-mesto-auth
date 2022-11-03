import React from "react";
import success from '../images/succsessSign.svg';
import wrong from '../images/wrongSign.svg';
import {useAppContext} from "../context/AppContext";

const InfoTooltip = () => {
  const {handleClosePopups, isInfoTooltipPopupOpen} = useAppContext();

  return (
    <div className={isInfoTooltipPopupOpen.isOpenTooltip ? `pop-up pop-up_opened` : `pop-up`}>
      <div className="pop-up__overlay">
        <button
          onClick={handleClosePopups}
          className={`button button_type_close-profile pop-up__close`} type="button" aria-label="ClosePopUp"
        >
        </button>
        <div className='pop-up__content'>
          <img src={isInfoTooltipPopupOpen.type === 'success' ? success : wrong} alt={isInfoTooltipPopupOpen.type} className='pop-up__img'/>
          <h3 className='pop-up__title'>{isInfoTooltipPopupOpen.message}</h3>
        </div>
      </div>
    </div>
  );
};

export default InfoTooltip;