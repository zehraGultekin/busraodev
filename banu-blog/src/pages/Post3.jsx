import "../styles/Post.css";
import { Link } from "react-router-dom";

export default function Post3() {
  return (
    <div className="post-page">
      <article className="post-container">
        <div className="post-header">
          <div className="post-image-wrapper">
            <img 
              src="/images/bamsi5.jpg" 
              alt="Bamsı Beyrek" 
              className="post-image"
              loading="lazy"
            />
            <div className="post-header-overlay"></div>
          </div>
          <div className="post-meta-header">
            <div className="post-meta">
              <span className="post-date">📅 5 Şubat 2024</span>
              <span className="post-category">Zorluklar</span>
            </div>
            <div className="post-author">
              <span className="author-icon">👸</span>
              <span className="author-name">Banu Çiçek</span>
            </div>
          </div>
        </div>

        <div className="post-content">
          <div className="post-title-section">
            <h1>Yaltacuk ve Kıskançlık 😤</h1>
            <div className="post-divider"></div>
          </div>
          
          <div className="post-body">
            <p className="lead">
              Bamsı'nın başarısı bazı insanları kıskandırdı. Özellikle Yaltacuk adında 
              bir rakip, Bamsı'nın projelerini baltalamaya çalışıyordu. Bu durum 
              bizi çok üzüyordu.
            </p>

            <p>
              Merhaba! Bugün size zor bir konudan bahsetmek istiyorum. Bamsı'nın 
              başarısı, bazı insanları kıskandırdı. Özellikle Yaltacuk adında bir rakip...
            </p>

            <h3>😤 Yaltacuk</h3>
            <p>
              Yaltacuk, Bamsı'nın rakibiydi. Teknoloji dünyasında ikisi de genç 
              girişimciler arasında öne çıkıyordu. Ama Bamsı'nın başarısı Yaltacuk'u 
              kızdırdı. O, Bamsı'nın projelerini baltalamaya ve kendini öne çıkarmaya 
              çalışıyordu.
            </p>

            <div className="quote-box">
              <div className="quote-icon">💭</div>
              <p className="quote-text">
                "Bamsı'nın başarısı Yaltacuk'u kızdırdı. O, Bamsı'nın projelerini 
                baltalamaya çalışıyordu. Bu durum bizi çok üzüyordu."
              </p>
            </div>

            <h3>💔 Zorluklar</h3>
            <p>
              Yaltacuk, Bamsı'nın projelerini baltalamaya çalışıyordu. Bazen yanlış 
              bilgiler yayıyor, bazen de Bamsı'nın işlerini engellemeye çalışıyordu. 
              Bu durum bizi çok üzüyordu. Ama Bamsı asla pes etmedi.
            </p>

            <p>
              Bamsı, Yaltacuk'un yaptıklarına rağmen çalışmaya devam etti. Projelerini 
              geliştirdi, gençlere yardım etmeye devam etti. Onun bu azmi, beni çok 
              etkiledi. O kadar güçlü, o kadar kararlı bir insandı ki...
            </p>

            <div className="highlight-box">
              <h3>💪 Bamsı'nın Azmi</h3>
              <p>
                Bamsı, Yaltacuk'un yaptıklarına rağmen asla pes etmedi. Projelerini 
                geliştirdi, gençlere yardım etmeye devam etti. Onun bu azmi, beni çok 
                etkiledi. O kadar güçlü, o kadar kararlı bir insandı ki...
              </p>
            </div>

            <p>
              Bu zorluklar, bizi birbirimize daha çok yaklaştırdı. Bamsı'nın yanında 
              olmak, ona destek olmak... Bu, benim için çok önemliydi. Birlikte 
              her zorluğu aşacağız.
            </p>

            <p className="signature">
              Sevgilerle,<br />
              Banu 💕
            </p>

            <div className="post-tags">
              <span className="post-tag">#Yaltacuk</span>
              <span className="post-tag">#Zorluklar</span>
              <span className="post-tag">#BamsıBeyrek</span>
              <span className="post-tag">#Destek</span>
            </div>

            <div className="post-navigation">
              <Link to="/post2" className="nav-link">← Önceki Yazı</Link>
              <Link to="/post4" className="nav-link">Sonraki Yazı →</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
