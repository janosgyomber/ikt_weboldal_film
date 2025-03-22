document.getElementById("keres").addEventListener("submit", function(event) {
    event.preventDefault(); // Megakadályozza az oldal újratöltését
    const query = document.getElementById("talal").value.toLowerCase();

    // Kereshető oldalak és horgonyok listája
    const sections = [
        { name: "Kezdőlap", url: "index.html" },
        { name: "Szereplők", url: "characters.html" },
        { name: "Évadok", url: "seasons.html" },
        { name: "Dexter", url: "characters.html#dexter" },
        { name: "Leila", url: "characters.html#leila"}
    ];

    // Keresés végrehajtása
    const found = sections.find(section => section.name.toLowerCase().includes(query));

    if (found) {
        window.location.href = found.url; // Oda navigál a megfelelő szekcióra
    }else {
        alert("Nincs találat!"); // Ha nincs találat, értesítés
    }
})

document.getElementById("gomb").addEventListener("click", ()=>{
    alert("Ez a funkció még nem elérhető!")
})