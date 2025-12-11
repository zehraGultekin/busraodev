import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/AIChat.css";

export default function AIChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Merhaba! Ben Banu Çiçek. Bamsı Beyrek hakkında bana soru sorabilirsin. Ne öğrenmek istersin? 💕"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Banu Çiçek'in Bamsı Beyrek hakkında vereceği samimi yanıtlar - Modern Bamsı Beyrek Destanı'na göre
  const getBanuResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Banu Çiçek'in Bamsı Beyrek hakkında vereceği samimi yanıtlar
    // Önerilen sorulara özel pattern'ler
    if (lowerMessage.includes("bamsı ile nasıl tanıştınız") || lowerMessage.includes("tanışma") || lowerMessage.includes("tanıştınız") || lowerMessage.includes("nasıl tanıştınız") || lowerMessage.includes("ilk tanışma")) {
      return "İstanbul'da düzenlenen Oğuz Teknoloji ve Girişimcilik Zirvesi'nde okçuluk gösterisi yapıyordum. Gösteri sonrası Bamsı yanıma geldi. 'Gösteriniz çok güzeldi. Ben Bamsı Beyrek' dedi. O an, hayatımın değiştiği andı. 💕";
    }
    if (lowerMessage.includes("bamsı neden kaçırıldı") || lowerMessage.includes("kaçırıldı") || lowerMessage.includes("kaçırılış") || (lowerMessage.includes("neden") && lowerMessage.includes("kaçır"))) {
      return "Bamsı siber güvenlik eğitimi için şehir dışına gitti. Dönüş yolunda yasa dışı bir grup tarafından kaçırıldı. Dağlık bir tesise götürüldü, iletişimi tamamen kesildi. Ülkede #BeyrekiBulun etiketi gündem oldu. 💔";
    }
    if (lowerMessage.includes("bamsı nasıl kurtuldu") || lowerMessage.includes("kaçtı") || lowerMessage.includes("kurtuldu") || lowerMessage.includes("nasıl kurtuldu")) {
      return "Bamsı tutsakken asla pes etmedi. Güvenlik sisteminin açığını buldu, yazdığı kodlarla kapıları devre dışı bırakarak kaçtı. Yoldan geçen bir kamyon şoförü onu bulup polise teslim etti. Böylece herkes Bamsı'nın hayatta olduğunu öğrendi. 💪";
    }
    if (lowerMessage.includes("bamsı geri döndü mü") || (lowerMessage.includes("geri") && lowerMessage.includes("döndü")) || lowerMessage.includes("dönecek")) {
      return "Evet! Bamsı geri döndü. Bir gece telefonum çaldı, o sesi tanıdım hemen. 'Merhaba Banu, ben Bamsı. Kurtuldum, geri döndüm' dedi. O an ne hissettim bilir misiniz? Önce şok, sonra sevinç, sonra gözyaşları... 💕";
    }
    if (lowerMessage.includes("bamsı seni seviyor mu") || (lowerMessage.includes("seviyor") && lowerMessage.includes("mu")) || lowerMessage.includes("seni seviyor")) {
      return "Evet, Bamsı beni seviyor. 'Artık hiçbir yol bizi ayıramaz' diyerek birbirimize söz verdik. Aşkımız, tüm zorlukları aştı. Kaçırılma, ayrılık, kıskançlık... Hiçbiri bizi ayıramadı. Artık birlikte, güçlü bir şekilde ilerliyoruz. 💖";
    }
    if (lowerMessage.includes("bamsı nasıl biri") || lowerMessage.includes("karakter") || lowerMessage.includes("kişiliği")) {
      return "Bamsı çok güçlü, kararlı ve azimli bir insan. Tutsakken bile pes etmedi, güvenlik sistemini hack ederek kaçtı. Teknoloji konusunda çok yetenekli. Aynı zamanda çok iyi kalpli, gençlere yardım etmeyi seviyor. Beni çok seviyor ve ben de onu çok seviyorum. 💖";
    }
    if (lowerMessage.includes("yaltacuk kimdir") || lowerMessage.includes("yaltacuk") || lowerMessage.includes("rakip")) {
      return "Yaltacuk, Bamsı'nın rakibiydi. Teknoloji dünyasında ikisi de genç girişimciler arasında öne çıkıyordu. Ama Bamsı'nın başarısı Yaltacuk'u kızdırdı. O, Bamsı'nın projelerini baltalamaya çalışıyordu. Bamsı döndüğünde Yaltacuk medyada kendini kahraman gibi tanıtmıştı ama gerçekler ortaya çıktı ve cezalandırıldı. ⚖️";
    }
    if (lowerMessage.includes("kazan bey kimdir") || lowerMessage.includes("kazan bey") || lowerMessage.includes("kazan")) {
      return "Kazan Bey, devlet danışmanı. Bamsı'yı bulmak için bize destek verdi. Kız kardeşlerim ve ben, okçuluk yeteneklerimiz ve teknoloji bilgimizle dağ taş onu ararken Kazan Bey de tüm kaynaklarını kullanıyordu. Onun desteği çok önemliydi. 🏹";
    }
    if (lowerMessage.includes("ortak hayaliniz neydi") || lowerMessage.includes("ortak hayal") || (lowerMessage.includes("hayal") && lowerMessage.includes("neydi")) || lowerMessage.includes("söz")) {
      return "Bir gün Bamsı bana bir şey söyledi: 'Banu, gençlere yönelik bir teknoloji ve spor merkezi kurmak istiyorum. Senin okçuluk yeteneklerin, benim teknoloji bilgim... Birlikte harika bir şey yapabiliriz.' O gün, birbirimize söz verdik. Ve şimdi o hayali gerçekleştirdik! 💭";
    }
    if (lowerMessage.includes("merkez nasıl kuruldu") || (lowerMessage.includes("merkez") && lowerMessage.includes("nasıl")) || lowerMessage.includes("teknoloji merkezi") || lowerMessage.includes("spor merkezi")) {
      return "Birlikte 'Beyrek & Çiçek Gençlik ve Teknoloji Merkezi'ni kurduk. Bu, ilk tanıştığımızda paylaştığımız hayalimizdi. Gençlere teknoloji eğitimi, spor eğitimi veriyoruz. Bamsı teknoloji kısmını, ben spor kısmını yönetiyorum. Birlikte, omuz omuza çalışıyoruz. 🏢";
    }
    if (lowerMessage.includes("evlilik teklifi nasıl oldu") || lowerMessage.includes("evlilik teklifi") || (lowerMessage.includes("evlilik") && lowerMessage.includes("teklif"))) {
      return "Merkezimizin açılış töreninde, tüm kalabalığın ortasında Bamsı durdu. Bana baktı, gülümsedi. Sonra diz çöktü. 'Banu Çiçek, benimle bir ömür destan yazmak ister misin?' dedi. O an, hayatımın en özel anıydı. Gözyaşlarıma boğuldum. 'Zaten çoktan başladık' dedim gülerek. 💍";
    }
    if (lowerMessage.includes("bamsı gittiğinde ne yaptınız") || (lowerMessage.includes("gittiğinde") && lowerMessage.includes("ne")) || lowerMessage.includes("gittiğinde ne hissettiniz")) {
      return "Bamsı gittiğinde çok acı çektim. Kalbim paramparça oldu. Her gün onu bekledim, her telefon çaldığında onun olduğunu düşündüm. Kız kardeşlerim ve ben onu aramak için dağ taş dolaştık. Ama umudumu kaybetmedim. Ve şimdi geri döndü! 💕";
    }
    if (lowerMessage.includes("bamsı geri döndüğünde ne hissettiniz") || (lowerMessage.includes("geri döndüğünde") && lowerMessage.includes("ne")) || lowerMessage.includes("döndüğünde ne yaptınız")) {
      return "Bamsı geri döndüğünde çok sevindim! Onu tekrar görmek, konuşmak... Her şey çok güzeldi. Ama aynı zamanda kızgındım. 'Keşke bana bir şey olursa diye bir plan bıraksaydın' dedim. Bamsı başını eğdi: 'Haklısın. Artık hiçbir şeyi ertelemeyeceğim.' Şimdi birlikte merkezimizi yönetiyoruz. 🌟";
    }
    if (lowerMessage.includes("kız kardeşleriniz kimler") || lowerMessage.includes("kız kardeş") || lowerMessage.includes("kardeşlerin")) {
      return "Kız kardeşlerim de yanımda. Birlikte, güçlü bir şekilde Bamsı'yı aradık. Her birimiz farklı yeteneklerimizi kullanıyoruz. Okçuluk yeteneklerimiz ve teknoloji bilgimizle dağ taş onu aradık. Birlikte, onu bulacağımıza inandık. 👭";
    }
    if (lowerMessage.includes("merkezde ne yapıyorsunuz") || lowerMessage.includes("merkezde ne yapıyor") || lowerMessage.includes("merkezde çalışma")) {
      return "Merkezimizde gençlere teknoloji eğitimi veriyoruz. Siber güvenlik, yazılım geliştirme, robotik... Bamsı teknoloji kısmını yönetiyor. Ben de spor kısmını, özellikle okçuluk eğitimini yönetiyorum. Birlikte, gençlere yardım ediyoruz. Her gün onlarla çalışmak çok güzel. 🏢";
    }
    if (lowerMessage.includes("bamsı ile en mutlu anınız nedir") || lowerMessage.includes("en mutlu anınız") || (lowerMessage.includes("mutlu") && lowerMessage.includes("anınız"))) {
      return "Bamsı ile en mutlu anım, merkez açılışında evlilik teklifi aldığım andı. Tüm kalabalığın ortasında diz çöktü ve 'Benimle bir ömür destan yazmak ister misin?' dedi. O an, dünyanın en mutlu insanıydım. Şimdi de her gün onunla geçirdiğim her an mutluluk veriyor. 💕";
    }
    if (lowerMessage.includes("gelecek planlarınız neler") || lowerMessage.includes("gelecek planlarınız") || (lowerMessage.includes("planlarınız") && lowerMessage.includes("neler"))) {
      return "Bamsı ile gelecekten konuşuyoruz. Merkezimizde gençlere yardım etmeye devam edeceğiz. Birlikte büyüyeceğiz, birlikte başaracağız, birlikte mutlu olacağız. Artık hiçbir yol bizi ayıramaz. Umut dolu! ✨";
    }
    if (lowerMessage.includes("bamsı'nın en sevdiğiniz özelliği nedir") || lowerMessage.includes("sevdiğiniz özelliği") || lowerMessage.includes("en sevdiğiniz") || lowerMessage.includes("favori özelliği")) {
      return "Bamsı'nın en sevdiğim özelliği, onun güçlü karakteri ve azmi. Tutsakken bile pes etmedi, güvenlik sistemini hack ederek kaçtı. Ayrıca çok iyi kalpli, gençlere yardım etmeyi seviyor. Bana karşı çok nazik ve anlayışlı. Gülümsemesi çok güzel, kalbimi eritiyor. 💖";
    }
    if (lowerMessage.includes("mutlu musunuz") || lowerMessage.includes("mutlu musun")) {
      return "Evet, çok mutluyum! Bamsı geri döndü, birlikte merkezimizi kurduk ve evlilik teklifi aldım. Her gün onunla geçirdiğim anlar, hayatıma anlam katıyor. Çok mutluyum! 💕";
    }
    
    // Genel Bamsı soruları
    if (lowerMessage.includes("bamsı") || lowerMessage.includes("beyrek")) {
      // Genel Bamsı soruları için fallback
      if (lowerMessage.includes("seviyor") || lowerMessage.includes("sevdiği") || lowerMessage.includes("aşk")) {
        return "Evet, Bamsı beni seviyor. 'Artık hiçbir yol bizi ayıramaz' diyerek birbirimize söz verdik. Aşkımız, tüm zorlukları aştı. Kaçırılma, ayrılık, kıskançlık... Hiçbiri bizi ayıramadı. Artık birlikte, güçlü bir şekilde ilerliyoruz. 💖";
      }
      if (lowerMessage.includes("hobi") || lowerMessage.includes("hobileri") || lowerMessage.includes("ne yapıyor")) {
        return "Bamsı teknoloji projeleriyle uğraşıyor, gençlere siber güvenlik eğitimi veriyor. Ben de okçuluk eğitimi veriyorum. Birlikte merkezimizde çalışıyoruz. Onunla her şey daha güzel. 💕";
      }
      return "Bamsı benim için çok özel bir insan. Onu çok seviyorum ve şimdi birlikte yeni bir hayat kuruyoruz. Hakkında başka ne öğrenmek istersin? 💕";
    }
    
    if (lowerMessage.includes("merhaba") || lowerMessage.includes("selam")) {
      return "Merhaba! Ben Banu Çiçek. Bamsı Beyrek hakkında bana soru sorabilirsin. Ne öğrenmek istersin? 💕";
    }
    
    if (lowerMessage.includes("aşk") || lowerMessage.includes("sevgi")) {
      return "Aşk bazen zor olur, bazen acı verir. Bamsı kaçırıldığında çok acı çektim. Ama gerçek aşk her şeye değer. Bamsı'yı çok seviyorum ve o da beni seviyor. Birlikte tüm zorlukları aştık. Artık hiçbir yol bizi ayıramaz. 💖";
    }
    
    if (lowerMessage.includes("umut") || lowerMessage.includes("gelecek")) {
      return "Umut her zaman var! Bamsı geri döndü, birlikte merkezimizi kurduk ve evlilik teklifi aldım. Gelecek güzel olacak, buna inanıyorum. Birlikte gençlere yardım edeceğiz. 🌈";
    }
    
    if (lowerMessage.includes("teşekkür") || lowerMessage.includes("sağol")) {
      return "Rica ederim! Bamsı hakkında başka bir sorun varsa çekinme sor. Her zaman buradayım. 💕";
    }
    
    if (lowerMessage.includes("nasılsın") || lowerMessage.includes("iyi misin")) {
      return "Çok iyiyim! Bamsı geri döndü, birlikte merkezimizi kurduk ve evlilik teklifi aldım. Çok mutluyum. Hayat çok güzel. 💕";
    }
    
    // Genel yanıt
    return "Bamsı Beyrek hakkında daha spesifik bir soru sorabilir misin? Örneğin: 'Bamsı ile nasıl tanıştınız?', 'Bamsı neden kaçırıldı?', 'Bamsı nasıl kurtuldu?', 'Yaltacuk kimdir?', 'Merkez nasıl kuruldu?', 'Evlilik teklifi nasıl oldu?' gibi. 💕";
  };

  const handleSend = async (e) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    // Kullanıcı mesajını ekle
    const newUserMessage = {
      role: "user",
      content: userMessage
    };
    setMessages(prev => [...prev, newUserMessage]);

    // Banu'nun yanıtını simüle et
    setTimeout(() => {
      const banuResponse = getBanuResponse(userMessage);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: banuResponse
      }]);
      setIsLoading(false);
    }, 800); // Kısa bir gecikme ile daha gerçekçi görünsün
  };

  const handleSuggestionClick = (question) => {
    setInput(question);
    // Kısa bir gecikme sonrası otomatik gönder
    setTimeout(() => {
      const userMessage = question;
      setInput("");
      setIsLoading(true);

      // Kullanıcı mesajını ekle
      const newUserMessage = {
        role: "user",
        content: userMessage
      };
      setMessages(prev => [...prev, newUserMessage]);

      // Banu'nun yanıtını simüle et
      setTimeout(() => {
        const banuResponse = getBanuResponse(userMessage);
        setMessages(prev => [...prev, {
          role: "assistant",
          content: banuResponse
        }]);
        setIsLoading(false);
      }, 800);
    }, 100);
  };

  return (
    <div className="ai-chat-page">
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-header-content">
            <div className="chat-avatar">👸</div>
            <div>
              <h1>Banu Çiçek</h1>
              <p>Bana Bamsı Beyrek hakkında soru sorabilirsin</p>
            </div>
          </div>
          <Link to="/" className="back-to-blog">← Blog'a Dön</Link>
        </div>

        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <div className="message-avatar">
                {message.role === "user" ? "👤" : "👸"}
              </div>
              <div className="message-content">
                <p>{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message assistant">
              <div className="message-avatar">👸</div>
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-form" onSubmit={handleSend}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Banu'ya Bamsı Beyrek hakkında soru sor..."
            className="chat-input"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="send-button"
            disabled={isLoading || !input.trim()}
          >
            <span>Gönder</span>
            <span className="send-icon">→</span>
          </button>
        </form>

        <div className="chat-suggestions">
            <p className="suggestions-title">💡 Önerilen Sorular:</p>
            <div className="suggestion-buttons">
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Bamsı ile nasıl tanıştınız?")}
              >
                Bamsı ile nasıl tanıştınız?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Bamsı neden kaçırıldı?")}
              >
                Bamsı neden kaçırıldı?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Bamsı nasıl kurtuldu?")}
              >
                Bamsı nasıl kurtuldu?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Bamsı geri döndü mü?")}
              >
                Bamsı geri döndü mü?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Bamsı seni seviyor mu?")}
              >
                Bamsı seni seviyor mu?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Bamsı nasıl biri?")}
              >
                Bamsı nasıl biri?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Yaltacuk kimdir?")}
              >
                Yaltacuk kimdir?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Kazan Bey kimdir?")}
              >
                Kazan Bey kimdir?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Ortak hayaliniz neydi?")}
              >
                Ortak hayaliniz neydi?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Merkez nasıl kuruldu?")}
              >
                Merkez nasıl kuruldu?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Evlilik teklifi nasıl oldu?")}
              >
                Evlilik teklifi nasıl oldu?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Bamsı gittiğinde ne yaptınız?")}
              >
                Bamsı gittiğinde ne yaptınız?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Bamsı geri döndüğünde ne hissettiniz?")}
              >
                Bamsı geri döndüğünde ne hissettiniz?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Kız kardeşleriniz kimler?")}
              >
                Kız kardeşleriniz kimler?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Merkezde ne yapıyorsunuz?")}
              >
                Merkezde ne yapıyorsunuz?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Bamsı ile en mutlu anınız nedir?")}
              >
                Bamsı ile en mutlu anınız nedir?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Gelecek planlarınız neler?")}
              >
                Gelecek planlarınız neler?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Bamsı'nın en sevdiğiniz özelliği nedir?")}
              >
                Bamsı'nın en sevdiğiniz özelliği nedir?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSuggestionClick("Mutlu musunuz?")}
              >
                Mutlu musunuz?
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}
