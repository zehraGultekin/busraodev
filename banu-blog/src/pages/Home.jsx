import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <header className="hero-section">
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="blog-author-info">
            <div className="author-avatar">👸</div>
            <div className="author-details">
              <h1 className="hero-title">Banu Çiçek</h1>
              <p className="hero-subtitle">Günlük hayatım, düşüncelerim ve Bamsı Beyrek ile yaşadıklarım</p>
            </div>
          </div>
          <div className="hero-bio">
            <p>Merhaba! Ben Banu Çiçek. Bu blogda, hayatımı, düşüncelerimi ve Bamsı ile 
            yaşadığımız hikayeyi paylaşıyorum. 💕</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="section-intro">
          <h2 className="section-title">Blog Yazılarım</h2>
          <p className="section-description">
            Hayatımdan kareler, düşüncelerim ve Bamsı ile yaşadıklarımız
          </p>
        </div>

      <section className="blog-container">
          <article className="blog-card card-beyrek">
            <div className="card-badge">💍 En Yeni</div>
            <div className="card-image-wrapper">
              <img 
                src="/images/banucicek1.png" 
                alt="Bamsı ve Banu"
                loading="lazy"
              />
              <div className="card-overlay"></div>
              <div className="card-gradient"></div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-date">📅 30 Mart 2024</span>
                <span className="card-category">Aşk & Hayat</span>
              </div>
              <h2>Merkez Açılışı ve Evlilik Teklifi 💍</h2>
              <p className="card-excerpt">
                Zorlukları yendik, birbirimizi kaybetmedik. Merkez açılışında Bamsı 
                tüm kalabalığın ortasında diz çöktü: "Benimle bir ömür destan yazmak ister misin?"
              </p>
              <div className="card-tags">
                <span className="tag">#EvlilikTeklifi</span>
                <span className="tag">#MerkezAçılışı</span>
                <span className="tag">#BamsıBeyrek</span>
                <span className="tag">#Hikayemiz</span>
              </div>
              <Link to="/post13" className="read-button">
                <span>Devamını Oku</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </article>

          <article className="blog-card card-beyrek">
            <div className="card-badge">💼 Mücadele</div>
            <div className="card-image-wrapper">
              <img 
                src="/images/bamsi3.jpg" 
                alt="Bamsı Beyrek"
                loading="lazy"
              />
              <div className="card-overlay"></div>
              <div className="card-gradient"></div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-date">📅 25 Mart 2024</span>
                <span className="card-category">Aşk & İlişkiler</span>
              </div>
              <h2>Beyrek & Çiçek Gençlik ve Teknoloji Merkezi 🏢</h2>
              <p className="card-excerpt">
                Birlikte hayalimizi gerçekleştirdik. Gençlere teknoloji ve spor eğitimi 
                veriyoruz. Bu, bizim sözümüzün gerçekleşmesiydi.
              </p>
              <div className="card-tags">
                <span className="tag">#Merkez</span>
                <span className="tag">#TeknolojiVeSpor</span>
                <span className="tag">#BamsıBeyrek</span>
                <span className="tag">#Hayal</span>
              </div>
              <Link to="/post6" className="read-button">
                <span>Devamını Oku</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </article>

          <article className="blog-card card-beyrek">
            <div className="card-badge">💫 Özel Yazı</div>
            <div className="card-image-wrapper">
              <img 
                src="/images/bamsi2.jpg" 
                alt="Bamsı Beyrek"
                loading="lazy"
              />
              <div className="card-overlay"></div>
              <div className="card-gradient"></div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-date">📅 20 Mart 2024</span>
                <span className="card-category">Aşk & İlişkiler</span>
              </div>
              <h2>Bamsı Beyrek Geri Döndü! 💕</h2>
              <p className="card-excerpt">
                Bamsı tutsakken güvenlik sisteminin açığını buldu, yazdığı kodlarla 
                kaçtı. Bir kamyon şoförü onu bulup polise teslim etti. Geri döndü!
              </p>
              <div className="card-tags">
                <span className="tag">#BamsıBeyrek</span>
                <span className="tag">#Dönüş</span>
                <span className="tag">#Aşk</span>
                <span className="tag">#Umut</span>
              </div>
              <Link to="/beyrek" className="read-button">
                <span>Devamını Oku</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </article>

          <article className="blog-card card-banu">
            <div className="card-badge">📝 Blog Açılışı</div>
            <div className="card-image-wrapper">
              <img 
                src="/images/banucicek2.png" 
                alt="Banu Çiçek"
                loading="lazy"
              />
              <div className="card-overlay"></div>
              <div className="card-gradient"></div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-date">📅 15 Mart 2024</span>
                <span className="card-category">Aşk & İlişkiler</span>
              </div>
              <h2>Bamsı Beyrek Gittiğinden Beri...</h2>
              <p className="card-excerpt">
                Bamsı Beyrek gittiğinden beri içimde tarif edemediğim bir boşluk var. 
                Bu blogu açmamın nedeni, kaybolan duygularımı yeniden bulmak ve belki de 
                bir gün okuyacağını ummak...
              </p>
              <div className="card-tags">
                <span className="tag">#Aşk</span>
                <span className="tag">#BamsıBeyrek</span>
                <span className="tag">#Günlük</span>
                <span className="tag">#Duygular</span>
              </div>
              <Link to="/banu" className="read-button">
                <span>Devamını Oku</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </article>

          <article className="blog-card card-banu">
            <div className="card-badge">⏳ Beklemek</div>
            <div className="card-image-wrapper">
              <img 
                src="/images/banucicek5.png" 
                alt="Banu Çiçek"
                loading="lazy"
              />
              <div className="card-overlay"></div>
              <div className="card-gradient"></div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-date">📅 10 Mart 2024</span>
                <span className="card-category">Duygular</span>
              </div>
              <h2>Onu Arıyoruz 🏹</h2>
              <p className="card-excerpt">
                Kız kardeşlerim ve ben, okçuluk yeteneklerimiz ve teknoloji bilgimizle 
                dağ taş onu arıyoruz. Devlet danışmanı Kazan Bey de bize destek veriyor.
              </p>
              <div className="card-tags">
                <span className="tag">#Beklemek</span>
                <span className="tag">#Umut</span>
                <span className="tag">#BamsıBeyrek</span>
                <span className="tag">#Aşk</span>
              </div>
              <Link to="/post5" className="read-button">
                <span>Devamını Oku</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </article>

          <article className="blog-card card-banu">
            <div className="card-badge">💔 Ayrılık</div>
            <div className="card-image-wrapper">
              <img 
                src="/images/bamsi4.jpg" 
                alt="Bamsı Beyrek"
                loading="lazy"
              />
              <div className="card-overlay"></div>
              <div className="card-gradient"></div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-date">📅 1 Mart 2024</span>
                <span className="card-category">Duygular</span>
              </div>
              <h2>Bamsı'nın Kaçırılışı 💔</h2>
              <p className="card-excerpt">
                Bamsı siber güvenlik eğitimi için şehir dışına gitti. Dönüş yolunda 
                yasa dışı bir grup tarafından kaçırıldı. Ülkede #BeyrekiBulun etiketi gündem oldu.
              </p>
              <div className="card-tags">
                <span className="tag">#Ayrılık</span>
                <span className="tag">#Acı</span>
                <span className="tag">#BamsıBeyrek</span>
                <span className="tag">#Duygular</span>
              </div>
              <Link to="/post4" className="read-button">
                <span>Devamını Oku</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </article>

          <article className="blog-card card-banu">
            <div className="card-badge">🌟 İlk Buluşma</div>
            <div className="card-image-wrapper">
              <img 
                src="/images/bamsi5.jpg" 
                alt="Bamsı Beyrek"
                loading="lazy"
              />
              <div className="card-overlay"></div>
              <div className="card-gradient"></div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-date">📅 5 Şubat 2024</span>
                <span className="card-category">Aşk & İlişkiler</span>
              </div>
              <h2>Yaltacuk ve Kıskançlık 😤</h2>
              <p className="card-excerpt">
                Bamsı'nın başarısı rakibi Yaltacuk'u kızdırdı. O, Bamsı'nın projelerini 
                baltalamaya çalışıyordu. Bu durum bizi çok üzüyordu.
              </p>
              <div className="card-tags">
                <span className="tag">#Yaltacuk</span>
                <span className="tag">#Zorluklar</span>
                <span className="tag">#BamsıBeyrek</span>
                <span className="tag">#Destek</span>
              </div>
              <Link to="/post3" className="read-button">
                <span>Devamını Oku</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </article>

          <article className="blog-card card-banu">
            <div className="card-badge">📚 Üniversite</div>
            <div className="card-image-wrapper">
              <img 
                src="/images/bamsı1.jpg" 
                alt="Bamsı Beyrek"
                loading="lazy"
              />
              <div className="card-overlay"></div>
              <div className="card-gradient"></div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-date">📅 25 Ocak 2024</span>
                <span className="card-category">Günlük Hayat</span>
              </div>
              <h2>Ortak Hayallerimiz 💭</h2>
              <p className="card-excerpt">
                Zamanla sık sık görüşmeye başladık. Bir gün ortak bir hayal paylaştık: 
                Gençlere yönelik teknoloji ve spor merkezi. Bu, bizim sözümüzdü.
              </p>
              <div className="card-tags">
                <span className="tag">#OrtakHayal</span>
                <span className="tag">#BamsıBeyrek</span>
                <span className="tag">#TeknolojiVeSpor</span>
                <span className="tag">#Söz</span>
              </div>
              <Link to="/post2" className="read-button">
                <span>Devamını Oku</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </article>

          <article className="blog-card card-banu">
            <div className="card-badge">💕 İlk Tanışma</div>
            <div className="card-image-wrapper">
              <img 
                src="/images/banu-modern.png" 
                alt="Banu Çiçek"
                loading="lazy"
              />
              <div className="card-overlay"></div>
              <div className="card-gradient"></div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-date">📅 10 Ocak 2024</span>
                <span className="card-category">Aşk & İlişkiler</span>
              </div>
              <h2>Teknoloji Zirvesi ve İlk Karşılaşma 💕</h2>
              <p className="card-excerpt">
                İstanbul'da düzenlenen Oğuz Teknoloji ve Girişimcilik Zirvesi'nde okçuluk 
                gösterisi yapıyordum. Gösteri sonrası Bamsı ile tanıştık. İşte o an, 
                hayatımın değiştiği andı.
              </p>
              <div className="card-tags">
                <span className="tag">#İlkTanışma</span>
                <span className="tag">#BamsıBeyrek</span>
                <span className="tag">#TeknolojiZirvesi</span>
                <span className="tag">#Okçuluk</span>
              </div>
              <Link to="/post1" className="read-button">
                <span>Devamını Oku</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </article>

          <article className="blog-card card-beyrek">
            <div className="card-badge">⚖️ Adalet</div>
            <div className="card-image-wrapper">
              <img 
                src="/images/bamsi7.jpg" 
                alt="Bamsı Beyrek"
                loading="lazy"
              />
              <div className="card-overlay"></div>
              <div className="card-gradient"></div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-date">📅 22 Mart 2024</span>
                <span className="card-category">Adalet</span>
              </div>
              <h2>Gerçeklerin Ortaya Çıkışı ⚖️</h2>
              <p className="card-excerpt">
                Bamsı döndüğünde Yaltacuk medyada kendini kahraman gibi tanıtmıştı. 
                Ancak Bamsı'nın anlatımıyla gerçekler ortaya çıktı ve Yaltacuk cezalandırıldı.
              </p>
              <div className="card-tags">
                <span className="tag">#Adalet</span>
                <span className="tag">#Yaltacuk</span>
                <span className="tag">#BamsıBeyrek</span>
                <span className="tag">#Gerçekler</span>
              </div>
              <Link to="/post7" className="read-button">
                <span>Devamını Oku</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </article>

          <article className="blog-card card-beyrek">
            <div className="card-badge">💕 Aşkın Zaferi</div>
            <div className="card-image-wrapper">
              <img 
                src="/images/banucicek2.png" 
                alt="Bamsı ve Banu"
                loading="lazy"
              />
              <div className="card-overlay"></div>
              <div className="card-gradient"></div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-date">📅 24 Mart 2024</span>
                <span className="card-category">Aşk & İlişkiler</span>
              </div>
              <h2>Aşkın Zaferi 💕</h2>
              <p className="card-excerpt">
                Bamsı ve ben yeniden kavuştuk. "Artık hiçbir yol bizi ayıramaz" diyerek 
                birbirimize söz verdik. Aşkımız, tüm zorlukları aştı.
              </p>
              <div className="card-tags">
                <span className="tag">#AşkınZaferi</span>
                <span className="tag">#BamsıBeyrek</span>
                <span className="tag">#Söz</span>
                <span className="tag">#Mutluluk</span>
              </div>
              <Link to="/post8" className="read-button">
                <span>Devamını Oku</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </article>

        </section>

        <div className="ai-chat-section">
          <div className="ai-chat-card">
            <div className="ai-chat-icon">👸</div>
            <div className="ai-chat-content">
              <h3>Banu Çiçek ile Sohbet</h3>
              <p>
                Bamsı Beyrek hakkında merak ettiklerin mi var? Banu Çiçek'e soru sorabilirsin! 
                Onun hakkında her şeyi öğrenebilirsin.
              </p>
              <Link to="/ai-chat" className="ai-chat-button">
                <span>Banu'ya Sor</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="about-section">
          <div className="about-content">
            <h3>👋 Hakkımda</h3>
            <p>
              Merhaba! Ben Banu Çiçek. Modern dünyada yaşayan, üniversitede okuyan bir genç kızım. 
              Bu blogda, hayatımı, düşüncelerimi ve en önemlisi Bamsı Beyrek ile yaşadığımız 
              aşk hikayesini paylaşıyorum. Bazen mutlu, bazen hüzünlü, bazen de umut dolu 
              yazılar yazıyorum. Umarım okurken kendinizden bir şeyler bulursunuz. 💕
            </p>
            <div className="social-links">
              <span className="social-item">📧 banu.cicek@email.com</span>
              <span className="social-item">📱 @banucicek</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <p className="footer-text">© 2024 Banu Çiçek'in Blogu</p>
          <p className="footer-subtext">Tüm yazılar bana aittir. 💕</p>
        </div>
      </footer>
    </div>
  );
}
