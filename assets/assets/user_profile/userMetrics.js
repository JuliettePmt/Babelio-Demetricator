export function userMetrics() {

    const pageStatistics = document.querySelector("#page_corps > div > div.livre_header.row > div > div > a:nth-child(4)")

    if (pageStatistics.textContent == "Statistiques") {
        pageStatistics.remove()
    }

    // Reading challenge, nb of critics, badges, etc.
    const sideStatistics = document.querySelector("#page_corps > div > div.side_r > div:nth-child(1)")
    if (sideStatistics) {
        sideStatistics.remove()
    }

}