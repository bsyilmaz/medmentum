# Medmentum - Kurulum Rehberi

Bu rehber, Medmentum projesini sıfırdan kurmanız ve çalıştırmanız için adım adım talimatlar içerir.

## 📋 Gereksinimler

- Node.js 18+ ve npm
- Bir Supabase hesabı (ücretsiz)
- Modern bir web tarayıcısı
- Bir kod editörü (VS Code önerilir)

## 🚀 Kurulum Adımları

### 1. Proje Dosyalarını Hazırlayın

Proje dosyaları zaten hazır durumda. Terminal'i açın ve proje klasörüne gidin:

```bash
cd /Users/bayramselimyilmaz/Desktop/medmentum
```

### 2. Bağımlılıkları Yükleyin

Tüm gerekli paketler zaten yüklenmiş durumda. Eğer tekrar yüklemek isterseniz:

```bash
npm install
```

### 3. Supabase Projesini Oluşturun

1. [supabase.com](https://supabase.com) adresine gidin
2. "Start your project" butonuna tıklayın (ücretsiz hesap oluşturun)
3. "New Project" butonuna tıklayın
4. Proje bilgilerinizi girin:
   - Name: `medmentum`
   - Database Password: Güçlü bir şifre oluşturun (kaydedin!)
   - Region: Size en yakın bölgeyi seçin
5. "Create new project" butonuna tıklayın
6. Proje oluşturulurken bekleyin (1-2 dakika sürebilir)

### 4. Supabase Bilgilerinizi Alın

1. Supabase Dashboard'da projeniz açıkken, sol menüden **Settings** > **API** seçeneğine gidin
2. Aşağıdaki bilgileri kopyalayın:
   - **Project URL** (VITE_SUPABASE_URL için)
   - **anon public** key (VITE_SUPABASE_ANON_KEY için)

### 5. Environment Variables'ı Ayarlayın

**ÖNEMLİ:** Proje klasöründe `.env.example` dosyası bulunuyor. Bu dosyadan bir `.env` dosyası oluşturun:

```bash
# .env dosyasını oluşturun (Mac/Linux)
cp .env.example .env

# Windows PowerShell için
copy .env.example .env
```

Ardından `.env` dosyasını editörünüzle açın ve Supabase bilgilerinizi girin:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 6. Veritabanını Kurun

1. Supabase Dashboard'da, sol menüden **SQL Editor** seçeneğine gidin
2. "New query" butonuna tıklayın
3. Proje klasöründeki `supabase-setup.sql` dosyasının içeriğini kopyalayın
4. SQL Editor'e yapıştırın
5. "Run" (Çalıştır) butonuna tıklayın
6. Başarılı mesajını görmelisiniz!

### 7. Admin Kullanıcısı Oluşturun

1. Supabase Dashboard'da, sol menüden **Authentication** > **Users** seçeneğine gidin
2. "Add user" butonuna tıklayın
3. "Create new user" sekmesinde:
   - Email: `admin@medmentum.com`
   - Password: Güçlü bir şifre girin (kaydedin!)
   - "Auto Confirm User" seçeneğini işaretleyin
4. "Create user" butonuna tıklayın

### 8. Projeyi Çalıştırın

Development server'ı başlatın:

```bash
npm run dev
```

Terminal'de şuna benzer bir çıktı görmelisiniz:

```
  VITE v7.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 9. Siteyi Açın

Tarayıcınızda şu adrese gidin: **http://localhost:5173/**

Artık siteniz çalışıyor! 🎉

## 🔐 Admin Paneline Giriş

1. Tarayıcıda **http://localhost:5173/admin/login** adresine gidin
2. Oluşturduğunuz admin bilgileriyle giriş yapın:
   - Email: `admin@medmentum.com`
   - Password: Ayarladığınız şifre

## 📱 Sayfa Yapısı

### Public Sayfalar (Herkes erişebilir)
- **Ana Sayfa**: http://localhost:5173/
- **Ürünler**: http://localhost:5173/products
- **Blog**: http://localhost:5173/blog
- **Ekip**: http://localhost:5173/team
- **İletişim**: http://localhost:5173/contact

### Admin Sayfalar (Giriş gerekli)
- **Login**: http://localhost:5173/admin/login
- **Dashboard**: http://localhost:5173/admin/dashboard
- **Blog Yönetimi**: http://localhost:5173/admin/blogs
- **Ürün Güncellemeleri**: http://localhost:5173/admin/updates

## 🎨 Renkleri Özelleştirme

`tailwind.config.js` dosyasını açın ve `colors` bölümünü düzenleyin:

```javascript
colors: {
  primary: {
    500: '#06b6d4',  // Ana renk
    600: '#0891b2',
  },
  // ... diğer renkler
}
```

## 📝 İçerik Düzenleme

### Statik İçerik
- **Ana Sayfa**: `src/pages/Home.jsx`
- **Ekip**: `src/pages/Team.jsx`
- **İletişim**: `src/pages/Contact.jsx`

### Dinamik İçerik (Admin Panel ile)
- **Blog**: Admin panelden ekleyin/düzenleyin
- **Ürün Güncellemeleri**: Admin panelden ekleyin/düzenleyin

## 🚀 Production Build

Site hazır olduğunda production build alın:

```bash
npm run build
```

Build dosyaları `dist/` klasörüne oluşturulacak.

## 🌐 Deploy Etme

### Vercel (Önerilen)

1. [vercel.com](https://vercel.com) adresine gidin
2. GitHub'a repo oluşturun ve push edin
3. Vercel'de "Import Project" seçin
4. Environment Variables'ı ekleyin:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Deploy edin!

### Netlify

1. `npm run build` komutunu çalıştırın
2. [netlify.com](https://netlify.com) adresine gidin
3. `dist/` klasörünü sürükleyip bırakın
4. Environment Variables'ı Site Settings'ten ekleyin

## 🐛 Sorun Giderme

### "Supabase URL/Key gerekli" hatası
- `.env` dosyasının var olduğundan emin olun
- Değerlerin doğru kopyalandığını kontrol edin
- Development server'ı yeniden başlatın

### Admin paneline giriş yapamıyorum
- Supabase'de kullanıcının oluşturulduğunu kontrol edin
- Email ve şifrenin doğru olduğundan emin olun
- "Auto Confirm User" işaretliydi mi kontrol edin

### Sayfa yüklenmiyor / beyaz ekran
- Browser console'u açın (F12) ve hataları kontrol edin
- Development server'ın çalıştığından emin olun
- `npm install` komutunu tekrar çalıştırın

### Animasyonlar çalışmıyor
- Framer Motion'ın yüklü olduğunu kontrol edin: `npm list framer-motion`
- Tarayıcınızı yenileyin (Cmd+Shift+R / Ctrl+Shift+R)

## 📞 Destek

Herhangi bir sorun yaşarsanız:

1. `README.md` dosyasını okuyun
2. Browser console'da hataları kontrol edin
3. Supabase Dashboard'da SQL Editor'deki hataları kontrol edin
4. GitHub Issues'da benzer sorunları arayın

## ✅ Checklist

- [ ] Node.js ve npm yüklü
- [ ] Bağımlılıklar yüklendi (`npm install`)
- [ ] Supabase projesi oluşturuldu
- [ ] `.env` dosyası oluşturuldu ve dolduruldu
- [ ] Veritabanı tabloları oluşturuldu (`supabase-setup.sql`)
- [ ] Admin kullanıcısı oluşturuldu
- [ ] Development server çalışıyor (`npm run dev`)
- [ ] Site tarayıcıda açılıyor
- [ ] Admin paneline giriş yapılabiliyor

Tebrikler! Medmentum siteniz artık hazır! 🎉

