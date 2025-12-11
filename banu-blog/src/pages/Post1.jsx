import "../styles/Post.css";
import { Link } from "react-router-dom";

export default function Post1() {
  return (
    <div className="post-page">
      <article className="post-container">
        <div className="post-header">
          <div className="post-image-wrapper">
            <img 
              src="/images/banu-modern.png" 
              alt="Banu Çiçek" 
              className="post-image"
              loading="lazy"
            />
            <div className="post-header-overlay"></div>
          </div>
          <div className="post-meta-header">
            <div className="post-meta">
              <span className="post-date">📅 10 Ocak 2024</span>
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
            <h1>İlk Tanışmamız 💕</h1>
            <div className="post-divider"></div>
          </div>
          
          <div className="post-body">
            <p className="lead">
              İstanbul'da düzenlenen Oğuz Teknoloji ve Girişimcilik Zirvesi'nde okçuluk 
              gösterisi yapıyordum. Gösteri sonrası birisi yanıma geldi. İşte o an, 
              hayatımın değiştiği andı.
            </p>

            <p>
              Merhaba! Bugün size Bamsı ile nasıl tanıştığımızı anlatacağım. 
              Belki de hayatımdaki en önemli anlardan biriydi.
            </p>

            <h3>🏹 Teknoloji Zirvesi</h3>
            <p>
              İstanbul'da düzenlenen Oğuz Teknoloji ve Girişimcilik Zirvesi'nde milli okçu 
              olarak gösteri yapıyordum. Gösteri çok güzel geçmişti, herkes beğenmişti. 
              Gösteri sonrası, etkinlik alanında dolaşırken birisi yanıma geldi.
            </p>

            <div className="quote-box">
              <div className="quote-icon">💭</div>
              <p className="quote-text">
                "Gösteriniz çok güzeldi. Ben Bamsı Beyrek, genç girişimciler arasında 
                öne çıkanlardan biriyim. Sizinle tanışmak isterdim." 
                O kadar samimi, o kadar sıcak bir insandı ki...
              </p>
            </div>

            <p>
              Bamsı Beyrek'ti. Zirvede genç girişimciler arasında öne çıkan biriydi. 
              Teknoloji projeleriyle dikkat çekiyordu. O gün saatlerce konuştuk. 
              Teknolojiden, sporadan, hayallerden... Sanki yıllardır tanıyormuşuz gibiydik.
            </p>

            <h3>💕 İlk İzlenim</h3>
            <p>
              Bamsı o kadar samimi, o kadar sıcak bir insandı ki... O gün eve döndüğümde, 
              sürekli onu düşünüyordum. Telefon numarasını almıştım ama mesaj atmaya 
              cesaret edemiyordum. Acaba o da beni düşünüyor muydu?
            </p>

            <div className="highlight-box">
              <h3>💖 Bağ</h3>
              <p>
                O gün, aralarımızda bir bağ oluştu. Teknoloji ve spor... İki farklı 
                dünya ama birbirini tamamlayan. Sanki yıllardır tanıyormuşuz gibiydik.
              </p>
            </div>

            <p>
              Ertesi gün, o bana mesaj attı! "Dün çok güzeldi, tekrar görüşelim mi?" 
              yazmıştı. O an ne kadar mutlu olduğumu anlatamam. İşte o gün, 
              aşkımızın başladığı gündü.
            </p>

            <p className="signature">
              Sevgilerle,<br />
              Banu 💕
            </p>

            <div className="post-tags">
              <span className="post-tag">#İlkTanışma</span>
              <span className="post-tag">#BamsıBeyrek</span>
              <span className="post-tag">#TeknolojiZirvesi</span>
              <span className="post-tag">#Okçuluk</span>
              <span className="post-tag">#Aşk</span>
            </div>

            <div className="post-navigation">
              <Link to="/" className="nav-link">← Tüm Yazılar</Link>
              <Link to="/post2" className="nav-link">Sonraki Yazı →</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

