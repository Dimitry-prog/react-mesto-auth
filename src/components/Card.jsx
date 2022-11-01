import React from "react";
import deleteIcon from "../images/delete.svg";
import {useAppContext} from "../context/AppContext";
import {api} from "../utils/Api";

const Card = ({link, name, likes, owner, _id}) => {
  const {currentUser, selectedCard, setSelectedCard, setIsImagePopupOpen, setCards, handleDeleteCardClick} = useAppContext();
  const isMyCard = owner._id === currentUser._id;
  const isMeLikeCard = likes.some(me => me._id === currentUser._id);

   const handleImgClick = () => {
    setSelectedCard({
      src: link,
      alt: name
    });
    setIsImagePopupOpen(true);
  }

  const handleDeleteIconClick = () => {
    setSelectedCard({...selectedCard, id: _id});
    handleDeleteCardClick();
  }

  const handleToggleLikeClick = () => {
    api.toggleLikeCard(_id, !isMeLikeCard)
      .then(card => {
        setCards(state => state.map(oldCard => oldCard._id === _id ? card : oldCard));
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
      <li className="elements__item" >
        <div className="card">
          <img src={link} alt={name} className="card__img" onClick={handleImgClick}/>
          {isMyCard && <img onClick={handleDeleteIconClick} src={deleteIcon} alt="удалить" className="card__delete"/>}
          <div className="card__footer">
            <h2 className="card__title">{name}</h2>
            <div className="card__stats">
              <button
                onClick={handleToggleLikeClick}
                className={`button button_type_like card__like ${isMeLikeCard ? 'card__like_active' : ""}`}
                type="button"
                aria-label="CardLike"
              >
              </button>
              <p className="card__quantity">{likes.length}</p>
            </div>
          </div>
        </div>
      </li>
  );
};

export default Card;