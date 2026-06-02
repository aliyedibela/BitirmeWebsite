import { useEffect, useRef, useState } from 'react';
import flutterLogo   from '../assests/flutter.png';
import dotnetLogo    from '../assests/dotnet.png';
import signalrLogo   from '../assests/signalr.png';
import postgreLogo   from '../assests/postgre.png';
import firebaseLogo  from '../assests/firebase.png';
import iyzicoLogo    from '../assests/iyzico.png';
import railwayLogo   from '../assests/railway.png';
import dockerLogo    from '../assests/docker.png';
import jwtLogo       from '../assests/jwt.png';

function useVis() {
  const ref = useRef(null); const [v, setV] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.05 }); if (ref.current) o.observe(ref.current); return () => o.disconnect(); }, []);
  return [ref, v];
}

const TECHS = [
  { logo: flutterLogo,  name: 'Flutter 3',      desc: 'Tek kod tabanından Android ve iOS. MVVM mimarisi, Provider state yönetimi.',                  col: '#0288D1', glow: 'rgba(2,136,209,0.18)' },
  { logo: dotnetLogo,   name: '.NET 8 WebAPI',  desc: 'RESTful endpoints ve SignalR Hub. Minimal API + Controller mimarisi.',                        col: '#7B1FA2', glow: 'rgba(123,31,162,0.18)' },
  { logo: signalrLogo,  name: 'SignalR',        desc: 'Gerçek zamanlı iki yönlü iletişim. WebSocket öncelikli, fallback destekli.',                  col: '#0097A7', glow: 'rgba(0,151,167,0.18)' },
  { logo: postgreLogo,  name: 'PostgreSQL',     desc: 'Supabase üzerinde barındırılan veritabanı. EF Core Code-First migrasyonlar.',                 col: '#1565C0', glow: 'rgba(21,101,192,0.18)' },
  { logo: firebaseLogo, name: 'Firebase FCM',   desc: 'Push bildirim servisi. Yolcu uygulamasına anlık talep bildirimi.',                           col: '#E65100', glow: 'rgba(230,81,0,0.18)' },
  { logo: iyzicoLogo,   name: 'iyzico',         desc: 'RFID kart bakiye yükleme için ödeme entegrasyonu. Sandbox test modu.',                       col: '#00BCD4', glow: 'rgba(0,188,212,0.18)' },
  { logo: railwayLogo,  name: 'Railway.app',    desc: 'Ücretsiz bulut deploy platformu. Docker container ile CI/CD.',                               col: '#A855F7', glow: 'rgba(168,85,247,0.18)' },
  { logo: dockerLogo,   name: 'Docker',         desc: '.NET API containerizasyonu. Dockerfile ile tekrar üretilebilir build.',                      col: '#0277BD', glow: 'rgba(2,119,189,0.18)' },
  { logo: jwtLogo,      name: 'JWT + BCrypt',   desc: 'Stateless kimlik doğrulama. Şifre hashleme ve OTP doğrulama.',                              col: '#558B2F', glow: 'rgba(85,139,47,0.18)' },
];

