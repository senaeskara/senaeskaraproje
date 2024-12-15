let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide'); // Slaytları al
    const totalSlides = slides.length;

    // Slaytları gizle
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > totalSlides) {
        slideIndex = 1; // Sonraki slayta geçince başa dön
    }

    // Geçerli slaytı göster
    slides[slideIndex - 1].style.display = "block";

    // 3 saniyede bir slayt değiştir
    setTimeout(showSlides, 3000); 
}

showSlides(); // Slaytları başlat

// Örnek kartları dinamik olarak eklemek
const examples = [
    { title: 'Ada Lovelace', description: 'İlk bilgisayar programcısı olarak bilinir.' },
    { title: 'Marie Curie', description: 'Radyoaktivite üzerine yaptığı çalışmalarla Nobel ödülü kazandı.' },
    { title: 'Sally Ride', description: 'Amerikan uzay programında yer alan ilk kadın astronot.' }
];

const exampleCards = document.querySelector('.example-cards');
examples.forEach(example => {
    const card = document.createElement('div');
    card.classList.add('example');
    card.innerHTML = `
        <h3>${example.title}</h3>
        <p>${example.description}</p>
    `;
    exampleCards.appendChild(card);
});

// İstatistiklerle ilgili veriler
const stats = [
    { label: 'Kadınların Bilimsel Araştırma Alanındaki Oranı', value: '30%' },
    { label: 'Kadınların Teknoloji Alanındaki Oranı', value: '28%' },
    { label: 'Kadın Mühendislerin Oranı', value: '25%' }
];

const statsContainer = document.querySelector('#stats');
stats.forEach(stat => {
    const statElement = document.createElement('p');
    statElement.innerHTML = `${stat.label}: ${stat.value}`;
    statsContainer.appendChild(statElement);
});
