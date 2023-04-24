import React from "react";

//libs
import cn from 'classnames';

//assets
import styles from './App.module.scss';
import arrowCircle from './assets/images/icons/arrow-circle.svg';
import viber from './assets/images/icons/viber.svg';
import facebook from './assets/images/icons/facebook.svg';
import logo from './assets/images/logo.png';
import building1 from './assets/images/building1.jpg';
import buildings1 from './assets/images/buildings1.jpg';
import host from './assets/images/host.jpg';
import mainImg from './assets/images/main.jpg';
import oneRoom from './assets/images/one-room.jpg';
import twoRoom from './assets/images/two-room.jpg';
import threeRoom from './assets/images/three-room.jpg';
import room1 from './assets/images/room1.jpg';
import room2 from './assets/images/room2.jpg';
import room3 from './assets/images/room3.jpg';

function App() {

  const apartments = [
    {
      numRooms: 1,
      type: 'Однокомнатная квартира',
      description: 'Удобная и практичная квартрира для комфортной жизни',
      square: 45,
      scheme: oneRoom,
    },
    {
      numRooms: 2,
      type: 'Двухкомнатная квартира',
      description: 'Отличный вариант для личного пространства и дружескго времяпровождения',
      square: 65,
      scheme: twoRoom,
    },
    {
      numRooms: 3,
      type: 'Трехкомнатная квартира',
      description: 'Пространство, которое идеально подойдет для жизни пары, семьи с детьми или одного человека',
      square: 78,
      scheme: threeRoom,
    },
  ]

  return (
    <main className={styles.app}>
      <div className='container'>
        <section className={styles.main}>
          <div className={styles.left}>
            <img src={logo} alt='' className={styles.logo} />
            <h3>Квартиры от собственника</h3>
            <ul>
              <li>Главная</li>
              <li>Расположение</li>
              <li>Квартиры</li>
              <li>Кто собственник</li>
              <li>Контакты</li>
            </ul>
            <a href='#' className='btn color-red'>Выбрать квартиру</a>
            <div className={cn('socials', styles.socials)}>
              <img src={viber} alt='' className='icon' />
              <img src={facebook} alt='' className='icon' />
            </div>
          </div>
          <div className={styles.right}>
            <img src={mainImg} alt='' />
            <h2 className='color-blue'>Квартиры с ремонтом от собственника</h2>
            <h1><span className='color-red'>0%</span>Без косисий</h1>
          </div>
        </section>
        <section className={styles.photos}>
          <h2>Фото квартир с ремонтом</h2>
          <div className='swiper swiper-rooms'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <img src={room1} alt='' />
              </div>
              <div className='swiper-slide'>
                <img src={room2} alt='' />
              </div>
              <div className='swiper-slide'>
                <img src={room3} alt='' />
              </div>
              <div className='swiper-slide'>
                <img src={mainImg} alt='' />
              </div>
            </div>
            <div className="swiper-btn swiper-button-prev"></div>
            <div className="swiper-btn swiper-button-next"></div>
          </div>
        </section>
        <section className={styles.apartments}>
          {apartments.map((apartment, index) => (
            <div className={styles.apartment} key={index}>
              <div className={styles.description}>
                {/*<p className={styles.numRooms}>{apartment.numRooms}</p>*/}
                {apartment.numRooms}
                <h2 className='color-blue'>{apartment.type}</h2>
                <p>{apartment.description}</p>
                <a href='#' className={cn(styles.btn, 'color-red')}>Выбрать квартиру</a>
              </div>
              <div className={styles.scheme}>{apartment.scheme}</div>
              <div className={styles.square}>
                <span>{apartment.square}</span>
                Площадь, м2
              </div>
            </div>
          ))}
        </section>
        <section className={styles.location}>
          <h2>
            Все квартиры находятся в Харькове <span>компексе ЖК Левада-2</span> от застройщика АО»Трест Жилстрой-1»
          </h2>
          <div className={styles.description}>
            <p>
              Расположение очень удобное: 5 минут до метро проспект Гагарина, 15 минут до центра города пешком
            </p>
            <p>
              Рядом автовокзал и железнодорожная станция Левада
            </p>
            <p>
              Комплекс имеет большую придомовую территорию. Охраняемый многоуровневый паркинг рядом.
            </p>
            <p>Рядом школы, детские сады.</p>
            <p>
              В комплексе предусмотрены детские площадки, зоны для отдыха и занятий спортом.
            </p>
            <p>
              Весь комплекс состоит из двенадцати 16-ти этажных домов комфорт класса
            </p>
          </div>
          <img src={buildings1} alt='' />
          <img src={building1} alt='' />
        </section>
        <section className={styles.host}>
          <img src={host} alt='' />
          <img src={room2} alt='' />
          <div className={styles.description}>
            <h2>Добрый день! <span>Меня зовут Тимур</span> и я продаю только свои собственные квартиры.</h2>
            <p>
              В каждой из квартир я делаю дизайнерский ремонт. Сам лично контролирую все этапы работ, закупаю материалы
              и
              мебель.
            </p>
            <p>
              В моих квартирах все очень удобно и адаптированно к жизни (фото в группе все настоящие, именно так и
              выглядят мои квартиры в жизни)
            </p>
            <p>
              Я подбираю лучшие квартиры у застройщика и отвечаю за качество ремонта.
            </p>
            <a href='tel:+380 93 537 0000'>Позвонить</a>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.contacts}>
            <h2>Контакты</h2>
            <a href='#'>Харьков
              <p>Елизаветинская 2Б</p>
            </a>
            <a href='#'>+380 93 537 0000</a>
            <div className='socials'>
              <img src={viber} alt='' className='icon' />
              <img src={facebook} alt='' className='icon' />
            </div>
          </div>
        </footer>
      </div>
      <script src="./assets/libs/swiper/swiper.js"></script>
    </main>
  )
    ;
}

export default App;
