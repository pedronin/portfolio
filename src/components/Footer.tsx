import React from 'react';

import telegramIcon from '../assets/img/socialIcon/telegram_icon.svg';
import whatsappIcon from '../assets/img/socialIcon/whatsapp_icon.svg';
import phoneIcon from '../assets/img/socialIcon/phone_icon.svg';
import emailIcon from '../assets/img/socialIcon/email_icon.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h2 className="section-title">Cвязаться со мной</h2>
      <ul className="footer__list list-reset">
        <a href="https://t.me/qpaychok">
          <li className="footer__list-item">
            <img className="footer__list-img" src={telegramIcon} />
            <p className="footer__list-descr">@qpaychok</p>
          </li>
        </a>
        <a href="https://wa.me/+79509214418">
          <li className="footer__list-item">
            <img className="footer__list-img" src={whatsappIcon} />
            <p className="footer__list-descr">....</p>
          </li>
        </a>
        <a href="tel:+79509214418">
          <li className="footer__list-item">
            <img className="footer__list-img" src={phoneIcon} />
            <p className="footer__list-descr">8 950 921 44 18</p>
          </li>
        </a>
        <a href="mailto:ilya.rautkin/">
          <li className="footer__list-item">
            <img className="footer__list-img" src={emailIcon} />
            <p className="footer__list-descr">ilya.rautki@mail.ru</p>
          </li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
