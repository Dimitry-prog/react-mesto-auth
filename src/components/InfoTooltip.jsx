import React from "react";
import success from '../images/succsessSign.svg';
import wrong from '../images/wrongSign.svg';
import {useAppContext} from "../context/AppContext";

const InfoTooltip = () => {
  const {handleClosePopups} = useAppContext();
  const isOpenPopup = false
  const name = 'success'
  return (
    <div className={isOpenPopup ? `pop-up pop-up_${name} pop-up_opened` : `pop-up pop-up_${name}`}>
      <div className="pop-up__overlay">
        <button
          onClick={handleClosePopups}
          className={`button button_type_close-profile pop-up__close`} type="button" aria-label="ClosePopUp"
        >
        </button>
        <div className='pop-up__content'>
          <img src={success} alt='Успех' className='pop-up__img'/>
          <h3 className='pop-up__title'>Вы успешно зарегистрировались!</h3>
        </div>
      </div>
    </div>
  );
};

export default InfoTooltip;