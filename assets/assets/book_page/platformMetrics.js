
export function platformMetrics() {

    let numberOfElementsArray = []

    // Banner with press and community critics, citations
    const bannerBookInfo = document.querySelector("#page_corps > div > div:nth-child(3) > div.livre_header.row > table > tbody > tr > td:nth-child(2) > div > div")

    if (bannerBookInfo) {
        const infosSections = bannerBookInfo.querySelectorAll("a")

        infosSections.forEach(section => {
            section.textContent = section.textContent.replace(/\s*\(.*?\)\s*/g, '');
        });
        
    }


}