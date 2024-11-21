import React from 'react';
import '../styles/footer.css';

interface FooterProps {
  show: boolean;
}

const Footer: React.FC<FooterProps> = ({ show }) => {
  return (
    <footer className={`footer ${show ? 'show' : ''}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Foofzoo</h3>
          <p>Preservando, Educando, Inspirando</p>
        </div>
        
        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#solution">Soluções</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#pricing">Preços</a></li>
            <li><a href="#contact">Contatos</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Foofzoo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;