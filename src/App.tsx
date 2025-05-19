import { useState } from 'react';
import './App.css';
import TimeAction from './components/TimeAction';
import bigOne from '../public/big-one-rose.png';
import oneWhite from '../public/one-whte-rose.png';
import rosesCorner from '../public/whire-roses-corner.png';
import twoRoses from '../public/two-big-roses.png';
import rose from '../public/rose2.png';

const drinks = ['Водка', 'Вино', 'Шампанское'];

function App() {
  const [firstLastName, setFirstLastName] = useState('');
  const [coupleName, setCoupleName] = useState('');
  const [selectedDrinks, setSelectedDrinks] = useState<string[]>([]);
  const [comms, setComms] = useState('');

  const handleToggle = (drink: string) => {
    setSelectedDrinks((prev) =>
      prev.includes(drink)
        ? prev.filter((d) => d !== drink)
        : [...prev, drink],
    );
  };

  return (
    <>
      <div className="background-images">
        {/* <img src="../public/" alt="decor 1" className="bg-img bg-img-1" /> */}
        <img src={oneWhite} alt="decor 2" className="bg-img bg-img-1" />
        <img src={rosesCorner} alt="decor 3" className="bg-img bg-img-2" />
        <img src={twoRoses} alt="decor 2" className="bg-img bg-img-3" />
        <img src={bigOne} alt="decor 3" className="bg-img bg-img-4" />
        <img src={rose} alt="decor 3" className="bg-img bg-img-5" />
      </div>

      <main>
        <header className="header">
          <h1 className="title">День Свадьбы</h1>
          <p className="text header-text">
            Приглашаем Вас разделить с нами праздник, посвященный дню нашей свадьбы 08.08.2025!
          </p>
          {/*Фото*/}
        </header>
        <section className="section section__place">
          <h2 className='subtitle'>Место проведения</h2>
          <p className='text place-text'>Место проведения ...</p>
          {/*Фото*/}
        </section>
        <section className="section section__dress">
          <h2 className="subtitle">Дресс код</h2>
          <p className="text dress-text">Нам будет особенно приятно видеть Вас в нарядах цветовой гаммы нашей свадьбы</p>
          {/*Фото цветовой гаммы*/}
        </section>
        <section className="sectuin section__time">
          <h2 className="subtitle">Расписание</h2>
          <TimeAction time={'15:00'} action={'Церемония'} descr={'Торжественное бракосочетание под открытым небом'} />
          <TimeAction time={'16:00-17:00'} action={'Фуршет'} descr={'В это время будет организован фуршет с напитками и закусками'} />
          <TimeAction time={'17:00'} action={'Банкет'} descr={'Начало банкет, угощения, тосты, танцы и развлекательная программа до поднего вечера!'} />
        </section>
        <section className="section section__form">
          <h2 className="subtitle subtitle-form">Анкета</h2>
          <p className="text">Пожалуйста, ответьте на вопросы ниже, тем самым подтвердив свое присутствие</p>
          <form action="POST">
            <div className="input-container">
              <label htmlFor="firstLastName">Ваше Имя и Фамилия</label>
              <input id='firstLastName' type="text" placeholder='Имя и Фамилия' value={firstLastName} onChange={(e) => setFirstLastName(e.target.value)} />
            </div>

            <div className="input-container">
              <label htmlFor="coupleName">Если будете с парой, укажите ее имя</label>
              <input id='coupleName' type="text" placeholder='Имя пары' value={coupleName} onChange={(e) => setCoupleName(e.target.value)} />
            </div>

            <div className="checkboxs-container">
              <label className="text-lg font-semibold mb-2">Что предпочитаете из напитков?</label>
              {drinks.map((drink) => (
                <label key={drink} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedDrinks.includes(drink)}
                    onChange={() => handleToggle(drink)}
                  />
                  <span>{drink}</span>
                </label>
              ))}
            </div>

            <div className="input-container">
              <label htmlFor="comms">Для комментариев и пожеланий</label>
              <input id='comms' type="text" value={comms} onChange={(e) => setComms(e.target.value)} />
            </div>

            <button type='button' className="btn btn__submit">Отправить</button>
          </form>
        </section>
      </main>
    </>

  );
}

export default App;
