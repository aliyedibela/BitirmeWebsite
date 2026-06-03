import { useEffect, useRef, useState } from 'react';
import etuLogo from '../assests/etu.png';

function useVis() {
  const ref = useRef(null); const [v, setV] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.05 }); if (ref.current) o.observe(ref.current); return () => o.disconnect(); }, []);
  return [ref, v];
}

const MEMBERS = [
  {
    initials: 'AY',
    name: 'Ali Yedibela',
    role: 'Full Stack Geliştirici',
    sub: 'Sistem Mimarisi & Backend Lead',
    color: '#0071E3',
    ratio: 40,
    tasks: [
      'Sistem mimarisi ve rota optimizasyon algoritması',
      '.NET 8 WebAPI ve SignalR Hub implementasyonu',
      'JWT / OTP / BCrypt güvenlik altyapısı',
      'Erişebilirlik modu (GPS + TTS + STT)',
      'Railway.app + Docker bulut dağıtımı',
    ],
  },
  {
    initials: 'AC',
    name: 'Ali Can Altundal',
    role: 'Flutter Geliştirici',
    sub: 'Rota 25 Taksi Sürücü Uygulaması',
    color: '#FF9500',
    ratio: 30,
    tasks: [
      'Rota 25 sürücü uygulaması geliştirme',
      'SignalR istemci entegrasyonu ve çağrı akışı',
      'AuthController katkısı',
      'Taksi durağı verilerinin sisteme aktarımı',
    ],
  },
  {
    initials: 'MB',
    name: 'Muhammet Bağ',
    role: 'Flutter Geliştirici',
    sub: 'Şehir Rehberi Modülleri & Test',
    color: '#30D158',
    ratio: 30,
    tasks: [
      'Nöbetçi eczane ve hava durumu modülleri',
      'AFAD deprem listesi entegrasyonu',
      'Etkinlikler ve şehir rehberi ekranları',
      'Ödeme (iyzico) modülüne katkı ve test',
    ],
  },
];

export default function Team() {
  const [ref, v] = useVis();
  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className={`section-header animate-in${v ? ' visible' : ''}`} ref={ref}>
          <div className="tag">Ekibimiz</div>
          <h2 className="section-title">ETÜ 2026 <span className="gradient-text">Bitirme Ekibi</span></h2>
          <p className="section-desc">
            Erzurum Teknik Üniversitesi Bilgisayar Mühendisliği bölümünden üç kişi,
            sıfırdan bir şehir rehberi ekosistemi inşa etti.
          </p>
        </div>

        <div className="team-grid">
          {MEMBERS.map((m, i) => (
            <div key={m.name} className={`team-card animate-in${v ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="team-avatar"
                style={{ background: m.color + '22', color: m.color, border: `2px solid ${m.color}44` }}>
                {m.initials}
              </div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
              <div className="team-sub" style={{ color: m.color }}>{m.sub}</div>
              <div className="team-ratio" style={{ color: m.color }}>Katkı: %{m.ratio}</div>
              <ul className="team-tasks">
                {m.tasks.map(t => (
                  <li key={t}>
                    <span className="team-task-dot" style={{ background: m.color }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="uni-box">
          <img src={etuLogo} alt="Erzurum Teknik Üniversitesi" className="uni-logo-img" />
          <div>
            <div className="uni-name">Erzurum Teknik Üniversitesi</div>
            <div className="uni-dept">Bilgisayar Mühendisliği Bölümü | Bitirme Projesi 2026</div>
            <div className="uni-advisor">Danışman: Dr. Öğr. Üyesi Arif Metehan YILDIZ</div>
          </div>
        </div>
      </div>
    </section>
  );
}
