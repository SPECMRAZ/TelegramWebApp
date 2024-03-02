import './App.css';

function App() {
  const TG = window.Telegram.WebApp
  // const { first_name } = TG.initDataUnsafe.user;

  TG.expand()
  return (
    <div className="App">

      <div className="text">
        <h3>Добро пожаловать!</h3>
        <h2>USERNAME</h2>
      </div>

      <p className="hint">
        Пожалуйста введите ваше имя, адрес электронной почты и пароль.
      </p>

      <form className="form">
        <div className="inp">
          <p className="inpText">Name</p>
          <input type="text" className='username' />
        </div>
        <div className="inp">
          <p className="inpText">Email</p>
          <input type="email" className='username' />
        </div>
        <div className="inp">
          <p className="inpText">Password</p>
          <input type="password" className='password' />
        </div>
        <label>
          <input type="checkbox" />
          <p className="hint">Соглашаюсь с <a href='https://ya.ru'>условиями</a> и быть хорошим мальчиком.</p>
        </label>

      </form>

    </div>
  );
}

export default App;
