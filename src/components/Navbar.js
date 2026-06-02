import { useState, useEffect } from 'react';
import etuLogo  from '../assests/etu.png';
import erzbLogo from '../assests/erzbb.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const go = id => e => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}

      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">

          {/* Brand — sol */}
          <a
            href="/"
            className="nav-brand"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img src={erzbLogo} alt="Erzurum BB" className="nav-brand-logo" />
            <div className="nav-brand-divider" />
            <img src={etuLogo}  alt="ETÜ"        className="nav-brand-logo nav-brand-logo-etu" />
            <div className="nav-brand-text">
              <span className="nav-brand-name">Erzurum Şehir Rehberi</span>
              <span className="nav-brand-sub">Bitirme Projesi · ETÜ 2026</span>
            </div>
          </a>

          {/* Links — orta */}
          <ul className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
            <li><a href="#overview" onClick={go('overview')}>Sistem</a></li>
            <li><a href="#erzurum" onClick={go('erzurum')}>Erzurum BB</a></li>
            <li><a href="#rota25" onClick={go('rota25')}>Rota 25</a></li>
            <li><a href="#tech" onClick={go('tech')}>Teknoloji</a></li>
            <li><a href="#team" onClick={go('team')}>Ekip</a></li>
          </ul>

          {/* Sağ */}
          <div className="nav-right">
            <a href="#download" onClick={go('download')} className="nav-cta">İndir</a>
            <button
              className={`nav-hamburger${menuOpen ? ' is-open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menü"
            >
              <span /><span /><span />
            </button>
          </div>

        </div>
      </nav>
    </>
  );
}
