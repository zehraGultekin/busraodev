import "../styles/Post.css";
import { Link } from "react-router-dom";

export default function Post5() {
  return (
    <div className="post-page">
      <article className="post-container">
        <div className="post-header">
          <div className="post-image-wrapper">
            <img 
              src="/images/bamsi4.jpg" 
              alt="Bamsı Beyrek" 
              className="post-image"
              loading="lazy"
            />
            <div className="post-header-overlay"></div>
          </div>
          <div className="post-meta-header">
            <div className="post-meta">
              <span className="post-date">📅 10 Mart 2024</span>
              <span className="post-category">Arayış</span>
            </div>
            <div className="post-author">
              <span className="author-icon">👸</span>
              <span className="author-name">Banu Çiçek</span>
            </div>
          </div>
        </div>

        <div className="post-content">
          <div className="post-title-section">
            <h1>Onu Arıyoruz 🏹</h1>
            <div className="post-divider"></div>
          </div>
          
          <div className="post-body">
            <p className="lead">
              Bamsı gideli günler oldu. Kız kardeşlerim ve ben, okçuluk yeteneklerimiz 
              ve teknoloji bilgimizle dağ taş onu arıyoruz. Devlet danışmanı Kazan Bey 
              de bize destek veriyor.
            </p>

            <p>
              Merhaba. Bamsı gideli günler oldu. Her gün onu arıyorum. Kız kardeşlerim 
              ve ben, okçuluk yeteneklerimiz ve teknoloji bilgimizle dağ taş onu arıyoruz.
            </p>

            <h3>🏹 Okçuluk ve Teknoloji</h3>
            <p>
              Milli okçu olarak yeteneklerimi kullanıyorum. Dağlarda, ormanlarda, 
              her yerde onu arıyorum. Kız kardeşlerim de yanımda. Birlikte, 
              güçlü bir şekilde onu arıyoruz.
            </p>

            <div className="quote-box">
              <div className="quote-icon">💭</div>
              <p className="quote-text">
                "Okçuluk yeteneklerim ve teknoloji bilgimle dağ taş onu arıyorum. 
                Kız kardeşlerim yanımda. Devlet danışmanı Kazan Bey de bize destek veriyor. 
                Onu bulacağız."
              </p>
            </div>

            <h3>👥 Kız Kardeşlerim</h3>
            <p>
              Kız kardeşlerim de yanımda. Birlikte, güçlü bir şekilde onu arıyoruz. 
              Her birimiz farklı yeteneklerimizi kullanıyoruz. Birlikte, onu bulacağız.
            </p>

            <p>
              Devlet danışmanı Kazan Bey de bize destek veriyor. O, Bamsı'yı bulmak 
              için tüm kaynaklarını kullanıyor. Birlikte, onu bulacağız.
            </p>

            <div className="highlight-box">
              <h3>💕 Umut</h3>
              <p>
                Her gün onu arıyoruz. Her gün umut ediyoruz. Bamsı güçlü bir insan, 
                o kurtulacak. Biz de onu bulacağız. Birlikte, her şeyi başaracağız.
              </p>
            </div>

            <h3>📱 #BeyrekiBulun</h3>
            <p>
              Sosyal medyada #BeyrekiBulun etiketi yayılıyor. Herkes onu arıyor, 
              herkes onu bekliyor. Ben, kız kardeşlerim, Kazan Bey... Hepimiz 
              onu bulmak için çalışıyoruz. Onu bulacağız.
            </p>

            <p>
              Bu blogu yazmaya devam edeceğim. Bamsı'yı bulana kadar, onu aramaya 
              devam edeceğim. Çünkü onu seviyorum. Çünkü birlikte bir gelecek kurmak 
              istiyoruz.
            </p>

            <p className="signature">
              Sevgilerle,<br />
              Banu 💕
            </p>

            <div className="post-tags">
              <span className="post-tag">#Arayış</span>
              <span className="post-tag">#BeyrekiBulun</span>
              <span className="post-tag">#KızKardeşler</span>
              <span className="post-tag">#KazanBey</span>
              <span className="post-tag">#Umut</span>
            </div>

            <div className="post-navigation">
              <Link to="/post4" className="nav-link">← Önceki Yazı</Link>
              <Link to="/banu" className="nav-link">Sonraki Yazı →</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
