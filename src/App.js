import './App.css';
import Game from './pages/Game';
import { AppProvider } from "./AppContext";


function App() {
  return (
    <AppProvider>
      <div className="App">
          <Game />
      </div>
    </AppProvider>
  );
}

export default App;
