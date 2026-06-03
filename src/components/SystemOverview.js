import { useEffect, useRef, useState } from 'react';
function useVis() {
  const ref = useRef(null); const [v, setV] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.1 }); if (ref.current) o.observe(ref.current); return () => o.disconnect(); }, []);
  return [ref, v];
}
const CARDS = [
  { cls: 'sc-blue', icls: 'sci-blue', e: 'BB', name: 'Erzurum Şehir Rehberi', desc: 'Yolculara yönelik Flutter uygulaması. Rota planlama, taksi çağırma, RFID kart yönetimi ve tüm şehir hizmetleri.', tags: ['Flutter', 'MVVM', 'Android', 'Firebase FCM'] },
  { cls: 'sc-orange', icls: 'sci-orange', e: 'TX', name: 'Rota 25 - Sürücü Uygulaması', desc: 'Taksi sürücülerine özel bağımsız Flutter uygulaması. Gerçek zamanlı talep bildirimi ve sürücü paneli.', tags: ['Flutter', 'SignalR', 'JWT', 'Koyu/Açık Tema'] },
  { cls: 'sc-green', icls: 'sci-green', e: 'API', name: 'TaxiSignalRBackend', desc: '.NET 8 RESTful API ve SignalR Hub. JWT auth, BCrypt, iyzico ödeme ve PostgreSQL veritabanı.', tags: ['.NET 8', 'SignalR', 'PostgreSQL', 'Railway.app'] },
];
export default function SystemOverview() {
  const [ref, v] = useVis();
  return (
    <section className="system-overview" id="overview">
      <div className="container">
        <div className={`section-header animate-in${v ? ' visible' : ''}`} ref={ref}>
          <div className="tag">Sistem Mimarisi</div>
          <h2 className="section-title">Uc Bilesen, <span className="gradient-text">Bir Ekosistem</span></h2>
          <p className="section-desc">Yolcu uygulaması, sürücü uygulaması ve backend servisi - her biri bağımsız, ortak API üzerinden haberleşiyor.</p>
        </div>
        <div className="sys-connector">
          <div className="sys-line" /><div className="sys-conn-pill">REST API + SignalR WebSocket</div><div className="sys-line" />
        </div>
        <div className="sys-cards">
          {CARDS.map((c, i) => (
            <div key={c.name} className={`sys-card ${c.cls} animate-in${v ? ' visible' : ''}`} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className={`sys-card-icon ${c.icls}`} style={{fontSize:12,fontWeight:900}}>{c.e}</div>
              <div className="sys-card-name">{c.name}</div>
              <p className="sys-card-desc">{c.desc}</p>
              <div className="sys-tags">{c.tags.map(t => <span key={t} className="sys-tag">{t}</span>)}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 44, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, padding: '28px 36px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {[
            { i: 'CLOUD', l: 'Bulut Deploy', v2: 'Railway.app' },
            { i: 'DB', l: 'Veritabanı', v2: 'Supabase PostgreSQL' },
            { i: 'SEC', l: 'Güvenlik', v2: 'JWT + BCrypt + OTP' },
            { i: 'RT', l: 'Gerçek Zamanlı', v2: 'SignalR WebSocket' }
          ].map(x => (
            <div key={x.l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 12, fontWeight: 900, color: '#42A5F5', marginBottom: 8, background: 'rgba(66,165,245,0.1)', padding: '6px', borderRadius: 8 }}>{x.i}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 5 }}>{x.l}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{x.v2}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
