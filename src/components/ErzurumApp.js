import { useEffect, useRef, useState } from 'react';
function useVis() {
  const ref = useRef(null); const [v, setV] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.05 }); if (ref.current) o.observe(ref.current); return () => o.disconnect(); }, []);
  return [ref, v];
}
const FEATS = [
  {
    emoji: '🗺️', code: 'ROTA', color: '#0071E3', bg: 'rgba(0,113,227,0.12)',
    title: 'Akıllı Rota Öneri Motoru',
    desc: 'Sequence Index tabanlı yön doğrulama algoritması ile 70+ hat varyantı arasından en hızlı rotayı bulur. Direkt ve aktarmalı güzergah hesaplama, ters yönlü duraklar otomatik elenir.',
    tags: ['Flutter', 'Sequence Index', 'MVVM'],
  },
  {
    emoji: '🚕', code: 'TAXI', color: '#FF9500', bg: 'rgba(255,149,0,0.12)',
    title: 'Gerçek Zamanlı Taksi Çağırma',
    desc: '34 kayıtlı Erzurum taksi durağından seçim yapılır. SignalR WebSocket üzerinden sürücüye anlık bildirim gönderilir. Yolcu 60 saniyelik geri sayım içinde kabul/red bekler.',
    tags: ['SignalR', 'WebSocket', '34 Durak'],
  },
  {
    emoji: '💳', code: 'KART', color: '#30D158', bg: 'rgba(48,209,88,0.12)',
    title: 'RFID Kart & iyzico Ödeme',
    desc: 'Ulaşım kartlarını hesabına ekle, bakiye sorgula. iyzico entegrasyonu ile kredi kartından güvenli bakiye yükleme. Sandbox test ortamı dahil.',
    tags: ['RFID', 'iyzico', 'Ödeme'],
  },
  {
    emoji: '♿', code: 'ERİŞ', color: '#64D2FF', bg: 'rgba(100,210,255,0.12)',
    title: 'Erişebilirlik Modu (TTS + STT)',
    desc: 'GPS tabanlı durak tespiti ile konumunuza en yakın durak sesli anons edilir. Türkçe konuşma tanıma (STT) ile hat seçimi yapabilirsiniz. Görme engelli yolcu desteği.',
    tags: ['TTS', 'STT', 'GPS', 'Erişebilirlik'],
  },
  {
    emoji: '💊', code: 'ECZ', color: '#FF453A', bg: 'rgba(255,69,58,0.12)',
    title: 'Nöbetçi Eczane',
    desc: 'Anlık nöbetçi eczane listesi HTML ayrıştırma ile çekilir. Tek dokunuşla eczaneyi arayabilir veya haritada görebilirsiniz.',
    tags: ['HTML Parsing', 'Konum'],
  },
  {
    emoji: '⛅', code: 'HAVA', color: '#BF5AF2', bg: 'rgba(191,90,242,0.12)',
    title: 'Hava Durumu & Depremler',
    desc: 'Open-Meteo API ile ücretsiz, lisans gerektirmeyen hava durumu. AFAD RSS beslemesinden anlık deprem listesi — tüm Türkiye verisi.',
    tags: ['Open-Meteo', 'AFAD', 'RSS'],
  },
  {
    emoji: '🎭', code: 'ETKİNLİK', color: '#FF9F0A', bg: 'rgba(255,159,10,0.12)',
    title: 'Etkinlikler & Şehir Rehberi',
    desc: 'Yaklaşan kültürel etkinlikler, önemli mekânlar, Erzurum tarihçesi ve eski belediye başkanları arşivi tek ekranda.',
    tags: ['Kültür', 'Tarih', 'Etkinlik'],
  },
  {
    emoji: '⭐', code: 'FAV', color: '#FFD60A', bg: 'rgba(255,214,10,0.12)',
    title: 'Favori Duraklar',
    desc: 'Sık kullandığın durakları kaydet, Rota Öneri sekmesine tek dokunuşla yönlen. Hive yerel veritabanında saklanır.',
    tags: ['Hive', 'Local DB'],
  },
];

export default function ErzurumApp() {
  const [ref, v] = useVis();
  const [open, setOpen] = useState(0);
  const toggle = i => setOpen(prev => prev === i ? -1 : i);

  return (
    <section className="app-section" id="erzurum"
      style={{ background: 'linear-gradient(180deg,transparent,rgba(0,113,227,0.06),transparent)' }}>
      <div className="container">
        <div className={`app-section-inner animate-in${v ? ' visible' : ''}`} ref={ref}>

          {/* Sol: Başlık + Accordion */}
          <div>
            <div className="tag">Yolcu Uygulaması</div>
            <h2 className="app-title">
              <span className="gradient-text">Erzurum Şehir</span><br />Rehberi
            </h2>
            <p className="app-subtitle">
              Flutter · MVVM · Android — Şehrin tüm ulaşım ve yaşam hizmetleri tek ekranda.
              Aşağıdaki özelliklere tıklayarak detay görüntüle.
            </p>

            <div className="accordion">
              {FEATS.map((f, i) => (
                <div key={f.code} className={`acc-item${open === i ? ' acc-open' : ''}`}>
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
            <div className="app-glow glow-blue" />
            <img
              src="/assets/app-erzurum.svg"
              alt="Erzurum Şehir Rehberi ekran görüntüsü"
              className="app-phone-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
