import "../styles/Post.css";
import { Link } from "react-router-dom";

export default function Post6() {
  return (
    <div className="post-page">
      <article className="post-container">
        <div className="post-header">
          <div className="post-image-wrapper">
            <img 
              src="/images/bamsi3.jpg" 
              alt="Bamsı Beyrek" 
              className="post-image"
              loading="lazy"
            />
            <div className="post-header-overlay"></div>
          </div>
          <div className="post-meta-header">
            <div className="post-meta">
              <span className="post-date">📅 25 Mart 2024</span>
              <span className="post-category">Aşk & İlişkiler</span>
            </div>
            <div className="post-author">
              <span className="author-icon">👸</span>
              <span className="author-name">Banu Çiçek</span>
            </div>
          </div>
        </div>

        <div className="post-content">
            <div className="post-title-section">
            <h1>Beyrek & Çiçek Gençlik ve Teknoloji Merkezi 🏢</h1>
            <div className="post-divider"></div>
          </div>
          
          <div className="post-body">
            <p className="lead">
              Birlikte "Beyrek & Çiçek Gençlik ve Teknoloji Merkezi"ni kurduk. 
              Bu, hayalimizin gerçekleşmesiydi. Gençlere teknoloji ve spor eğitimi 
              veriyoruz.
            </p>

            <p>
              Merhaba! Bugün size çok güzel bir şey anlatacağım. Birlikte hayalimizi 
              gerçekleştirdik. "Beyrek & Çiçek Gençlik ve Teknoloji Merkezi"ni kurduk.
            </p>

            <h3>🏢 Merkezimiz</h3>
            <p>
              Bamsı ile birlikte gençlere yönelik teknoloji ve spor merkezi kurduk. 
              Bu, ilk tanıştığımızda paylaştığımız hayalimizdi. Artık gerçek oldu. 
              Gençlere teknoloji eğitimi, spor eğitimi veriyoruz. Birlikte, omuz omuza 
              çalışıyoruz.
            </p>

            <div className="quote-box">
              <div className="quote-icon">✨</div>
              <p className="quote-text">
                "Birlikte hayalimizi gerçekleştirdik. Gençlere teknoloji ve spor eğitimi 
                veriyoruz. Bu, bizim sözümüzün gerçekleşmesiydi."
              </p>
            </div>

            <h3>🌟 Çalışmalarımız</h3>
            <p>
              Merkezimizde gençlere teknoloji eğitimi veriyoruz. Siber güvenlik, 
              yazılım geliştirme, robotik... Bamsı teknoloji kısmını yönetiyor. 
              Ben de spor kısmını, özellikle okçuluk eğitimini yönetiyorum. 
              Birlikte, gençlere yardım ediyoruz.
            </p>

            <div className="highlight-box highlight-success">
              <h3>💖 Mutluluk</h3>
              <p>
                Şu an çok mutluyum. Bamsı ile birlikte olmak, onun yanında olmak, 
                onunla konuşmak... Her şey çok güzel. Geçmişteki acılar unutuldu, 
                şimdi sadece mutluluk var. Ve umut. Çok umut.
              </p>
            </div>

            <p>
              Bu blogu yazmaya devam edeceğim. Bamsı ile yaşadıklarımızı, 
              mutluluklarımızı, bazen de zorluklarımızı paylaşacağım. Çünkü 
              bu, bizim hikayemiz.
            </p>

            <p className="signature">
              Sevgilerle,<br />
              Banu 💕<br />
              <small>P.S. Bamsı, seni çok seviyorum! Bu sefer birlikte, 
              her şeyi başaracağız! 💕</small>
            </p>

            <div className="post-tags">
              <span className="post-tag">#Merkez</span>
              <span className="post-tag">#BamsıBeyrek</span>
              <span className="post-tag">#TeknolojiVeSpor</span>
              <span className="post-tag">#Hayal</span>
              <span className="post-tag">#Mutluluk</span>
            </div>

            <div className="post-navigation">
              <Link to="/post8" className="nav-link">← Önceki Yazı</Link>
              <Link to="/post13" className="nav-link">Sonraki Yazı →</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

