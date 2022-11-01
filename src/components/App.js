import Header from "./Header";
import InfoTooltip from "./InfoTooltip";
import AppRouter from "./AppRouter";

function App() {

  return (
    <div className="page">
      <Header/>
      <AppRouter/>
      <InfoTooltip/>
    </div>
  );
}

export default App;
