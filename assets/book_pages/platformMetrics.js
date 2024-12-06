export function platformMetrics() {

    let numberOfElementsArray = []

    // Banner with press and community critics, citations
    const bannerBookInfo = document.querySelector("#page_corps > div > div:nth-child(3) > div.livre_header.row > table > tbody > tr > td:nth-child(2) > div > div")

    if (bannerBookInfo) {
        const infosSections = bannerBookInfo.querySelectorAll("a")

        infosSections.forEach(section => {
            numberOfElementsArray.push(section)
        });
        
    }

        
    // Nb of books (displayed in the banner of the user profile)
    const nbBooksRead = document.querySelector("#page_corps > div > div.livre_header.row > div > div > a");

    if (nbBooksRead && nbBooksRead.textContent.includes("Livres")) {
        numberOfElementsArray.push(nbBooksRead)
    }

    // "Critiques, Analyses et Avis (XXX)"
    const criticsNumber = document.querySelector("#critiques")
    if (criticsNumber) numberOfElementsArray.push(criticsNumber)

    // Bottom nb of press critics
    const pressNumber = document.querySelector("#critiques_presse")
    if (pressNumber) numberOfElementsArray.push(pressNumber)

    // Bottom nb of citations
    const citationsNumber = document.querySelector("#citations")
    if (citationsNumber) numberOfElementsArray.push(citationsNumber)


    // Nb of readers (dynamic)
    const targetNode = document.querySelector("#page_corps > div > div:nth-child(3) > div.side_r");
    const observer = new MutationObserver(() => {
        const readersNumber = document.querySelector("#page_corps > div > div:nth-child(3) > div.side_r > div:nth-child(10) > div.titre");
        if (readersNumber && !numberOfElementsArray.includes(readersNumber)) {
            numberOfElementsArray.push(readersNumber);
            readersNumber.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.textContent = node.textContent.replace(/\s*\(.*?\)\s*/g, '');
                }
            });
            observer.disconnect();
        }
    });
    if (targetNode) {
        observer.observe(targetNode, { childList: true, subtree: true });
    }

    // Number of citations between reco books 

    const bookCitations = document.querySelectorAll(".side_l h3 nobr a");

    if (bookCitations) {
        bookCitations.forEach(bookCitation => {
            bookCitation.style.display = "none";
            bookCitation.classList.add("processed-by-script");
        });
    };

    // >> Execution <<
        numberOfElementsArray.forEach(element => {
            element.childNodes.forEach(node => { // Use childNodes to prevent the suppression of all CSS style
                if (node.nodeType === Node.TEXT_NODE) {
                    node.textContent = node.textContent.replace(/\s*\(.*?\)\s*/g, '');
                }
            });
        });

    
    
    }
