import myImg from './autor-img.jpg';

const AboutPage = () => {
  return (
    <div className='App-header'>
      <h1>Про застосунок</h1>
      <div className='some-info'>
        <h2>Технології</h2>
        <p>
          Даний застосунок був зроблений на глобальній бібліотеці React,
          зроблений на JavaScript. Пакувальник: Webpack. Бібліотеки:
          react-router-dom (для переходу між сторінками).
        </p>
        <div className='all-about-autor'>
          <div className='about-autor'>
            <h2>Автор: Шевченко Анастасія</h2>
            <p>
              Закінчила університет, але продовжує навчатися за допомогою
              курсів.
            </p>
          </div>
          <img
            src={myImg}
            alt='Моє фото'
            style={{ width: '22%', borderRadius: '15px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
