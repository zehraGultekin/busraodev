# Canlıya Alma Rehberi

## Seçenek 1: Surge.sh (En Kolay - 2 dakika)

1. Terminal'de şu komutu çalıştırın:
```bash
npm run build
surge dist
```

2. İlk kez kullanıyorsanız email ve şifre girin (ücretsiz kayıt)
3. Domain adı istenirse: `banu-cicek-blog.surge.sh` yazın
4. Linkiniz hazır: `https://banu-cicek-blog.surge.sh`

## Seçenek 2: Netlify (Ücretsiz)

1. https://app.netlify.com adresine gidin
2. "Add new site" > "Deploy manually" seçin
3. `dist` klasörünü sürükle-bırak yapın
4. Linkiniz hazır!

## Seçenek 3: GitHub Pages

1. Projeyi GitHub'a yükleyin
2. Settings > Pages > Source: `gh-pages` branch seçin
3. Linkiniz: `https://kullaniciadi.github.io/banu-blog`

## Seçenek 4: Cloudflare Pages (Ücretsiz)

1. https://pages.cloudflare.com adresine gidin
2. GitHub repo'nuzu bağlayın
3. Build command: `npm run build`
4. Output directory: `dist`
5. Linkiniz hazır!

