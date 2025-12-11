import "../styles/Post.css";
import { Link } from "react-router-dom";

export default function Post2() {
  return (
    <div className="post-page">
      <article className="post-container">
        <div className="post-header">
          <div className="post-image-wrapper">
            <img 
              src="/images/bamsı1.jpg" 
              alt="Bamsı Beyrek" 
              className="post-image"
              loading="lazy"
            />
            <div className="post-header-overlay"></div>
          </div>
          <div className="post-meta-header">
            <div className="post-meta">
              <span className="post-date">📅 25 Ocak 2024</span>
              <span className="post-category">Günlük Hayat</span>
            </div>
            <div className="post-author">
              <span className="author-icon">👸</span>
              <span className="author-name">Banu Çiçek</span>
            </div>
          </div>
        </div>

        <div className="post-content">
            <div className="post-title-section">
            <h1>Ortak Hayallerimiz 💭</h1>
            <div className="post-divider"></div>
          </div>
          
          <div className="post-body">
            <p className="lead">
              Zaman geçtikçe Bamsı ve ben daha çok konuşmaya, görüşmeye başladık. 
              Bir gün ortak bir hayal paylaştık: Gençlere yönelik teknoloji ve spor merkezi.
            </p>

            <p>
              Merhaba! Bugün size Bamsı ile paylaştığımız hayali anlatmak istiyorum. 
              Bu, bizim birbirimize verdiğimiz söz gibiydi.
            </p>

            <h3>💭 Ortak Hayal</h3>
            <p>
              Zamanla sık sık görüşmeye başladık. Bir gün Bamsı bana bir şey söyledi: 
              "Banu, gençlere yönelik bir teknoloji ve spor merkezi kurmak istiyorum. 
              Senin okçuluk yeteneklerin, benim teknoloji bilgim... Birlikte harika 
              bir şey yapabiliriz. Ne dersin?"
            </p>

            <div className="quote-box">
              <div className="quote-icon">💭</div>
              <p className="quote-text">
                "Evet, hem de çok isterim!" dedim. Bu, modern bir beşik kertmesi gibiydi. 
                İki tarafın kendi isteğiyle verdiği bir söz. Birlikte bir gelecek kurmak...
              </p>
            </div>

            <h3>🤝 Sözümüz</h3>
            <p>
              O gün, birbirimize söz verdik. Gençlere yönelik teknoloji ve spor merkezi 
              kuracağız. Bamsı teknoloji kısmını, ben spor kısmını yöneteceğim. 
              Birlikte, omuz omuza çalışacağız.
            </p>

            <div className="highlight-box">
              <h3>💕 Hayalimiz</h3>
              <p>
                Bu hayal, bizi birbirimize daha çok yaklaştırdı. Birlikte bir gelecek 
                kurmak, gençlere yardım etmek... Her gün bu hayali konuşuyor, planlar 
                yapıyorduk. Bu, bizim sözümüzdü.
              </p>
            </div>

            <p>
              O gün eve döndüğümde, hala gülümsüyordum. Bamsı'nın mesajı geldi: 
              "Hayalimiz gerçek olacak, birlikte başaracağız." Evet, birlikte başaracağız.
            </p>

            <p className="signature">
              Sevgilerle,<br />
              Banu 💕
            </p>

            <div className="post-tags">
              <span className="post-tag">#OrtakHayal</span>
              <span className="post-tag">#BamsıBeyrek</span>
              <span className="post-tag">#TeknolojiVeSpor</span>
              <span className="post-tag">#Söz</span>
              <span className="post-tag">#Mutluluk</span>
            </div>

            <div className="post-navigation">
              <Link to="/post1" className="nav-link">← Önceki Yazı</Link>
              <Link to="/post3" className="nav-link">Sonraki Yazı →</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

