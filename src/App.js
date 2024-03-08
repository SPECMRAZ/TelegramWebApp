import './App.css';

function App() {
  const TG = window.Telegram.WebApp;
  TG.MainButton.text = "Готово✨";
  TG.MainButton.show();
  const filled = {
    name: false,
    email: false,
    password: false,
    checkbox: false,
  }

  TG.onEvent('mainButtonClicked', () => {
    let okay = false;
    for (let item in filled) {
      if (filled[item] === false) {
  
        let el = document.querySelector(`.${item}`)

        if (el) {
          alert(`Заполните поле ${el.type}`)
        } else {
          okay = true;
        }
      }
    }

    if (okay) {
      TG.sendData(JSON.stringify(filled));
      TG.close();
    }
  });

  return (
    <div className="App">

      <div className="text">
        <h3>Добро пожаловать!</h3>
        {TG.initDataUnsafe.user.first_name && <h2>{TG.initDataUnsafe.user.first_name}</h2>}
      </div>

      <p className="hint">
        Пожалуйста введите ваше имя, адрес электронной почты и пароль.
      </p>

      <form className="form">
        <div className="inp">
          <p className="inpText">Имя</p>
          <input type="text" className='name'
            onChange={event => {
              event.target.value.length > 3 ? filled.name = event.target.value : filled.name = false;
            }}
            required
          />
        </div>
        <div className="inp">
          <p className="inpText">Эл. Почта</p>
          <input type="email" className='email'
            onChange={event => {
              event.target.value.length > 15 ? filled.email = event.target.value : filled.email = false;
            }}
          />
        </div>
        <div className="inp">
          <p className="inpText">Пароль</p>
          <input type="password" className='password'
            onChange={event => {
              event.target.value.length > 8 ? filled.password = event.target.value : filled.password = false;
            }}
          />
        </div>
        <label>
          <input type="checkbox"
            className="checkbox"
            onChange={() => filled.checkbox = !filled.checkbox}
          />
          <p className="hint">Соглашаюсь с <a href='https://ya.ru'>условиями</a> и быть хорошим мальчиком.😊</p>
        </label>

      </form>
    </div>
  );
}

export default App;
