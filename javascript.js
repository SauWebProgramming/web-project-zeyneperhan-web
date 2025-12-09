
const LOCAL_STORAGE_KEY = 'filmFavorileri';
const FILM_LISTESI_ID = 'film-listesi';
const DETAY_MODAL_ID = 'detay-modal';
const FAVORILERI_GOSTER_BTN_ID = 'favoriler-goster-btn';

let tumFilmler = []; 
let sadeceFavorilerGosteriliyor = false;

const filmleriYukle = async () => {
    // 
    const jsonDosyaYolu = './movies.json';
    const listeKapsayici = document.getElementById(FILM_LISTESI_ID);

    try {
        const response = await fetch(jsonDosyaYolu); 
        
        if (!response.ok) {
        
            throw new Error(`HTTP Hata kodu: ${response.status}. JSON dosyası yüklenemedi.`);
        }

        const filmler = await response.json(); 
        tumFilmler = filmler; 

        filmleriGoster(filmler); 
        filtrelemeKurulumu(); 


    } catch (hata) {
        console.error("Filmler yüklenirken bir sorun oluştu:", hata);
        listeKapsayici.innerHTML = `<p class="hata-mesaji">Film listesi yüklenemedi.</p>`;
    }
};


const filmleriGoster = (filmler) => {
    const kapsayici = document.getElementById(FILM_LISTESI_ID);
    const favoriler = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    kapsayici.innerHTML = ''; 

    if (filmler.length === 0) {
        kapsayici.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">Kriterlere uygun film bulunamadı.</p>';
        return;
    }

    filmler.forEach(film => {
        const favoriMi = favoriler.includes(film.id);
        
        const filmHTML = `
            <div class="film-kart" data-id="${film.id}">
                <img src="${film.imageUrl}" alt="${film.title} posteri" class="film-gorseli">
                <div class="kart-icerik">
                    <h3 class="film-baslik">${film.title} (${film.year})</h3>
                    <p class="film-yonetmen">Tür: ${film.genre}</p>
                    
                    <button 
                        class="favori-ekle-btn ${favoriMi ? 'favori-aktif' : ''}" 
                        data-film-id="${film.id}"
                        aria-label="${favoriMi ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}"
                    >
                        ${favoriMi ? '❤️ Favori' : '🤍 Ekle'} 
                    </button>

                    <button class="detay-goster-btn" data-film-id="${film.id}">
                        Detayları Gör
                    </button>
                </div>
            </div>
        `;
        kapsayici.innerHTML += filmHTML;
    });
    
    
    favoriButonlariniDinle();
    detayButonlariniDinle();
};

// javascript.js - YENİ VE DÜZELTİLMİŞ filtrelemeKurulumu fonksiyonu

const filtrelemeKurulumu = () => {

    const aramaInput = document.getElementById('arama-input'); 

    const favoriBtn = document.getElementById(FAVORILERI_GOSTER_BTN_ID);

if (favoriBtn) {

    console.log('Filtre butonu dinlenmeye hazır.'); // BU SATIRI EKLEYİN

    favoriBtn.addEventListener('click', () => {

        // ...

        console.log('BUTON TIKLANDI. Geçerli durum: ' + sadeceFavorilerGosteriliyor); // BU SATIRI EKLEYİN

        // ...

    });

}

    // Arama Fonksiyonu

    if (aramaInput) {

        aramaInput.addEventListener('input', (e) => {

            const aramaTerimi = e.target.value.toLowerCase();

            

            let kaynakListe = sadeceFavorilerGosteriliyor ? getFavoriFilmler() : tumFilmler;



            const filtrelenmisFilmler = kaynakListe.filter(film => 

                film.title.toLowerCase().includes(aramaTerimi) || 

                film.director.toLowerCase().includes(aramaTerimi)

            );

            

            filmleriGoster(filtrelenmisFilmler);

        });

    }



    

    if (favoriBtn) {

        favoriBtn.addEventListener('click', () => {

            sadeceFavorilerGosteriliyor = !sadeceFavorilerGosteriliyor;



            if (sadeceFavorilerGosteriliyor) {

                const favoriListesi = getFavoriFilmler();

                filmleriGoster(favoriListesi);

                favoriBtn.innerHTML = '✨ Tümünü Göster';

            } else {

                filmleriGoster(tumFilmler);

                favoriBtn.innerHTML = '🤍 Favorilerimi Göster';

            }

        });

    }

};

const getFavoriFilmler = () => {
    const favoriler = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        return tumFilmler.filter(film => favoriler.includes(film.id));
};


const favoriButonlariniDinle = () => {
    document.querySelectorAll('.favori-ekle-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const filmId = parseInt(e.target.dataset.filmId);
            let favoriler = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

            if (favoriler.includes(filmId)) {
            
                favoriler = favoriler.filter(id => id !== filmId);
            } else {
                
                favoriler.push(filmId);
            }
            
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoriler));
            
            e.target.classList.toggle('favori-aktif');
            e.target.innerHTML = favoriler.includes(filmId) ? '❤️ Favori' : '🤍 Ekle';
            
            if (sadeceFavorilerGosteriliyor) {
                filmleriGoster(getFavoriFilmler());
            }
        });
    });
};

const detayButonlariniDinle = () => {
    document.querySelectorAll('.detay-goster-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const filmId = parseInt(e.target.dataset.filmId);
            const secilenFilm = tumFilmler.find(film => film.id === filmId);
            
            if (secilenFilm) {
                detayModalGoster(secilenFilm);
            }
        });
    });
};

const detayModalGoster = (film) => {
    const modal = document.getElementById(DETAY_MODAL_ID);
    const modalIcerik = modal.querySelector('.modal-icerik');

    // Detay içeriği oluşturma
    modalIcerik.innerHTML = `
        <button class="kapat-btn" onclick="document.getElementById('${DETAY_MODAL_ID}').style.display='none'">X Kapat</button>
        <div class="detay-baslik-alani">
            <h2 style="color: #64ffda;">${film.title} (${film.year})</h2>
        </div>
        <div style="display: flex; gap: 20px; align-items: flex-start;">
            <img src="${film.imageUrl}" alt="${film.title}" style="max-width: 200px; border-radius: 8px;">
            <div>
                <p><strong>Yönetmen:</strong> ${film.director}</p>
                <p><strong>Tür:</strong> ${film.genre}</p>
                <p class="ozet" style="margin-top: 20px; line-height: 1.6;">${film.description}</p>
            </div>
        </div>
    `;
    
    
    modal.style.display = 'block'; 
};


document.addEventListener('DOMContentLoaded', filmleriYukle);