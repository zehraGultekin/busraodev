import "../styles/Post.css";
import { Link } from "react-router-dom";

export default function BeyrekPost() {
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
              <span className="post-date">📅 20 Mart 2024</span>
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
            <h1>Bamsı Beyrek Geri Döndü! 💕</h1>
            <div className="post-divider"></div>
          </div>
          
          <div className="post-body">
            <p className="lead">
              Bamsı Beyrek geri döndü! Yıllar sonra şehre döndüğünde ne hissettim 
              bilir misiniz? Sanki tüm dünya durdu, sanki zaman geriye sardı...
            </p>

            <p>
              Merhaba! Bugün size çok özel bir şey anlatacağım. Bamsı geri döndü! 
              Evet, yanlış okumadınız. O, yıllar sonra şehre döndü ve benimle 
              iletişime geçti.
            </p>

            <h3>🔓 Kaçış</h3>
            <p>
              Bamsı tutsakken asla pes etmedi. Güvenlik sisteminin açığını bulan Bamsı, 
              yazdığı kodlarla kapıları devre dışı bırakarak kaçtı. Tutsak kaldığı yerde 
              mühendislik yeteneklerini kullanarak sistemde bir açık bulmuştu. 
              Yoldan geçen bir kamyon şoförü onu bulup polise teslim etti. Böylece 
              herkes Bamsı'nın hayatta olduğunu öğrendi.
            </p>

            <p>
              Bir gece, telefonum çaldı. Bilinmeyen bir numara. Ama o sesi tanıdım 
              hemen. Bamsı Beyrek'ti! "Merhaba Banu, ben Bamsı. Kurtuldum, geri döndüm." 
              dedi. O an ne hissettim bilir misiniz? Önce şok, sonra sevinç, sonra 
              gözyaşları...
            </p>

            <div className="highlight-box">
              <h3>💖 Buluşma</h3>
              <p>
                Ertesi gün buluştuk. O eski kafede, ilk tanıştığımız yerde. 
                Görünce gözyaşlarıma boğuldum. Şehre döndüğünde sanki yıllar geçmiş 
                gibiydi. O kadar değişmişti ki, ama aynı zamanda hiç değişmemişti. 
                O gülümseme, o bakışlar... Hepsi aynıydı.
              </p>
            </div>

            <h3>🗣️ Hatayla Yüzleşme</h3>
            <p>
              Ama aynı zamanda kızgındım. Çünkü Bamsı uzun süre hiçbir iz bırakmadan 
              kaybolmuştu. "Keşke bana bir şey olursa diye bir plan bıraksaydın" dedim. 
              Bamsı başını eğdi: "Haklısın. Artık hiçbir şeyi ertelemeyeceğim."
            </p>

            <p>
              Bu kadar zaman sonra, hala beni düşünüyormuş. Hala beni seviyormuş. 
              Ve ben de onu hala seviyordum. O boşluk, o acı, hepsi bir anda 
              kayboldu sanki. Ama bu sefer, hatalarımızdan ders çıkaracağız.
            </p>

            <div className="quote-box quote-box-alt">
              <div className="quote-icon">✨</div>
              <p className="quote-text">
                "Belki de aşk böyle bir şey. Zaman geçer, insanlar değişir, 
                ama gerçek aşk asla ölmez."
              </p>
            </div>

            <h3>💕 Şimdi</h3>
            <p>
              Bamsı'nın blogumu okuduğunu söyledi. Yazdıklarımı okumuş, 
              hissettiklerimi anlamış. "Seni çok özledim Banu" dedi. Ve ben de 
              onu çok özlemiştim. Şimdi ne olacak bilmiyorum ama umutluyum.
            </p>

            <div className="highlight-box highlight-success">
              <h3>🌟 Yeni Bir Başlangıç</h3>
              <p>
                Belki bu yeni bir başlangıç. Belki eski hatalarımızdan ders 
                çıkarıp, bu sefer daha iyi olabiliriz. Kim bilir? Ama umutluyum, 
                çok umutluyum.
              </p>
            </div>

            <p>
              Size de tavsiyem: Eğer birini seviyorsanız, ondan vazgeçmeyin. 
              Aşk bazen zor olur, bazen acı verir. Ama gerçek aşk, her şeye 
              değer.
            </p>

            <p className="signature">
              Sevgilerle,<br />
              Banu 💕<br />
              <small>P.S. Bamsı Beyrek, eğer bunu okuyorsan, seni seviyorum! 💕</small>
            </p>

            <div className="post-tags">
              <span className="post-tag">#BamsıBeyrek</span>
              <span className="post-tag">#Dönüş</span>
              <span className="post-tag">#Aşk</span>
              <span className="post-tag">#Umut</span>
              <span className="post-tag">#YeniBaşlangıç</span>
            </div>

            <div className="post-navigation">
              <Link to="/banu" className="nav-link">← Önceki Yazı</Link>
              <Link to="/" className="nav-link">Tüm Yazılar →</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
