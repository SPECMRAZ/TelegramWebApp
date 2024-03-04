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

  TG.onEvent('mainButtonClicked', (event) => {
    let okay = false;
    for (let item in filled) {
      if (filled[item] === false) {
        // console.log(item + ':'  + filled[item]);
        let el = document.querySelector(`.${item}`)
        // console.log(el);

        if (el) {
          alert(`Заполните поле ${el.type}`)
        }
      } else {
        okay = true;
      }
    }

    if (okay) {
      TG.sendData(JSON.stringify(filled));
      TG.close();
    }
  });



  // function notFilled() {
  //   let okay = false;
  //   for (let item in filled) {
  //     if (filled[item] === false){
  //       // console.log(item + ':'  + filled[item]);
  //       let el = document.querySelector(`.${item}`)
  //       // console.log(el);

  //       if (el) {
  //         alert(`Заполните поле ${el.type}`)
  //       } 
  //     } else {
  //       okay = true;
  //     }
  //   }

  //   if (okay) {
  //     TG.sendData(JSON.stringify(filled));
  //     TG.close();
  //   }

  // }

  // TG.expand()
  return (
    <div className="App">

      <div className="text">
        <h3>Добро пожаловать!</h3>
        {/* {TG.initDataUnsafe.user.first_name && <h2>{TG.initDataUnsafe.user.first_name}</h2>} */}
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
              // console.log(event.target.value);
              // console.log(filled.name);
            }}
            required
          />
        </div>
        <div className="inp">
          <p className="inpText">Эл. Почта</p>
          <input type="email" className='email'
            onChange={event => {
              event.target.value.length > 15 ? filled.email = event.target.value : filled.email = false;
              // console.log(event.target.value);
              // console.log(filled.email);
            }}
          />
        </div>
        <div className="inp">
          <p className="inpText">Пароль</p>
          <input type="password" className='password'
            onChange={event => {
              event.target.value.length > 8 ? filled.password = event.target.value : filled.password = false;
              // console.log(event.target.value);
              // console.log(filled.password);
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
