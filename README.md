# 🚀 React Native Template

Bu proje, **React Native 0.77** sürümüne uygun olarak hazırlanmış bir başlangıç şablonudur. İçerisinde hazır olarak **React Navigation** ve **React Native Vector Icons** kütüphaneleri entegre edilmiştir.


## 🖼️ Ekran Görüntüsü

<img src="https://github.com/muhammederencennetkusu/React-Native-Templates/blob/main/Screenshot_5.png" alt="Uygulama Önizleme" width="600">


## 📌 Kurulum

Aşağıdaki adımları takip ederek projeyi kullanabilirsiniz:

### 1️⃣ Projeyi Başlat

```bash
git clone https://github.com/muhammederencennetkusu/React-Native-Template YeniProje
cd YeniProje
npm install
```

### 3️⃣ Android & iOS İçin Çalıştır

#### Android:
```bash
npx react-native run-android
```

#### iOS (Mac Gereklidir):
```bash
npx react-native run-ios
```

## 🛠️ Kullanılan Kütüphaneler

- **React Navigation** - Sayfa yönlendirme için hazır olarak geliyor. Stack ve Bottom Tab Navigator ile kolayca ekranlar arasında geçiş yapabilirsiniz.
- **React Native Vector Icons** - Uygulamanızda ikon kullanımı için entegre edilmiştir. FontAwesome, MaterialIcons gibi birçok ikon setini destekler.

## ✨ Kolaylıklar ve Avantajlar

- **Hızlı Geliştirme:** Proje, temel yapı taşlarını içerdiği için sıfırdan ayarlama yapmanıza gerek kalmaz.
- **Hazır Navigasyon:** Sayfa geçişleri için ek bir yapılandırmaya gerek kalmadan, `Tab.Navigator` ve `Stack.Navigator` kullanabilirsiniz.
- **Gelişmiş İkon Desteği:** Uygulamanıza kolayca ikon ekleyebilir, kişiselleştirilmiş menüler oluşturabilirsiniz.
- **Modüler Yapı:** Proje, `src` klasörüne bölünmüş şekilde düzenli bir mimariye sahiptir.

## 📂 Klasör Yapısı

```bash
.
├── src/
│   ├── Screens/
│   │   ├── Home.tsx
│   │   ├── Settings.tsx
│   ├── Navigation/
│   │   ├── TabNavigator.tsx
├── App.tsx
├── package.json
├── tsconfig.json
├── babel.config.js
├── android/
├── ios/
├── node_modules/
├── assets/
```

## 📞 İletişim

Herhangi bir sorun yaşarsanız, GitHub üzerinden [Issue açabilirsiniz](https://github.com/muhammederencennetkusu/React-Native-Template/issues).

🚀 **İyi kodlamalar!**
