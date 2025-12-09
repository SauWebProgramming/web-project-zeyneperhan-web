const filmKutusu = document.getElementById('film-listesi');
// fetch kullanarak veri çekiyorum
function filmleriGetir() {
    fetch('movies.json') 
        .then(cevap => cevap.json()) 
        .then(filmlerDizisi => { 
        
            // Dizi içindeki her film için kart oluşturma döngüsü
            filmlerDizisi.forEach(film => {
                const filmKarti = `
                    <div class="film-card">
                        <img src="${film.imageUrl}" alt="${film.title}"> 
                        <h3>${film.title}</h3>
                        <p><strong>Yönetmen:</strong> ${film.director}</p>
                        <p><strong>Yıl:</strong> ${film.year}</p>
                        <p class="ozet">${film.description}</p>
                    </div>
                `;
                filmKutusu.innerHTML += filmKarti;
            });
        })
        .catch(hata => {
            console.error("Film verisi yüklenirken kritik bir hata oluştu. Dosya yolunu veya JSON yapısını kontrol et.", hata);
        });
}
filmleriGetir();