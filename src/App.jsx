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
import adaptive from './assets/images/adaptive.png';

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
      <section className={styles.main}>
        <div className={cn(styles.container, 'container')}>
          <div className={cn(styles.wrapper, 'wrapper')}>
            <div className={styles.left}>
              <img src={logo} alt='' className={styles.logo} />
              <h3>Квартиры от собственника</h3>
              <ul>
                <li>Главная</li>
                <li>Расположение</li>
                <li>Квартиры</li>
                <li>Кто <br></br> собственник</li>
                <li>Контакты</li>
              </ul>
              <div className={styles.buttons}>
                <a href='#' className={cn('btn color-red', styles.btn)}>Выбрать квартиру</a>
                <div className={cn('socials', styles.socials)}>
                  <a href='#'><img src={viber} alt='' className='icon' /></a>
                  <a href='#'><img src={facebook} alt='' className='icon' /></a>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <img src={mainImg} alt='' className='border-radius-30px' />
              <h2 className='color-blue'>Квартиры с ремонтом от собственника</h2>
              <h1><span className='color-red'>0%</span>Без комисий</h1>
            </div>
          </div>
        </div>
      </section>
      {/*<section className={styles.photos}>*/}
      {/*<div className={cn(styles.container, 'container')}>*/}
      {/*  <h2>Фото квартир с ремонтом</h2>*/}
      {/*  <div className='swiper swiper-rooms'>*/}
      {/*    <div className='swiper-wrapper'>*/}
      {/*      <div className='swiper-slide'>*/}
      {/*        <img src={room1} alt='' className='border-radius-30px' />*/}
      {/*      </div>*/}
      {/*      <div className='swiper-slide'>*/}
      {/*        <img src={room2} alt='' className='border-radius-30px' />*/}
      {/*      </div>*/}
      {/*      <div className='swiper-slide'>*/}
      {/*        <img src={room3} alt='' className='border-radius-30px' />*/}
      {/*      </div>*/}
      {/*      <div className='swiper-slide'>*/}
      {/*        <img src={mainImg} alt='' className='border-radius-30px' />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="swiper-btn swiper-button-prev"></div>*/}
      {/*    <div className="swiper-btn swiper-button-next"></div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*</section>*/}
      {apartments.map((apartment, index) => (
        <section className={styles.apartments}>
          <div className={cn(styles.container, 'container')}>
            <div className={cn(styles.wrapper, 'wrapper')}>
              <div className={styles.apartment} key={index}>
                <div className={styles.apartmentSelection}>
                  <p className={styles.numRooms}>{apartment.numRooms}</p>
                  <h2 className='color-blue'>{apartment.type}</h2>
                  <p className={styles.description}>{apartment.description}</p>
                  <a href='#' className='color-red btn'>Выбрать квартиру</a>
                </div>
                <div className={styles.scheme}>
                  <img src={apartment.scheme} alt='' />
                  <div className={styles.square}>
                    <span>{apartment.square}</span>
                    Площадь, м2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      <section className={styles.location}>
        <div className={cn(styles.container, 'container')}>
          <h2>
            Все квартиры находятся в Харькове в <span>компексе ЖК Левада-2</span> от застройщика АО»Трест Жилстрой-1»
          </h2>
          <div className={styles.content}>
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
            <img src={buildings1} alt='' className={styles.buildings} />
            <img src={building1} alt='' className={cn(styles.building, 'border-radius-50')} />
          </div>
        </div>
      </section>
      <section className={styles.host}>
        <div className={cn(styles.container, 'container')}>
          <div className={cn(styles.wrapper, 'wrapper')}>
            <div className={styles.images}>
              <img src={host} alt='' className={styles.photo} />
              <img src={room2} alt='' className={cn(styles.room, 'border-radius-50')} />
            </div>
            <div className={styles.description}>
              <h2>Добрый день! <span className='color-blue'>Меня зовут Тимур</span> и я продаю только свои собственные
                квартиры.</h2>
              <div className={styles.description}></div>
              <p>
                В каждой из квартир я делаю дизайнерский ремонт. Сам лично контролирую все этапы работ, закупаю
                материалы
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
              <a href='tel:+380935370000' className='btn'>Позвонить</a>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={cn(styles.container, 'container')}>
          <div className={cn(styles.wrapper, 'wrapper')}>
            <div className={styles.contacts}>
              <h2>Контакты</h2>
              <a href='#'>Харьков
                <span>Елизаветинская 2Б
            </span>
              </a>
              <a href='tel:+380935370000'>+380 93 537 0000</a>
              <div className={cn('socials', styles.socials)}>
                <a href='#'><img src={viber} alt='' className='icon' /></a>
                <a href='#'><img src={facebook} alt='' className='icon' /></a>
              </div>
            </div>
            <div className={styles.map}>
              <iframe height="250px"
                      src="https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%84%D0%BB%D0%B8%D0%B7%D0%B0%D0%B2%D0%B5%D1%82%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B0,+2,+%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2,+%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+61000/@49.9796449,36.2371059,17z/data=!3m1!4b1!4m5!3m4!1s0x4127a08a0a40d63b:0x77f48f0cb9bebaa4!8m2!3d49.9796449!4d36.2396862"
                      allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
              <img src={room3} alt='' />
            </div>
          </div>
        </div>
      </footer>
      <script src="./assets/libs/swiper/swiper.js"></script>
    </main>
  );
}

export default App;
