import perro from './pug.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={perro} className="App-logo" alt="logo" />
        <p>
          hola mundo cruel 
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ve a google
        </a>
      </header>
    </div>
  );
}

export default App;
