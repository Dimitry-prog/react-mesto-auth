import Header from "./Header";
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

    </div>
  );
}

export default App;
