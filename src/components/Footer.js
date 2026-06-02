import etuLogo from '../assests/etu.png';

export default function Footer() {
  const year = new Date().getFullYear();
  const go = id => e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={etuLogo} alt="ETÜ" className="footer-logo-img" />
            <div>
              <div className="footer-brand-name">Erzurum Şehir Rehberi</div>
              <div className="footer-brand-sub">Bitirme Projesi · ETÜ Bilgisayar Mühendisliği 2026</div>
            </div>
          </div>
          <div className="footer-links">
            <a href="#overview" onClick={go('overview')}>Sistem</a>
            <a href="#erzurum" onClick={go('erzurum')}>Erzurum BB</a>
            <a href="#rota25" onClick={go('rota25')}>Rota 25</a>
            <a href="#tech" onClick={go('tech')}>Teknoloji</a>
            <a href="#team" onClick={go('team')}>Ekip</a>
            <a href="#download" onClick={go('download')}>İndir</a>
            <a href="https://github.com/aliyedibela/ErzurumRota" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <div className="footer-copy">
            © {year} Erzurum Teknik Üniversitesi — Bilgisayar Mühendisliği Bitirme Projesi
          </div>
          <div className="footer-techs">
            {['Flutter 3', '.NET 8', 'SignalR', 'PostgreSQL', 'Railway.app', 'Docker'].map(t => (
              <span key={t} className="footer-tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
