export function userMetrics() {

    const pageStatistics = document.querySelector("#page_corps > div > div.livre_header.row > div > div > a:nth-child(4)")

    if (pageStatistics.textContent == "Statistiques") {
        pageStatistics.remove()
    }

}