import "../styles/Post.css";
import { Link } from "react-router-dom";

export default function Post8() {
  return (
    <div className="post-page">
      <article className="post-container">
        <div className="post-header">
          <div className="post-image-wrapper">
            <img 
              src="/images/banucicek2.png" 
              alt="Bamsı ve Banu" 
              className="post-image"
              loading="lazy"
            />
            <div className="post-header-overlay"></div>
          </div>
          <div className="post-meta-header">
            <div className="post-meta">
              <span className="post-date">📅 24 Mart 2024</span>
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
            <h1>Aşkın Zaferi 💕</h1>
            <div className="post-divider"></div>
          </div>
          
          <div className="post-body">
            <p className="lead">
              Bamsı ve ben yeniden kavuştuk. "Artık hiçbir yol bizi ayıramaz" diyerek 
              birbirimize söz verdik. Aşkımız, tüm zorlukları aştı.
            </p>

            <p>
              Merhaba! Bugün size çok güzel bir şey anlatacağım. Bamsı ve ben yeniden 
              kavuştuk. Tüm zorlukları aştık, birbirimize söz verdik.
            </p>

            <h3>💕 Yeniden Kavuşma</h3>
            <p>
              Bamsı döndüğünde, birbirimize sarıldık. O kadar özlemiştik ki... 
              Gözyaşlarımız birbirine karıştı. Artık hiçbir şey bizi ayıramazdı.
            </p>

            <div className="quote-box">
              <div className="quote-icon">💭</div>
              <p className="quote-text">
                "Artık hiçbir yol bizi ayıramaz" dedik birbirimize. Tüm zorlukları 
                aştık, aşkımız güçlendi. Artık birlikte, güçlü bir şekilde ilerleyeceğiz.
              </p>
            </div>

            <h3>🤝 Sözümüz</h3>
            <p>
              Birbirimize söz verdik. Artık hiçbir şeyi ertelemeyeceğiz. Birlikte 
              hayalimizi gerçekleştireceğiz. Teknoloji ve spor merkezi... Artık 
              hiçbir engel yok.
            </p>

            <p>
              Bamsı bana "Seni çok seviyorum Banu. Artık hiçbir yol bizi ayıramaz" 
              dedi. Ben de ona "Ben de seni çok seviyorum. Birlikte her şeyi başaracağız" 
              dedim.
            </p>

            <div className="highlight-box highlight-success">
              <h3>💖 Aşkın Zaferi</h3>
              <p>
                Aşkımız, tüm zorlukları aştı. Kaçırılma, ayrılık, kıskançlık... 
                Hiçbiri bizi ayıramadı. Artık birlikte, güçlü bir şekilde ilerleyeceğiz. 
                Aşkın zaferi, bizim zaferimiz.
              </p>
            </div>

            <h3>🌟 Gelecek</h3>
            <p>
              Artık geleceğe umutla bakıyoruz. Birlikte hayalimizi gerçekleştireceğiz. 
              Teknoloji ve spor merkezi... Gençlere yardım edeceğiz. Birlikte, 
              omuz omuza çalışacağız.
            </p>

            <p>
              Bu blog, bizim hikayemiz. Her zorluğu, her mutluluğu buraya yazıyorum. 
              Ve şimdi, yeni bir bölüm başlıyor. Aşkın zaferi bölümü.
            </p>

            <p className="signature">
              Sevgilerle,<br />
              Banu 💕
            </p>

            <div className="post-tags">
              <span className="post-tag">#AşkınZaferi</span>
              <span className="post-tag">#BamsıBeyrek</span>
              <span className="post-tag">#Söz</span>
              <span className="post-tag">#Mutluluk</span>
            </div>

            <div className="post-navigation">
              <Link to="/post7" className="nav-link">← Önceki Yazı</Link>
              <Link to="/post6" className="nav-link">Sonraki Yazı →</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

