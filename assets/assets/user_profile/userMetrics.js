export function userMetrics() {

    const pageStatistics = document.querySelector("#page_corps > div > div.livre_header.row > div > div > a:nth-child(4)")

    if (pageStatistics.textContent == "Statistiques") {
        pageStatistics.remove()
        pageStatistics.classList.add("processed-by-script");
    }

    // Reading challenge, nb of critics, badges, etc.
    const sideStatistics = document.querySelector("#page_corps > div > div.side_r > div:nth-child(1)")
    if (sideStatistics) {
        sideStatistics.remove()
        sideStatistics.classList.add("processed-by-script");
    }

    // Number of books by category on profile (example : "Littérature italienne")
    const booksByCategories = document.querySelectorAll("#page_corps > div > div.side_l > div > div.liste_fiches > div")

    if (booksByCategories) {
        const nbBooksByCategory = document.querySelectorAll("a > div > p")

        nbBooksByCategory.forEach(nbByCategory => {
            nbByCategory.remove();
            nbByCategory.classList.add("processed-by-script");
        });
    };


}