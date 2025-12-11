import "../styles/Post.css";
import { Link } from "react-router-dom";

export default function Post13() {
  return (
    <div className="post-page">
      <article className="post-container">
        <div className="post-header">
          <div className="post-image-wrapper">
            <img 
              src="/images/banucicek1.png" 
              alt="Bamsı ve Banu" 
              className="post-image"
              loading="lazy"
            />
            <div className="post-header-overlay"></div>
          </div>
          <div className="post-meta-header">
            <div className="post-meta">
              <span className="post-date">📅 30 Mart 2024</span>
              <span className="post-category">Aşk & Hayat</span>
            </div>
            <div className="post-author">
              <span className="author-icon">👸</span>
              <span className="author-name">Banu Çiçek</span>
            </div>
          </div>
        </div>

        <div className="post-content">
          <div className="post-title-section">
            <h1>Şirket Açılışı ve Evlilik Teklifi 💍</h1>
            <div className="post-divider"></div>
          </div>
          
          <div className="post-body">
            <p className="lead">
              Zorlukları yendik, birbirimizi kaybetmedik. Bir gün merkezimizin açılış 
              töreninde Bamsı tüm kalabalığın ortasında diz çöktü: "Benimle bir ömür 
              destan yazmak ister misin?"
            </p>

            <p>
              Merhaba! Bugün size hayatımın en özel günlerinden birini anlatacağım. 
              Bu, belki de hayatımdaki en mutlu anlardan biriydi.
            </p>

            <h3>🎉 Merkez Açılışı</h3>
            <p>
              Bamsı ile birlikte kurduğumuz "Beyrek & Çiçek Gençlik ve Teknoloji Merkezi"nin 
              açılış töreni vardı. Tüm arkadaşlarımız, ailelerimiz, destekçilerimiz oradaydı. 
              Merkezimiz, gençlere teknoloji ve spor eğitimi veriyordu. Bu, bizim hayalimizdi, 
              bizim sözümüzdü.
            </p>

            <div className="quote-box">
              <div className="quote-icon">💭</div>
              <p className="quote-text">
                "Tüm kalabalığın ortasında, Bamsı durdu. Bana baktı, gülümsedi. 
                Sonra diz çöktü. Kalbim yerinden çıkacak gibiydi."
              </p>
            </div>

            <h3>💍 Evlilik Teklifi</h3>
            <p>
              Törenin en özel anında, Bamsı tüm kalabalığın ortasında durdu. Bana 
              baktı, gülümsedi. Sonra diz çöktü. "Banu Çiçek, benimle bir ömür destan 
              yazmak ister misin?" dedi.
            </p>

            <p>
              O an, hayatımın en özel anıydı. Gözyaşlarıma boğuldum. Gülerek cevap verdim: 
              "Zaten çoktan başladık." Evet, hikayemiz çoktan başlamıştı.
            </p>

            <div className="highlight-box highlight-success">
              <h3>💕 Yeni Bir Başlangıç</h3>
              <p>
                "Zaten çoktan başladık" dedim gülerek. Evet, hikayemiz çoktan 
                başlamıştı. Teknoloji zirvesinde tanışmamızla, ortak hayalimizle, 
                kaçırılmasıyla, kurtuluşuyla, merkez kurmamızla... Tüm bunlar, 
                bizim hikayemizdi. Ve şimdi, evlilikle taçlanıyor.
              </p>
            </div>

            <h3>🌟 Gelecek</h3>
            <p>
              Şimdi, birlikte yeni bir hayat yazıyoruz. Evlilik hayatımız. 
              Birlikte büyüyeceğiz, birlikte başaracağız, birlikte mutlu olacağız. 
              Merkezimizde gençlere yardım etmeye devam edeceğiz.
            </p>

            <p>
              Zorlukları yendik, birbirimizi kaybetmedik. Aşkımız, zamanın testinden 
              geçti ve kazandı. Şimdi, birlikte yeni bir hayat kuruyoruz.
            </p>

            <div className="quote-box quote-box-alt">
              <div className="quote-icon">✨</div>
              <p className="quote-text">
                "Teknoloji zirvesinde başladı, ortak hayalle sözleşti, kaçırılmayla 
                sınandı, kurtuluşla güçlendi, merkezle büyüdü, evlilikle taçlandı."
              </p>
            </div>

            <p>
              Bu blog, bizim hikayemiz. Her anı, her duygusu burada. Ve şimdi, 
              yeni bir bölüm başlıyor. Evlilik bölümü.
            </p>

            <p className="signature">
              Sevgilerle,<br />
              Banu Çiçek 💕<br />
              <small>P.S. Bamsı, seni çok seviyorum! Birlikte yeni bir destan 
              yazıyoruz! 💍✨</small>
            </p>

            <div className="post-tags">
              <span className="post-tag">#EvlilikTeklifi</span>
              <span className="post-tag">#MerkezAçılışı</span>
              <span className="post-tag">#BamsıBeyrek</span>
              <span className="post-tag">#Hikayemiz</span>
              <span className="post-tag">#Mutluluk</span>
            </div>

            <div className="post-navigation">
              <Link to="/post6" className="nav-link">← Önceki Yazı</Link>
              <Link to="/" className="nav-link">Tüm Yazılar →</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

