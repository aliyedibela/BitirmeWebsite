export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="gradient-text">Erzurum Şehir</span><br />
            <span className="gradient-text-orange">Rehberi</span>
          </h1>
          <p className="hero-desc">
            Akıllı rota planlama, gerçek zamanlı taksi eşleştirme ve
            tüm kentsel hizmetler tek platformda.
          </p>
          <div className="hero-actions">
            <a href="#erzurum" className="btn-primary">Uygulamayı Keşfet</a>
            <a href="https://github.com/aliyedibela/ErzurumRota" className="btn-secondary" target="_blank" rel="noreferrer">GitHub Repo</a>
          </div>
          <div className="hero-stats">
            <div><div className="hero-stat-value gradient-text">70+</div><div className="hero-stat-label">Hat Varyantı</div></div>
            <div><div className="hero-stat-value gradient-text">34</div><div className="hero-stat-label">Taksi Durağı</div></div>
            <div><div className="hero-stat-value gradient-text">3</div><div className="hero-stat-label">Bileşen</div></div>
            <div><div className="hero-stat-value gradient-text">0</div><div className="hero-stat-label">Lisans Maliyeti</div></div>
          </div>
        </div>
        <div className="hero-right">
          <div className="phone-stack">
            <div className="phone-img-wrap phone-img-main">
              <div className="phone-img-glow glow-blue-sm" />
              <img src="/assets/hero-erzurum.svg" alt="Erzurum Şehir Rehberi" className="phone-img phone-img-big" />
            </div>
            <div className="phone-img-wrap phone-img-sub">
              <div className="phone-img-glow glow-orange-sm" />
              <img src="/assets/hero-rota25.svg" alt="Rota 25 Taksi" className="phone-img phone-img-small" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
