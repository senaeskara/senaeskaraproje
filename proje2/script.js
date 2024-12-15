document.addEventListener("DOMContentLoaded", () => {
    // 1. Dinamik veri yükleme
    loadDynamicData();

    // 2. "Daha Fazla Oku" butonları için animasyonlu toggle
    setupStoryToggles();

    // 3. Karanlık/Aydınlık mod geçişi
    setupDarkModeToggle();
});

// Dinamik haberler ve etkinlikler için veri yükleme
function loadDynamicData() {
    const newsData = [
        {
            title: "Dr. Fei-Fei Li'nin Yapay Zeka Çalışmaları",
            description: "Fei-Fei Li, etik yapay zeka alanında öncü çalışmalar yapmaktadır.",
            url: "https://example.com/fei-fei-li",
        },
        {
            title: "Gitanjali Rao'nun Genç Bilim İcadı",
            description: "Gitanjali, 15 yaşında temiz su teknolojisi geliştirdi.",
            url: "https://example.com/gitanjali-rao",
        },
    ];

    const eventData = [
        {
            name: "STEM'de Kadınlar Konferansı 2024",
            date: "2024-03-15",
            location: "İstanbul, Türkiye",
        },
        {
            name: "Yapay Zeka ve Etik Zirvesi",
            date: "2024-04-10",
            location: "San Francisco, ABD",
        },
        {
            name: "Kızlar için STEM Hackathon",
            date: "2024-05-20",
            location: "Online",
        },
    ];

    // Haberleri dinamik olarak yükle
    const storiesContainer = document.querySelector("#stories");
    newsData.forEach(news => {
        const storyElement = document.createElement("div");
        storyElement.className = "story";
        storyElement.innerHTML = `
            <h3>${news.title}</h3>
            <p>${news.description}</p>
            <a href="${news.url}" target="_blank" class="btn">Daha Fazla Oku</a>
        `;
        storiesContainer.appendChild(storyElement);
    });

    // Etkinlikleri dinamik olarak sıralayıp yükle
    const sortedEvents = eventData.sort((a, b) => new Date(a.date) - new Date(b.date));
    const eventsContainer = document.querySelector(".event-list");
    sortedEvents.forEach(event => {
        const eventElement = document.createElement("li");
        eventElement.innerHTML = `
            <h3>${event.name}</h3>
            <p>Tarih: ${new Date(event.date).toLocaleDateString("tr-TR")} | Yer: ${event.location}</p>
        `;
        eventsContainer.appendChild(eventElement);
    });
}

// "Daha Fazla Oku" butonları için toggle fonksiyonu
function setupStoryToggles() {
    const storyButtons = document.querySelectorAll(".story .btn");
    storyButtons.forEach(button => {
        button.addEventListener("click", () => {
            const hiddenText = button.nextElementSibling;
            if (hiddenText) {
                hiddenText.classList.toggle("visible");
                button.textContent = hiddenText.classList.contains("visible") ? "Daha Az Oku" : "Daha Fazla Oku";
            }
        });
    });
}

// Karanlık/Aydınlık mod geçişi
function setupDarkModeToggle() {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Karanlık Mod";
    toggleButton.className = "dark-mode-toggle btn";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleButton.textContent = document.body.classList.contains("dark-mode") ? "Aydınlık Mod" : "Karanlık Mod";
    });
}
