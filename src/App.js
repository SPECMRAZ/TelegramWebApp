import './App.css';

function App() {
  const TG = window.Telegram.WebApp
  return (
    <div className="App">
      <h1>Hello world, beaches!
      git remote add origin https://github.com/SPECMRAZ/TelegramWebApp.git
git branch -M main
git push -u origin main
      </h1>
      {TG === true ? <p>TG!</p> : <p>No TG!</p>}
    </div>
  );
}

export default App;
