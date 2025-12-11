import "../styles/Post.css";
import { Link } from "react-router-dom";

export default function Post4() {
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
              <span className="post-date">📅 1 Mart 2024</span>
              <span className="post-category">Duygular</span>
            </div>
            <div className="post-author">
              <span className="author-icon">👸</span>
              <span className="author-name">Banu Çiçek</span>
            </div>
          </div>
        </div>

        <div className="post-content">
            <div className="post-title-section">
            <h1>Bamsı'nın Kaçırılışı 💔</h1>
            <div className="post-divider"></div>
          </div>
          
          <div className="post-body">
            <p className="lead">
              Bugün hayatımın en zor günüydü. Bamsı gitti. Sosyal sorumluluk projesi 
              için şehir dışına gitti ama dönmedi. Kalbim paramparça oldu.
            </p>

            <p>
              Bu yazıyı yazmak çok zor. Ama yazmalıyım. Çünkü bu, hayatımın en 
              acı günüydü.
            </p>

            <h3>🚀 Siber Güvenlik Eğitimi</h3>
            <p>
              Bamsı, gençlere yönelik siber güvenlik eğitimi için şehir dışına gitti. 
              "Banu, birkaç hafta sonra döneceğim. Seni çok seviyorum, beni bekle." 
              dedi. O gün, onu uğurladım. Son kez sarıldık, son kez öpüştük. 
              "Geri döneceğim" dedi. Ben de inandım.
            </p>

            <div className="quote-box">
              <div className="quote-icon">💔</div>
              <p className="quote-text">
                "Dönüş yolunda, bölgede faaliyet gösteren yasa dışı bir grup tarafından 
                kaçırıldı. Gençlerin teknoloji ile siber güvenlik projeleri yapmalarını 
                engellemek isteyen grup, Bamsı'yı dağlık bir tesise götürüp iletişimini 
                tamamen kesti."
              </p>
            </div>

            <p>
              Günlerce haber alamadım. Telefonu kapalıydı, mesajlar gitmiyordu. 
              Ülkede #BeyrekiBulun etiketi gündem oldu. Ben ve kız kardeşlerim onu 
              bulmak için harekete geçtik. Ama hiçbir haber yoktu. Sanki hiç var 
              olmamış gibiydi.
            </p>

            <h3>😢 Haber Yok</h3>
            <p>
              Sonradan öğrendim ki, Bamsı kaçırılmıştı. Yasa dışı bir grup onu 
              dağlık bir tesise götürmüş, iletişimini tamamen kesmişti. Yıllarca 
              dönemedi, iletişim kuramadı. Ben de onu bekledim.
            </p>

            <div className="highlight-box" style={{background: 'linear-gradient(135deg, #f5576c 0%, #f093fb 100%)'}}>
              <h3>💔 Boşluk</h3>
              <p>
                Bamsı gittiğinden beri, içimde tarif edemediğim bir boşluk var. 
                Sanki bir parçam eksik kalmış gibi. Her şey anlamsız geliyor. 
                Ama umudumu kaybetmek istemiyorum. Belki bir gün geri döner.
              </p>
            </div>

            <p className="signature">
              Sevgilerle,<br />
              Banu 💔
            </p>

            <div className="post-tags">
              <span className="post-tag">#Ayrılık</span>
              <span className="post-tag">#Acı</span>
              <span className="post-tag">#BamsıBeyrek</span>
              <span className="post-tag">#Duygular</span>
            </div>

            <div className="post-navigation">
              <Link to="/post3" className="nav-link">← Önceki Yazı</Link>
              <Link to="/post5" className="nav-link">Sonraki Yazı →</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

