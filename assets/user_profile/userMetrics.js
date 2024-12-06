export function userMetrics() {

    function removeElement(element) {
        if (element) {
            element.remove()
        }
    }
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

    // Delete nb of readers from "Mes livres" table
    const columnReaders = document.querySelectorAll("#form-test > div.mes_livres > div.mes_livres_con > table > tbody > tr > td.lecteurs")

    const titleColumnReaders = document.querySelector("#form-test > div.mes_livres > div.mes_livres_con > table > thead > tr > th:nth-child(8)")

    if (titleColumnReaders) {titleColumnReaders.remove()}

    if (columnReaders) {
        columnReaders.forEach(column => {
            const nbReaders = column.querySelector("a");
            nbReaders.remove();
        }); 
    }

    // Delete grade selector from "Mes livres" (trier par note)

    const gradeSelector = document.querySelector("#form-test > div.mes_livres_form > div.mes_livres_top.row > div:nth-child(5) > div:nth-child(3)")
    removeElement(gradeSelector)


        

}