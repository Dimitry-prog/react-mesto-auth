import React from "react";
import Card from "./Card";
import {useAppContext} from "../context/AppContext";
import Loader from "./Loader";

const Main = () => {
  const {currentUser, cards, handleEditAvatarClick, handleEditProfileClick, handleAddProfileClick} = useAppContext();

  if (Object.keys(currentUser).length === 0 || !cards.length) {
    return <Loader/>
  }

  return (
    <main className="main page__main">
      <div className="content">
        <section className="profile main__profile">
          <div className="profile__avatar">
            <img src={currentUser.avatar} alt="avatar" className="profile__img"/>
              <button
                onClick={handleEditAvatarClick}
                className="button  button_type_avatar" type="button" aria-label="editAvatar"
              >
              </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              onClick={handleEditProfileClick}
              className="button profile__edit button_type_edit" type="button" aria-label="EditProfile"
            >
            </button>
            <p className="profile__activity">{currentUser.about}</p>
          </div>
          <button
            onClick={handleAddProfileClick}
            className="button button_type_add profile__add" type="button" aria-label="AddNewCard"
          >
          </button>
        </section>
        <section className="elements main__elements">
          <ul className="elements__list">
            {cards.map(card => (
              <Card
                {...card}
                key={card._id}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Main;