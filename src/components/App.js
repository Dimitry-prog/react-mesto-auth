import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddCardPopup from "./AddCardPopup";
import ConfirmDeleteCardPopup from "./ConfirmDeleteCardPopup";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import InfoTooltip from "./InfoTooltip";

function App() {

  return (
    <div className="page">
      <Header/>
      <InfoTooltip/>
      <SignIn/>
      <SignUp/>
      <Main/>
      <Footer/>

      <ImagePopup/>
      <EditAvatarPopup/>
      <EditProfilePopup/>
      <AddCardPopup />
      <ConfirmDeleteCardPopup/>
    </div>
  );
}

export default App;
