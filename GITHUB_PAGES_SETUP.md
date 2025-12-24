# GitHub Pages Setup - Growzy Legal Pages

Bu dosyalar GitHub Pages ile host edilecek ve App Store Connect'te kullanılacak.

## 📋 Adımlar

### 1. GitHub Repository Oluştur

1. GitHub'da yeni bir repository oluştur:
   - Repository adı: `growzy-legal` (veya istediğin isim)
   - Public olmalı (GitHub Pages ücretsiz için)
   - README ekleme

### 2. Dosyaları Yükle

Bu klasördeki dosyaları repository'ye yükle:
- `privacy-policy.html` → `privacy.html` olarak
- `terms.html` → `terms.html` olarak  
- `support.html` → `support.html` olarak

### 3. GitHub Pages Aktif Et

1. Repository → **Settings**
2. Sol menüden **Pages** seç
3. **Source**: `Deploy from a branch` seç
4. **Branch**: `main` (veya `master`)
5. **Folder**: `/ (root)`
6. **Save**

### 4. URL'leri Al

GitHub Pages URL formatı:
```
https://KULLANICI_ADI.github.io/growzy-legal/privacy.html
https://KULLANICI_ADI.github.io/growzy-legal/terms.html
https://KULLANICI_ADI.github.io/growzy-legal/support.html
```

### 5. Custom Domain (Opsiyonel)

Eğer kendi domain'in varsa:
1. Repository → Settings → Pages
2. **Custom domain** alanına domain'ini gir
3. DNS ayarlarını yap:
   - A record: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - CNAME: `KULLANICI_ADI.github.io`

## 🔗 App Store Connect'te Kullanım

### Privacy Policy URL
```
https://KULLANICI_ADI.github.io/growzy-legal/privacy.html
```

### Terms of Use
App Description'a ekle:
```
Kullanım Koşulları: https://KULLANICI_ADI.github.io/growzy-legal/terms.html
```

### Support URL
```
https://KULLANICI_ADI.github.io/growzy-legal/support.html
```

## 📝 Kodda Güncelleme

`lib/core/app_urls.dart` dosyasını güncelle:

```dart
static const String privacyPolicyUrl = 'https://KULLANICI_ADI.github.io/growzy-legal/privacy.html';
static const String termsOfServiceUrl = 'https://KULLANICI_ADI.github.io/growzy-legal/terms.html';
static const String supportUrl = 'https://KULLANICI_ADI.github.io/growzy-legal/support.html';
```

## ✅ Kontrol Listesi

- [ ] GitHub repository oluşturuldu
- [ ] Dosyalar yüklendi
- [ ] GitHub Pages aktif edildi
- [ ] URL'ler çalışıyor (tarayıcıda test et)
- [ ] App Store Connect'te URL'ler güncellendi
- [ ] Kodda URL'ler güncellendi

## 🚀 Hızlı Başlangıç

```bash
# 1. Repository'yi clone et
git clone https://github.com/KULLANICI_ADI/growzy-legal.git
cd growzy-legal

# 2. Dosyaları kopyala
cp /path/to/web/privacy-policy.html privacy.html
cp /path/to/web/terms.html terms.html
cp /path/to/web/support.html support.html

# 3. Commit ve push
git add .
git commit -m "Add legal pages"
git push origin main
```

5-10 dakika içinde GitHub Pages aktif olur ve URL'ler çalışır!

