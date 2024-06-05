import logo from "./logo.svg";
import "./App.css";
import Usuarios from "./Usuarios";
import Pokemon from "./Pokemon";
import PabloPokemon from "./PabloPokemon";

function App() {
  return (
    <div className="App">
      <PabloPokemon />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Usuarios />
      <Pokemon />
    </div>
  );
}

export default App;