export default function TechStack() {
  const [ref, v] = useVis();
  return (
    <section className="tech-section" id="tech">
      <div className="container">
        <div className={`section-header animate-in${v ? ' visible' : ''}`} ref={ref}>
          <div className="tag">Teknoloji Yığını</div>
          <h2 className="section-title">Her Katmanda <span className="gradient-text">Açık Kaynak</span></h2>
          <p className="section-desc">Lisans maliyeti sıfır. Tüm bağımlılıklar açık kaynak veya ücretsiz tier kullanılarak inşa edildi.</p>
        </div>

        <div className="tech-grid">
          {TECHS.map((t, i) => (
            <div
              key={t.name}
              className={`tech-card animate-in${v ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 0.06}s`, '--tc': t.col, '--tc-glow': t.glow }}
            >
              <div className="tech-logo-wrap" style={{ background: t.glow }}>
                <img src={t.logo} alt={t.name} className="tech-logo-img" />
              </div>
              <div className="tech-name">{t.name}</div>
              <div className="tech-desc">{t.desc}</div>
            </div>
          ))}
        </div>

        <div className="arch-box">

          <div className="arch-title">Flutter — MVVM Mimari Katmanları</div>
          <div className="arch-layers">
            {[
              { col:'#0288D1', lbl:'🖼  Sunum — View / Screen', detail:'StatelessWidget & StatefulWidget ekranlar. ErzurumApp: Rota, Harita, RFID Kart, Erişebilirlik (TTS+STT), Nöbetçi Eczane, Hava Durumu, Etkinlikler, Favori Duraklar sekmeleri. Rota25: Çağrı Ekranı, 60s geri sayım overlay, Giriş/Kayıt, Profil. BottomNavigationBar + PageView ile sekme yönetimi.' },
              { col:'#7B1FA2', lbl:'🧠  ViewModel — Provider / ChangeNotifier', detail:'Her özellik için izole ChangeNotifier sınıfı: RouteViewModel (Sequence Index algoritması), TaxiViewModel (SignalR bağlantı durumu), CardViewModel (iyzico akışı), AccessibilityViewModel (GPS + TTS + STT), WeatherViewModel (Open-Meteo polling), PharmacyViewModel (HTML parse). notifyListeners() ile reaktif UI; Consumer<T> widget\'ları ile granüler yeniden render.' },
              { col:'#0097A7', lbl:'🗃  Repository — Veri Soyutlama', detail:'Interface-first tasarım: IRouteRepository, ITaxiRepository, ICardRepository. Her repo; remote (REST API) ve local (Hive) olmak üzere iki datasource yönetir. Offline-first strateji: önce cache kontrol, TTL geçmişse API çağrısı. Hata yönetimi: Either<Failure, Data> monadik dönüş tipi.' },
              { col:'#1565C0', lbl:'🌐  Network — dio + SignalR', detail:'dio HTTP client: BaseOptions ile base URL, connectTimeout 15s. JWT Bearer interceptor: her isteğe otomatik Authorization header. 401 gelirse token refresh akışı. signalr_netcore paketi: HubConnectionBuilder → WebSocket → SSE → Long Polling fallback zinciri. Otomatik yeniden bağlanma: üstel geri çekilme (1s, 2s, 4s).' },
              { col:'#2E7D32', lbl:'💾  Yerel Depolama — Hive + SecureStorage', detail:'Hive NoSQL kutuları: favouriteStopsBox (HiveObject), userProfileBox, routeHistoryBox. flutter_secure_storage: JWT access token ve refresh token AES-256 şifreli depolama. SharedPreferences: tema modu (dark/light), dil kodu, son açılan sekme indeksi. Hive tip adaptörleri ile custom model serileştirme.' },
              { col:'#E65100', lbl:'🔔  Bildirim — Firebase FCM', detail:'Rota25 sürücü uygulamasına yolcu çağrısı anlık push bildirim; arka planda FirebaseMessaging.onBackgroundMessage ile işleme. Flutter Local Notifications: önyüz bildirim kanalı, Android önem seviyesi HIGH. Firebase Console topic\'leri: driver_{standId} ile durak bazlı hedefleme. Bildirime tıklanınca ilgili çağrı ekranına deep-link.' },
            ].map((l, i) => (
              <div key={l.lbl} className="arch-layer arch-layer-rich" style={{'--lc':l.col}}>
                <div className="arch-layer-dot" style={{background:l.col}} />
                <div className="arch-layer-body">
                  <div className="arch-layer-lbl">{l.lbl}</div>
                  <div className="arch-layer-detail">{l.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="arch-title" style={{marginTop:40}}>Backend — .NET 8 WebAPI Katmanları</div>
          <div className="arch-layers">
            {[
              { col:'#7B1FA2', lbl:'🚪  API Katmanı — Controllers + Minimal API', detail:'RESTful endpoint\'ler: POST /api/auth/register, /login, /otp-verify; GET /api/route/suggest, /stops; POST /api/taxi/request, /accept, /reject; GET /api/card/balance; POST /api/card/topup; GET /api/pharmacy/oncall; GET /api/weather, /earthquakes; GET /api/event. Swagger/OpenAPI ile interaktif dokümantasyon. FluentValidation ile istek doğrulama.' },
              { col:'#0097A7', lbl:'⚡  SignalR Hub — TaxiHub', detail:'IHubContext<TaxiHub> üzerinden Controller\'dan hub\'a mesaj gönderimi. Groups.AddToGroupAsync ile sürücü grupları (driver_{id}). Yolcu isteği gelince: müsait sürücü sorgulanır → Clients.Group("driver_{id}").SendAsync("NewRide", rideDto) → sürücü 60s içinde AcceptRide veya RejectRide çağırır → timeout HangFire job ile yönetilir.' },
              { col:'#1565C0', lbl:'⚙️  Servis Katmanı — Business Logic', detail:'AuthService: BCrypt.Net hash (work factor 12), SymmetricSecurityKey ile JWT üretimi, MailKit ile OTP e-postası. TaxiMatchService: önce online sürücüler listelenir, durak eşleşmesi yapılır, sıraya alınır. CardService: iyzico Initialize Payment → 3DS form → Complete Payment akışı; RFID kart-kullanıcı bağlama. RouteService: Sequence Index tabanlı yön doğrulama, aktarma hesaplama.' },
              { col:'#0277BD', lbl:'🗄  Veri Erişim — EF Core + PostgreSQL', detail:'AppDbContext; tablolar: Users (Id, Email, PasswordHash, Role, OtpCode, OtpExpiry), Drivers (UserId, StandId, IsOnline, PlateNumber), TaxiStands (Id, Name, Lat, Lng), Cards (Id, UserId, CardNo, Balance), Routes (Id, Name), Stops (Id, RouteId, SeqIndex, Name, Lat, Lng), Events (Id, Title, Date, Location). EF Core migrasyonlar; Supabase connection string.' },
              { col:'#558B2F', lbl:'🔐  Güvenlik — JWT + BCrypt + OTP', detail:'Stateless JWT: issuer/audience doğrulama, 30 günlük expiry, ClaimTypes.Role ile rol bazlı yetkilendirme. [Authorize(Roles="Driver")] ile sürücü endpoint koruması. BCrypt.Net: Verify() + HashPassword(). OTP: Random.Shared.Next(100000, 999999), 10 dakika TTL, tek kullanım sonrası null\'lama. HTTPS zorunluluğu, CORS politikası.' },
              { col:'#A855F7', lbl:'\u{1F4E6}  Altyapı — Docker + Railway + Supabase', detail:'Multi-stage Dockerfile: sdk:8.0 build aşaması → aspnet:8.0 runtime imajı; final imaj ~180MB. Railway.app: GitHub repo bağlantısı, otomatik deploy tetikleyici, environment variable yönetimi (CONNECTION_STRING, JWT_SECRET, IYZICO_KEY). Supabase ücretsiz tier: 500MB PostgreSQL, otomatik yedekleme. İki uygulama + bir backend toplam sıfır lisans maliyeti.' },
            ].map((l, i) => (
              <div key={l.lbl} className="arch-layer arch-layer-rich" style={{'--lc':l.col}}>
                <div className="arch-layer-dot" style={{background:l.col}} />
                <div className="arch-layer-body">
                  <div className="arch-layer-lbl">{l.lbl}</div>
                  <div className="arch-layer-detail">{l.detail}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
