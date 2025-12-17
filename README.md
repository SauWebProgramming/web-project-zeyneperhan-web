🎬 Popüler Film Arşivi (İnteraktif Medya Kitaplığı)
Bu proje, BST-207-WEB 1 dersi kapsamında geliştirilen, modern istemci tarafı web teknolojilerini kullanan interaktif bir Single Page Application (SPA) uygulamasıdır. Kullanıcılar yerel bir veri kaynağından beslenen film arşivini inceleyebilir, arama ve kategori bazlı filtreleme yapabilir, detayları görüntüleyebilir ve favori listelerini yönetebilirler.





🔗 Proje Linkleri
Canlı Demo (GitHub Pages): https://sauwebprogramming.github.io/web-project-zeyneperhan-web/

🚀 Öne Çıkan Özellikler

Dinamik Veri Yönetimi: Filmler movies.json dosyasından asenkron bir şekilde fetch API kullanılarak çekilmektedir.


Kategori Filtreleme ve Arama: Medyalar isme ve yönetmene göre aranabilir; Dram, Fantastik, Bilim Kurgu gibi kategorilere göre anlık olarak filtrelenir.


SPA Mimarisi (Single Page Application): Film detayları ayrı bir HTML sayfası olmadan, JavaScript (DOM Manipulation) ile dinamik olarak oluşturulup gösterilmektedir.



Favorilerim Sistemi: Kullanıcıların seçtiği filmler localStorage kullanılarak tarayıcıda saklanır ve sayfa yenilense dahi korunur.



Responsive Tasarım: Arayüz, CSS Grid ve Flexbox kullanılarak mobil, tablet ve masaüstü cihazlar için tam uyumlu hale getirilmiştir.




PWA Desteği (Bonus): Uygulama, manifest.json dosyası aracılığıyla Progressive Web App özellikleri sunmaktadır.

🛠️ Teknik Gereksinimler
Ödev yönergesine uygun olarak proje tamamen statik dosyalardan oluşur ve sunucu taraflı bir dil gerektirmez.


HTML5: Anlamsal (Semantic) etiketler (<nav>, <main>, <section> vb.) kullanılmıştır.



CSS3: Harici (external) stil dosyası kullanılarak modern bir arayüz tasarlanmıştır.


JavaScript (ES6+): const/let, arrow functions, async/await yapıları etkin bir şekilde kullanılmıştır.


Versiyon Kontrolü: Proje geliştirme süreci başından itibaren Git ile yönetilmiştir.


📂 Proje Yapısı
Plaintext

├── assets/             # Film görselleri ve medya öğeleri
├── index.html          # Ana uygulama iskeleti (SPA yapısı)
├── style.css           # Tasarım, responsive kurallar ve animasyonlar
├── javascript.js       # Filtreleme, fetch ve favori mantığı
├── movies.json         # Yerel JSON veri kaynağı
└── manifest.json       # PWA yapılandırması (Bonus)
⚙️ Kurulum ve Çalıştırma
Bu repository'yi bilgisayarınıza indirin veya git clone ile kopyalayın.


fetch API'nin yerel dosyalara erişebilmesi için projeyi bir yerel sunucu (Örn: VS Code Live Server eklentisi) üzerinden çalıştırın.


index.html dosyasını tarayıcıda açarak uygulamayı test edin.

Öğrenci Bilgileri:

Ad Soyad: Zeynep Hazal Erhan

Öğrenci No: B241204015