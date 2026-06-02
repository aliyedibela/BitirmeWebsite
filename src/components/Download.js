import { useEffect, useRef, useState } from 'react';
import erzbLogo   from '../assests/erzbb.png';
import rota25Logo  from '../assests/rota25.png';
import dotnetLogo  from '../assests/dotnet.png';

function useVis() {
  const ref = useRef(null); const [v, setV] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.05 }); if (ref.current) o.observe(ref.current); return () => o.disconnect(); }, []);
  return [ref, v];
}

/* Google Drive direkt indirme (büyük dosya confirm bypass) */
const DL_ERZURUM = 'https://drive.usercontent.google.com/download?id=1yR72FSwAHocC5093bIbFlNrT-NNxk7S6&export=download&authuser=0&confirm=t';
const DL_ROTA25  = 'https://drive.usercontent.google.com/download?id=1--RbaFhjDZ2ad4F4o4ukt5Cr23AG1k6y&export=download&authuser=0&confirm=t';
const GH_ERZURUM  = 'https://github.com/aliyedibela/ErzurumRota';
const GH_ROTA25   = 'https://github.com/aliyedibela/TaksiApp';
const GH_BACKEND  = 'https://github.com/aliyedibela/TaksiAppBackend.NET';

export default function Download() {
  const [ref, v] = useVis();
  return (
    <section className="download-section" id="download">
      <div className="download-bg" />
      <div className="container">
        <div className={`download-inner animate-in${v ? ' visible' : ''}`} ref={ref}>
          <div className="download-badge">İndirme ve Kaynak Kod</div>
          <h2 className="download-title">
            <span className="gradient-text">Hemen Dene</span><br />
            veya Kaynak Koda Göz At
          </h2>
          <p className="download-desc">
            Her iki uygulama da APK olarak indirilebilir.
            Android cihazda "Bilinmeyen Kaynaklara İzin Ver" seçeneğini etkinleştirmeyi unutmayın.
          </p>

          <div className="download-cards">

            {/* Erzurum Şehir Rehberi */}
            <div className="dl-card dl-blue">
              <div className="dl-icon">
                <img src={erzbLogo} alt="Erzurum BB" style={{width:32,height:32,objectFit:'contain'}} />
              </div>
              <div className="dl-name">Erzurum Şehir Rehberi</div>
              <div className="dl-sub">Yolcu Uygulaması — Flutter Android</div>
              <div className="dl-btns">
                <a href={DL_ERZURUM} className="dl-btn primary" download="erzurum-sehir-rehberi.apk">
                  ⬇ APK İndir
                </a>
                <a href={GH_ERZURUM} target="_blank" rel="noreferrer" className="dl-btn ghost">
                  GitHub
                </a>
              </div>
              <div className="dl-tags">
                <span>Flutter 3</span><span>Android APK</span><span>MVVM</span><span>Provider</span>
              </div>
            </div>

            {/* Rota 25 Taksi */}
            <div className="dl-card dl-orange">
              <div className="dl-icon" style={{background:'rgba(255,149,0,0.12)'}}>
                <img src={rota25Logo} alt="Rota 25" style={{width:32,height:32,objectFit:'contain'}} />
              </div>
              <div className="dl-name">Rota 25 Taksi</div>
              <div className="dl-sub">Sürücü Uygulaması — Flutter Android</div>
              <div className="dl-btns">
                <a href={DL_ROTA25} className="dl-btn primary orange" download="rota25-taksi.apk">
                  ⬇ APK İndir
                </a>
                <a href={GH_ROTA25} target="_blank" rel="noreferrer" className="dl-btn ghost">
                  GitHub
                </a>
              </div>
              <div className="dl-tags">
                <span>Flutter 3</span><span>SignalR</span><span>JWT</span><span>FCM</span>
              </div>
            </div>

            {/* Backend */}
            <div className="dl-card dl-purple">
              <div className="dl-icon" style={{background:'rgba(94,92,230,0.15)'}}>
                <img src={dotnetLogo} alt=".NET" style={{width:30,height:30,objectFit:'contain'}} />
              </div>
              <div className="dl-name">TaxiSignalR Backend</div>
              <div className="dl-sub">.NET 8 WebAPI — Railway.app Deploy</div>
              <div className="dl-btns">
                <a href={GH_BACKEND} target="_blank" rel="noreferrer" className="dl-btn primary purple">
                  GitHub Repo
                </a>
              </div>
              <div className="dl-tags">
                <span>.NET 8</span><span>Docker</span><span>PostgreSQL</span><span>SignalR</span>
              </div>
            </div>

          </div>

          <div className="download-note">
            Proje Erzurum Teknik Üniversitesi Bilgisayar Mühendisliği Bölümü için hazırlanmıştır.
            APK dosyaları Google Drive üzerinden sunulmaktadır.
          </div>
        </div>
      </div>
    </section>
  );
}
