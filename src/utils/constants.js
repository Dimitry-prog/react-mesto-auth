export const validationConfig = {
  inputSelector: '.form__input',
  submitButtonSelector: '.button_type_submit',
  submitButtonDisabledClass: 'button_disabled',
  formErrorMessageSelector: '.form__error-message',
  formErrorClass: 'form__error-message_active',
  inputErrorClass: 'input_error',
};

export const pageElement = document.querySelector('.page');
export const popUpImg = document.querySelector('.pop-up_img');
export const popUpPicture = popUpImg.querySelector('.pop-up__picture');
export const popUpText = popUpImg.querySelector('.pop-up__text');
export const popUpProfile = document.querySelector('.pop-up_profile');
export const popUpProfileForm = popUpProfile.querySelector('.form_type_profile');
export const popUpCard = document.querySelector('.pop-up_card');
export const popUpCardForm = popUpCard.querySelector('.form_type_card');
export const elementsList = document.querySelector('.elements__list');
export const profileName = document.querySelector('.profile__name');
export const profileActivity = document.querySelector('.profile__activity');
export const profileEditButton = document.querySelector('.profile__edit');
export const nameInput = popUpProfileForm.querySelector('.form__input_type_name');
export const activityInput = popUpProfileForm.querySelector('.form__input_type_activity');
export const cardAddButton = document.querySelector('.profile__add');
export const allPopUps = document.querySelectorAll('.pop-up');

export const initialProfileInputsValue = {
  name: profileName,
  about: profileActivity,
  id: '',
}

export const popUpAvatar = document.querySelector('.pop-up_avatar');
export const popUpAvatarForm = popUpAvatar.querySelector('.form_type_avatar');
export const avatarEditButton = document.querySelector('.button_type_avatar');
export const profileImg = document.querySelector('.profile__img');
export const popUpDelete = document.querySelector('.pop-up_delete');
export const popUpDeleteForm = popUpDelete.querySelector('.form_type_delete');
export const cardQuantityLikes = document.querySelector('.card__quantity');

export const mainContent = document.querySelector('.content');
export const loaderContent = document.querySelector('.loader__content');
