import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h2 className="section-title">Cвязаться со мной</h2>
      <ul className="footer__list list-reset">
        <a href="https://t.me/qpaychok">
          <li className="footer__list-item">
            <img className="footer__list-img" src="./img/telegram_icon.svg" alt="telegram" />
            <p className="footer__list-descr">@qpaychok</p>
          </li>
        </a>
        <a href="https://wa.me/+79509214418">
          <li className="footer__list-item">
            <img className="footer__list-img" src="./img/whatsapp_icon.svg" alt="whatsapp" />
            <p className="footer__list-descr">....</p>
          </li>
        </a>
        <li className="footer__list-item">
          <img className="footer__list-img" src="./img/phone_icon.svg" alt="phone" />
          <p className="footer__list-descr">8 950 921 44 18</p>
        </li>
        <a href="mailto:ilya.rautkin/">
          <li className="footer__list-item">
            <img className="footer__list-img" src="./img/email_icon.svg" alt="email" />
            <p className="footer__list-descr">ilya.rautki@mail.ru</p>
          </li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
