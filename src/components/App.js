import Header from "./Header";
import InfoTooltip from "./InfoTooltip";
import AppRouter from "./AppRouter";
import Sidebar from "./Sidebar";

function App() {

  return (
    <div className="page">
      <Sidebar/>
      <Header/>
      <AppRouter/>
      <InfoTooltip/>
    </div>
  );
}

export default App;
