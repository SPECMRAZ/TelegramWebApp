import './App.css';

function App() {
  const TG = window.Telegram.WebApp
  const { first_name } = TG.initDataUnsafe.user;

  TG.expand()
  return (
    <div className="App">
      <h1>Hello world, {first_name ? first_name : 'User'}!</h1>
      <p>Helloo</p>
    </div>
  );
}

export default App;
