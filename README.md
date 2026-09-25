# İlaç Pro veri

T.C. Sağlık Bakanlığı TİTCK Kullanma Talimatı metinleri (bölümlere ayrılmış, olduğu gibi). İlaç Pro uygulaması KT'yi buradan okur.

- `kt/<id>.json` — bir Kullanma Talimatı (baslik, bolumler, kalite, kaynak PDF bağlantısı)
- `surum.json` — yayın tarihi ve sayılar

Üretim: ilaçpro deposunda `pipeline/25-kt-yayinla.js`.

## İlaç sayfaları (`ilac/<barkod>.html`)

Her ruhsatlı ilaç için resmî Kullanma Talimatı sayfası: "Ne için kullanılır" satır içi, diğer bölümler `kt/<id>.json`'dan yüklenir; metin TİTCK KT'sinden olduğu gibi, yorum yok. Uygulamadaki "Gönder" bu bağlantıyı paylaşır; `indir/` iniş sayfası (`?kod=` ile yakın kodu gösterir); `sitemap-ilac.xml` + `robots.txt`. Üretim: ilaçpro deposunda `pipeline/41-ilac-sayfalari.js`.
