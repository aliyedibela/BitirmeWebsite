import { useEffect, useRef, useState } from 'react';
function useVis() {
  const ref = useRef(null); const [v, setV] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.05 }); if (ref.current) o.observe(ref.current); return () => o.disconnect(); }, []);
  return [ref, v];
}

const FEATS = [
  {
    emoji: '⚡', color: '#FF9500', bg: 'rgba(255,149,0,0.12)',
    title: 'SignalR Gerçek Zamanlı Bağlantı',
    desc: 'WebSocket öncelikli, başarısız olursa Long Polling fallback. Otomatik yeniden bağlanma ile kesintisiz iletişim.',
    tags: ['WebSocket', 'SignalR', 'Fallback'],
  },
  {
    emoji: '🔔', color: '#FF9F0A', bg: 'rgba(255,159,10,0.12)',
    title: 'Anlık Talep Bildirimi',
    desc: 'Yolcudan gelen çağrı milisaniyeler içinde ekrana düşer. 60 saniyelik geri sayım ve kabul/red butonu.',
    tags: ['Push', 'FCM', '60s Timer'],
  },
  {
    emoji: '🟢', color: '#30D158', bg: 'rgba(48,209,88,0.12)',
    title: 'Çevrimiçi / Çevrimdışı Modu',
    desc: 'Pulse animasyonlu büyük buton ile tek dokunuşta durum değiştir. Bağlantı durumu anlık gösterilir.',
    tags: ['Toggle', 'Pulse', 'Realtime'],
  },
  {
    emoji: '🔐', color: '#64D2FF', bg: 'rgba(100,210,255,0.12)',
    title: 'JWT + OTP Kimlik Doğrulama',
    desc: 'E-posta doğrulamalı kayıt, BCrypt şifre güvenliği. 30 günlük JWT token ile kalıcı oturum yönetimi.',
    tags: ['JWT', 'BCrypt', 'OTP'],
  },
  {
    emoji: '📍', color: '#FF453A', bg: 'rgba(255,69,58,0.12)',
    title: '34 Erzurum Taksi Durağı',
    desc: 'Kayıt sırasında gerçek Erzurum taksi duraklarından biri seçilir. Durak bazlı eşleştirme sistemi.',
    tags: ['34 Durak', 'Eşleştirme'],
  },
  {
    emoji: '🌙', color: '#BF5AF2', bg: 'rgba(191,90,242,0.12)',
    title: 'Koyu / Açık Tema',
    desc: 'Uzun mesai süresince göz yorgunluğunu azaltmak için toggle ile anlık tema değiştirme.',
    tags: ['Dark Mode', 'ThemeData'],
  },
];

export default function Rota25App() {
  const [ref, v] = useVis();
  const [open, setOpen] = useState(0);
  const toggle = i => setOpen(prev => prev === i ? -1 : i);

  return (
    <section className="app-section" id="rota25"
      style={{ background: 'linear-gradient(180deg,transparent,rgba(255,149,0,0.05),transparent)' }}>
      <div className="container">
        <div className={`app-section-inner rev animate-in${v ? ' visible' : ''}`} ref={ref}>

          {/* Sol: Başlık + Accordion */}
          <div>
            <div className="tag orange">Sürücü Uygulaması</div>
            <h2 className="app-title">
              <span className="gradient-text-orange">Rota 25</span><br />Taksi Sürücü Paneli
            </h2>
            <p className="app-subtitle">
              Erzurum taksi sürücülerine özel bağımsız Flutter uygulaması.
              Dijital çağrı sistemi ile telefon aramasına son.
              Aşağıdaki özelliklere tıklayarak detay görüntüle.
            </p>

            <div className="accordion">
              {FEATS.map((f, i) => (
                <div key={f.title} className={`acc-item acc-orange${open === i ? ' acc-open' : ''}`}>
                  <button className="acc-trigger" onClick={() => toggle(i)}>
                    <span className="acc-icon" style={{ background: f.bg, color: f.color }}>
                      {f.emoji}
                    </span>
                    <span className="acc-title">{f.title}</span>
                    <span className="acc-chevron">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  <div className="acc-body">
                    <div className="acc-body-inner">
                      <p className="acc-desc">{f.desc}</p>
                      <div className="acc-tags">
                        {f.tags.map(t => (
                          <span key={t} className="acc-tag" style={{ color: f.color, borderColor: f.color + '44', background: f.bg }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ: Gerçek uygulama ekran görüntüsü */}
          <div className="app-phone-wrap">
            <div className="app-glow glow-orange" />
            <img
              src="/assets/app-rota25.svg"
              alt="Rota 25 Taksi sürücü paneli ekran görüntüsü"
              className="app-phone-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
