import "../styles/Post.css";
import { Link } from "react-router-dom";

export default function BanuPost() {
  return (
    <div className="post-page">
      <article className="post-container">
        <div className="post-header">
          <div className="post-image-wrapper">
            <img 
              src="/images/banucicek5.png" 
              alt="Banu Çiçek" 
              className="post-image"
              loading="lazy"
            />
            <div className="post-header-overlay"></div>
          </div>
          <div className="post-meta-header">
            <div className="post-meta">
              <span className="post-date">📅 15 Mart 2024</span>
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
            <h1>Bamsı Beyrek Gittiğinden Beri...</h1>
            <div className="post-divider"></div>
          </div>
          
          <div className="post-body">
            <p className="lead">
              Bamsı Beyrek gittiğinden beri içimde tarif edemediğim bir boşluk var.
              Zaman değişti, şehir büyüdü, insanlar kabuk değiştirdi ama bazı hisler
              hiç değişmedi…
            </p>

            <p>
              Merhaba! Bu benim ilk blog yazım. Uzun zamandır böyle bir şey 
              yapmayı düşünüyordum ama bir türlü cesaret edemiyordum. Ama artık 
              yeter! Duygularımı, düşüncelerimi, özellikle de Bamsı ile 
              yaşadıklarımızı buraya yazmak istiyorum.
            </p>

            <div className="quote-box">
              <div className="quote-icon">💭</div>
              <p className="quote-text">
                "Bu blogu açma nedenim, kaybolan duygularımı yeniden bulmak.
                Belki de Beyrek bir gün okur diye… kim bilir?"
              </p>
            </div>

            <h3>💔 O Gittiğinde</h3>
            <p>
              Bamsı gittiğinde, sanki dünyam durdu. Üniversitede tanışmıştık, 
              o kadar güzel bir insandı ki... Ama sonra bir gün, hiçbir açıklama 
              yapmadan gitti. Telefonu kapalı, sosyal medyadan silindi. Sanki 
              hiç var olmamış gibi.
            </p>

            <p>
              İlk günler çok zordu. Her yerde onu görüyordum, her şey bana onu 
              hatırlatıyordu. Zaman geçtikçe acı biraz hafifledi ama o boşluk 
              hala orada, kalbimde.
            </p>

            <div className="highlight-box">
              <h3>💖 İçimdeki Ses</h3>
              <p>
                Bazen düşünüyorum, acaba o da beni düşünüyor mu? Acaba o da bu 
                boşluğu hissediyor mu? Belki de hayır. Belki de sadece ben böyle 
                hissediyorum. Ama umudumu kaybetmek istemiyorum. Belki bir gün 
                geri döner, belki bir gün açıklama yapar.
              </p>
            </div>

            <h3>📱 Her Gün</h3>
            <p>
              Her gün yeni bir şey öğreniyorum, her gün yeni insanlarla tanışıyorum. 
              Ama hiçbiri Bamsı gibi değil. Onunla geçirdiğimiz o kısa ama yoğun 
              zamanlar, hala en güzel anılarım.
            </p>

            <p>
              Bazen Instagram'da eski fotoğraflarımıza bakıyorum. O gülümsemeler, 
              o anlar... Sanki dün gibi. Ama aslında aylar, belki de yıllar geçti.
            </p>

            <div className="quote-box quote-box-alt">
              <div className="quote-icon">✨</div>
              <p className="quote-text">
                Bu blog, benim için bir nefes alma yeri. Duygularımı, düşüncelerimi,
                umutlarımı buraya yazıyorum. Belki bir gün okuyan biri olur. Belki 
                bir gün o okur.
              </p>
            </div>

            <h3>💕 Umut</h3>
            <p>
              Belki bu blogu okursa, belki geri döner. Belki de hiçbir şey olmaz. 
              Ama en azından duygularımı buraya yazdım. En azından bir şeyler 
              yaptım. Ve bu bile bana iyi geliyor.
            </p>

            <p>
              Eğer sen de benzer bir şey yaşıyorsan, bil ki yalnız değilsin. 
              Aşk bazen acı verir, bazen umut verir. Ama her zaman yaşamaya değer.
            </p>

            <p className="signature">
              Sevgilerle,<br />
              Banu 💕
            </p>

            <div className="post-tags">
              <span className="post-tag">#Aşk</span>
              <span className="post-tag">#BamsıBeyrek</span>
              <span className="post-tag">#Günlük</span>
              <span className="post-tag">#Duygular</span>
              <span className="post-tag">#Umut</span>
            </div>

            <div className="post-navigation">
              <Link to="/" className="nav-link">← Tüm Yazılar</Link>
              <Link to="/beyrek" className="nav-link">Sonraki Yazı →</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
