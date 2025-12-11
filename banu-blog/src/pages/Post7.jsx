import "../styles/Post.css";
import { Link } from "react-router-dom";

export default function Post7() {
  return (
    <div className="post-page">
      <article className="post-container">
        <div className="post-header">
          <div className="post-image-wrapper">
            <img 
              src="/images/bamsi7.jpg" 
              alt="Bamsı Beyrek" 
              className="post-image"
              loading="lazy"
            />
            <div className="post-header-overlay"></div>
          </div>
          <div className="post-meta-header">
            <div className="post-meta">
              <span className="post-date">📅 22 Mart 2024</span>
              <span className="post-category">Adalet</span>
            </div>
            <div className="post-author">
              <span className="author-icon">👸</span>
              <span className="author-name">Banu Çiçek</span>
            </div>
          </div>
        </div>

        <div className="post-content">
          <div className="post-title-section">
            <h1>Gerçeklerin Ortaya Çıkışı ⚖️</h1>
            <div className="post-divider"></div>
          </div>
          
          <div className="post-body">
            <p className="lead">
              Bamsı döndüğünde Yaltacuk medyada kendini kahraman gibi tanıtmıştı. 
              Ancak Bamsı'nın anlatımıyla gerçekler ortaya çıktı ve Yaltacuk cezalandırıldı.
            </p>

            <p>
              Merhaba! Bugün size çok önemli bir konudan bahsetmek istiyorum. 
              Bamsı döndüğünde, medyada Yaltacuk kendini kahraman gibi tanıtmıştı. 
              Ama gerçekler çok farklıydı.
            </p>

            <h3>📰 Medyada Yaltacuk</h3>
            <p>
              Bamsı döndüğünde, medyada Yaltacuk kendini kahraman gibi tanıtmıştı. 
              Sanki o Bamsı'yı kurtarmış gibi davranıyordu. Ama gerçekler çok farklıydı. 
              Bamsı kendi başına kaçmıştı, Yaltacuk'un hiçbir yardımı olmamıştı.
            </p>

            <div className="quote-box">
              <div className="quote-icon">💭</div>
              <p className="quote-text">
                "Yaltacuk medyada kendini kahraman gibi tanıtmıştı. Ama Bamsı'nın 
                anlatımıyla gerçekler ortaya çıktı. Yaltacuk, Bamsı'nın projelerini 
                baltalamaya çalışmış, hatta kaçırılmasında rolü olmuştu."
              </p>
            </div>

            <h3>⚖️ Gerçekler Ortaya Çıktı</h3>
            <p>
              Bamsı'nın anlatımıyla gerçekler ortaya çıktı. Yaltacuk, Bamsı'nın 
              projelerini baltalamaya çalışmış, hatta kaçırılmasında rolü olmuştu. 
              Tüm bunlar ortaya çıktığında, Yaltacuk cezalandırıldı.
            </p>

            <p>
              Adalet yerini buldu. Yaltacuk'un yaptıkları ortaya çıktı ve cezalandırıldı. 
              Bamsı'nın haklılığı kanıtlandı. Artık kimse onun projelerini baltalayamazdı.
            </p>

            <div className="highlight-box highlight-success">
              <h3>💪 Adalet</h3>
              <p>
                Adalet yerini buldu. Yaltacuk'un yaptıkları ortaya çıktı ve cezalandırıldı. 
                Bamsı'nın haklılığı kanıtlandı. Artık kimse onun projelerini baltalayamazdı. 
                Gerçekler her zaman ortaya çıkar.
              </p>
            </div>

            <h3>🌟 Yeni Başlangıç</h3>
            <p>
              Artık Yaltacuk'un engelleri yok. Bamsı özgürce projelerini geliştirebilir, 
              gençlere yardım edebilir. Biz de birlikte hayalimizi gerçekleştirebiliriz. 
              Teknoloji ve spor merkezi... Artık hiçbir engel yok.
            </p>

            <p>
              Bu olay, bize çok şey öğretti. Gerçekler her zaman ortaya çıkar. 
              Adalet her zaman kazanır. Ve biz, birlikte her zorluğu aşabiliriz.
            </p>

            <p className="signature">
              Sevgilerle,<br />
              Banu 💕
            </p>

            <div className="post-tags">
              <span className="post-tag">#Adalet</span>
              <span className="post-tag">#Yaltacuk</span>
              <span className="post-tag">#BamsıBeyrek</span>
              <span className="post-tag">#Gerçekler</span>
            </div>

            <div className="post-navigation">
              <Link to="/beyrek" className="nav-link">← Önceki Yazı</Link>
              <Link to="/post8" className="nav-link">Sonraki Yazı →</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

