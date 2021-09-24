import logo from './logo.svg';
import './App.css';
import {getAll,getCoin} from './Api';

function App() {
<<<<<<< HEAD:app/src/App.js
=======
  getAll();
  getCoin("exgold");
>>>>>>> af6d868 (Connexion à l'API):apicrypto/src/App.js
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
