# 🚀 Medmentum - Hızlı Başlangıç

Bu rehber, projeyi 5 dakikada çalıştırmanız için en hızlı yolu gösterir.

## ⚡ Hızlı Başlangıç (Development)

### 1. Supabase'i Atlayarak Başlayın (Demo Mode)

Proje şu anda **mock data** ile çalışacak şekilde ayarlanmış. Supabase olmadan da test edebilirsiniz!

```bash
# Terminal'i açın ve proje dizinine gidin
cd /Users/bayramselimyilmaz/Desktop/medmentum

# Bağımlılıklar zaten yüklü, ama kontrol için:
npm install

# Development server'ı başlatın
npm run dev
```

**Tarayıcıda açın:** http://localhost:5173/

✅ Site çalışıyor! Tüm sayfaları gezebilirsiniz.

### 2. Admin Paneli Test Etmek İçin

Admin panel **authentication** gerektirdiği için, gerçek Supabase kurulumu yapmanız gerekiyor.

**VEYA** geçici olarak, admin sayfalarına doğrudan erişmek için `ProtectedRoute` komponentini atlayabilirsiniz (sadece development için):

`src/App.jsx` dosyasında:
```jsx
// Geçici olarak ProtectedRoute'u kaldırın
<Route path="/admin/dashboard" element={<Dashboard />} />
<Route path="/admin/blogs" element={<BlogManagement />} />
<Route path="/admin/updates" element={<UpdateManagement />} />
```

## 📋 Tam Kurulum (Production için)

Eğer gerçek production versiyonu istiyorsanız, `SETUP_GUIDE.md` dosyasını takip edin:

1. ✅ Proje dosyaları hazır
2. ⏭️ Supabase projesi oluştur (5 dakika)
3. ⏭️ `.env` dosyası oluştur
4. ⏭️ Veritabanı kurulumu (2 dakika)
5. ⏭️ Admin kullanıcısı oluştur

**Detaylı adımlar için:** `SETUP_GUIDE.md`

## 🎯 Ne Yapabilirsiniz?

### Public Sayfalar (Herkes İçin)
- ✅ **Ana Sayfa**: Animasyonlu hero, özellikler, istatistikler
- ✅ **Ürünler**: 6 ürün, modal detaylar, update timeline
- ✅ **Blog**: Blog listesi ve detay sayfaları
- ✅ **Ekip**: Team üyeleri, hover efektleri
- ✅ **İletişim**: Form, harita, iletişim bilgileri

### Admin Sayfalar (Giriş Gerekli)
- 🔒 **Dashboard**: İstatistikler, quick actions
- 🔒 **Blog Yönetimi**: CRUD operations
- 🔒 **Ürün Güncellemeleri**: Timeline management

## 🎨 Özelleştirme

### Renkleri Değiştir

`tailwind.config.js` dosyasını açın:
```javascript
colors: {
  primary: {
    500: '#06b6d4',  // Buraya yeni renginizi yazın
    // ...
  }
}
```

### İçerik Değiştir

- **Ana Sayfa**: `src/pages/Home.jsx`
- **Ekip**: `src/pages/Team.jsx` (team array'ini düzenleyin)
- **İletişim**: `src/pages/Contact.jsx`

## 🚀 Production Build

```bash
npm run build
```

`dist/` klasörü oluşacak. Bu klasörü:
- Vercel'e deploy edin
- Netlify'a deploy edin
- Kendi sunucunuza yükleyin

## 📚 Daha Fazla Bilgi

- 📖 **Detaylı Kurulum**: `SETUP_GUIDE.md`
- 🎨 **Tüm Özellikler**: `FEATURES.md`
- 📝 **Genel Bilgi**: `README.md`

## 🆘 Sorun mu var?

### Site açılmıyor
```bash
# Port kullanımda olabilir, farklı port deneyin
npm run dev -- --port 3000
```

### Beyaz ekran görüyorum
```bash
# Cache'i temizle ve yeniden başlat
rm -rf node_modules
npm install
npm run dev
```

### Animasyonlar yavaş
- Tarayıcınızı güncelleyin
- Hardware acceleration'ı aktif edin
- Başka sekmeleri kapatın

## ✅ Hızlı Checklist

- [x] Proje indirildi
- [x] Bağımlılıklar yüklendi
- [x] Development server çalışıyor
- [x] Site tarayıcıda açık
- [ ] Supabase kurulumu (opsiyonel, demo için gerekli değil)
- [ ] Production build (deploy için gerekli)

---

**Tebrikler!** 🎉 Medmentum siteniz çalışıyor!

Şimdi sayfaları gezin, animasyonları test edin ve içeriği özelleştirin.

