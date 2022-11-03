import {createContext, useContext, useEffect, useState} from "react";
import {api} from "../utils/Api";
import {authorizeUser, checkUserToken, registerUser} from "../utils/authentication";
import {useNavigate} from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard
  const [isAuth, setIsAuth] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState({
    isOpenTooltip: false,
    type: '',
    message: ''
  });
  const [userInfo, setUserInfo] = useState({});
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const navigate = useNavigate();

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddProfileClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleDeleteCardClick = () => {
    setIsDeleteCardPopupOpen(true);
  }

  const handleClosePopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setIsInfoTooltipPopupOpen({isOpenTooltip: false, type: '', message: ''});
  }

  const handleDeleteCardSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    api.deleteCard(selectedCard.id)
      .then(card => {
        setCards(state => state.filter(delCard => delCard._id !== selectedCard.id));
        handleClosePopups();
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => setIsLoading(false));
  }

  const handleAddCardSubmit = (e, place, link) => {
    e.preventDefault();
    setIsLoading(true);
    api.postNewCard(place, link)
      .then(newCard => {
        setCards([newCard, ...cards]);
        handleClosePopups();
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => setIsLoading(false));
  }

  const handleEditAvatarSubmit = (e, avatar) => {
    e.preventDefault();
    setIsLoading(true);
    api.patchAvatar(avatar)
      .then(res => {
        setCurrentUser(res);
        handleClosePopups();
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => setIsLoading(false));
  }

  const handleEditProfileSubmit = (e, name, about) => {
    e.preventDefault();
    setIsLoading(true);

    api.patchProfile(name, about)
      .then(res => {
        setCurrentUser(res);
        handleClosePopups();
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => setIsLoading(false));
  }

  const handleRegisterSubmit = (e, email, password) => {
    e.preventDefault();
    setIsLoading(true);
    registerUser(email, password)
      .then(res => {
        if(res.data){
          setIsInfoTooltipPopupOpen({isOpenTooltip: true, type: 'success', message: "Вы успешно зарегистрировались!"})
          navigate('/sign-in');
        }
      })
      .catch(e => {
        console.log(e);
        setIsInfoTooltipPopupOpen({isOpenTooltip: true, type: 'fail', message: "Что-то пошло не так!\n" +
            "Попробуйте ещё раз."})
      })
      .finally(() => setIsLoading(false));
  }

  const handleLoginSubmit = (e, email, password) => {
    e.preventDefault();
    setIsLoading(true);
    authorizeUser(email, password)
      .then(res => {
        if(res.token){
          localStorage.setItem('token', res.token);
          setUserInfo({email});
          setIsAuth(true);
          navigate('/');
        }
      })
      .catch(e => {
        console.log(e);
        setIsInfoTooltipPopupOpen({isOpenTooltip: true, type: 'fail', message: "Что-то пошло не так!\n" +
            "Попробуйте ещё раз."})
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if(isAuth) {
      setIsLoading(true);
      api.getInitialAppState()
        .then(res => {
          const [userInfo, initCards] = res;
          setCurrentUser(userInfo);
          setCards(initCards);
        })
        .catch(e => {
          console.log(e);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isAuth]);

  useEffect(() => {
    const closePopupByEscape = (e) => {
      if(e.key === 'Escape') {
        handleClosePopups();
      }
    }

    const closePopupByOverlay = (e) => {
      if (e.target.classList.contains('pop-up_opened') || e.target.classList.contains('pop-up__close')) {
        handleClosePopups();
      }
    }

    if(isOpen) {
      document.addEventListener('keydown', closePopupByEscape);
      document.addEventListener('mousedown', closePopupByOverlay);
      return () => {
        document.removeEventListener('keydown', closePopupByEscape);
        document.removeEventListener('mousedown', closePopupByOverlay);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {
      checkUserToken(token)
        .then(res => {
          setUserInfo({email: res.data.email});
          setIsAuth(true);
          navigate('/');
        })
        .catch(e => console.log(e));
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        cards,
        setCards,
        selectedCard,
        isImagePopupOpen,
        setSelectedCard,
        setIsImagePopupOpen,
        isEditProfilePopupOpen,
        isAddPlacePopupOpen,
        isEditAvatarPopupOpen,
        isDeleteCardPopupOpen,
        setIsDeleteCardPopupOpen,
        handleEditAvatarClick,
        handleAddProfileClick,
        handleEditProfileClick,
        handleDeleteCardClick,
        handleClosePopups,
        isLoading,
        setIsLoading,
        handleDeleteCardSubmit,
        handleAddCardSubmit,
        handleEditAvatarSubmit,
        handleEditProfileSubmit,
        isAuth,
        setIsAuth,
        isInfoTooltipPopupOpen,
        setIsInfoTooltipPopupOpen,
        userInfo,
        setUserInfo,
        isOpenSidebar,
        setIsOpenSidebar,
        handleRegisterSubmit,
        handleLoginSubmit
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext);
}

export {AppProvider, AppContext}