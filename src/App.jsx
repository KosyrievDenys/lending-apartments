import React, { useRef } from "react";

//libs
import cn from 'classnames';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';

//assets
import styles from './App.module.scss';
import viber from './assets/images/icons/viber.svg';
import facebook from './assets/images/icons/facebook.svg';
import logo from './assets/images/logo.png';
import building1 from './assets/images/building1.jpg';
import buildings1 from './assets/images/buildings1.jpg';
import hostPhoto from './assets/images/host.jpg';
import mainImg from './assets/images/main.jpg';
import oneRoom from './assets/images/one-room.jpg';
import twoRoom from './assets/images/two-room.jpg';
import threeRoom from './assets/images/three-room.jpg';
import room1 from './assets/images/room1.jpg';
import room2 from './assets/images/room2.jpg';
import room3 from './assets/images/room3.jpg';
import adaptive from './assets/images/adaptive.png';

function App() {

  const mainSection = useRef(null);
  const apartmentsSection = useRef(null);
  const locationSection = useRef(null);
  const hostSection = useRef(null);
  const contactsSection = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  const photos = [
    { img: room1 },
    { img: adaptive },
    { img: room2 },
    { img: room3 },
  ];

  const apartmentsData = [
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
  ];

  return (
    <div className={styles.app}>
      <main>
        <section className={styles.main}>
          <div className={cn(styles.container, 'container')}>
            <div className={cn(styles.wrapper, 'wrapper')}>
              <div className={styles.left}>
                <img src={logo} alt='' className={styles.logo} />
                <h3>Квартиры от собственника</h3>
                <ul>
                  <li onClick={() => scrollToSection(mainSection)}>Главная</li>
                  <li onClick={() => scrollToSection(locationSection)}>Расположение</li>
                  <li onClick={() => scrollToSection(apartmentsSection)}>Квартиры</li>
                  <li onClick={() => scrollToSection(hostSection)}>Кто <br></br> собственник</li>
                  <li onClick={() => scrollToSection(contactsSection)}>Контакты</li>
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
        <section ref={mainSection} className={styles.photos}>
          <div className={cn(styles.container, 'container')}>
            <h2>Фото квартир с ремонтом</h2>
            <Swiper
              className={'test'}
              slidesPerView={'auto'}
              centeredSlides={true}
              grabCursor={true}
              spaceBetween={66}
              navigation={true}
              modules={[Navigation]}
            >
              {photos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <img src={photo.img} alt='' className='border-radius-30px' />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <div ref={apartmentsSection}>
          {apartmentsData.map((apartment, index) => (
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
        </div>
        <section ref={locationSection} className={styles.location}>
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
        <section ref={hostSection} className={styles.host}>
          <div className={cn(styles.container, 'container')}>
            <div className={cn(styles.wrapper, 'wrapper')}>
              <div className={styles.images}>
                <img src={hostPhoto} alt='' className={styles.photo} />
                <img src={room2} alt='' className={cn(styles.room, 'border-radius-50')} />
              </div>
              <div>
                <h2>Добрый день! <span className='color-blue'>Меня зовут Тимур</span> и я продаю только свои собственные
                  квартиры.</h2>
                <div className={styles.description}>
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
                </div>
                <a href='tel:+380935370000' className='btn'>Позвонить</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer ref={contactsSection} className={styles.footer}>
        <div className={cn(styles.container, 'container')}>
          <div className={cn(styles.wrapper, 'wrapper')}>
            <div className={styles.contacts}>
              <h2>Контакты</h2>
              <a
                href='https://www.google.com.ua/maps/@50.3944663,30.4915623,13z'
                target="_blank"
              >Харьков
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.9676848493627!2d36.239843213082416!3d49.974464571386335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0633de5be35%3A0xfe34afea8c744246!2z0LLRg9C70LjRhtGPINCE0LvQuNC30LDQstC10YLQuNC90YHRjNC60LAsIDI1LCDQpdCw0YDQutGW0LIsINCl0LDRgNC60ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA2MTAwMA!5e0!3m2!1suk!2sua!4v1682513951550!5m2!1suk!2sua"
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
              <img src={room3} alt='' />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
