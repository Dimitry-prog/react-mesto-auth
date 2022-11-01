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

function App() {

  return (
    <div className="page">
      <Header/>
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
