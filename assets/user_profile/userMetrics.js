export function userMetrics() {

    // *** Volet "Statistiques"
    const pageStatistics = document.querySelector("#page_corps > div > div.livre_header.row > div > div > a:nth-child(4)")

    if (pageStatistics.textContent == "Statistiques") {
        pageStatistics.remove()
    }

    // Reading challenge, nb of critics, badges, etc.
    const sideStatistics = document.querySelector("#page_corps > div > div.side_r > div:nth-child(1)")
    if (sideStatistics) {
        sideStatistics.remove()
    }

    // Number of books by category on profile (example : "Littérature italienne")
    const booksByCategories = document.querySelectorAll("#page_corps > div > div.side_l > div > div.liste_fiches > div")

    if (booksByCategories) {
        const nbBooksByCategory = document.querySelectorAll("a > div > p")

        nbBooksByCategory.forEach(nbByCategory => {
            nbByCategory.remove();
        });
    };

    // *** Volet "Mes livres"

    // Statistiques : nombre de citations & critiques
    const nbQuotesMyBooks = document.querySelectorAll("#form-test > div.mes_livres > div.mes_livres_con > table > tbody > tr > td.titre_livre > a.titre_livre_elements")

    if (nbQuotesMyBooks.length>0) {
        nbQuotesMyBooks.forEach(nbQuotes => {
            nbQuotes.remove();
        });
    }


}