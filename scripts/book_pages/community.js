export function community() {

    // Likes on critics
    const communityLikes = document.querySelectorAll("span.qualite > span.post_items_like");

    if (communityLikes) {
        communityLikes.forEach(communityLike => {
            const numberLikes = communityLike.querySelector('[id^="myspan"]'); // name of the id starts with "myspan"

            if (numberLikes) {
                numberLikes.style.display = "none";
                numberLikes.classList.add("processed-by-script");
            }
        });
    }

    const commentaryOnCritics = document.querySelectorAll("span.qualite > a");
    if (commentaryOnCritics) {
        commentaryOnCritics.forEach(commentary => {
            const numberOfCommentaryOnCritics = commentary.querySelector('[id^="myspan"]');
            if (numberOfCommentaryOnCritics) {
                numberOfCommentaryOnCritics.style.display = "none";
                numberOfCommentaryOnCritics.classList.add("processed-by-script");
            }
        });
    }

    const nbBooksLists = document.querySelectorAll("div.side_r > div:nth-child(8) > div.liste.row > div > div > h3");
    
    if (nbBooksLists.length > 0) {
        nbBooksLists.forEach(nbBooksList => {
            const nbBooksListsV1 = nbBooksList.querySelectorAll("strong");
            if (nbBooksListsV1.length > 0) {
                nbBooksListsV1.forEach(nbBooksListV1 => {
                    nbBooksListV1.remove();
                });
            }

            const textNbBooksListsV1 = nbBooksList.querySelectorAll("span")
            if (textNbBooksListsV1.length > 0) {
                textNbBooksListsV1.forEach(textNbBooksListV1 => {
                    textNbBooksListV1.remove();
                });
            }
        });
    }

    const nbBooksListsV2 = document.querySelectorAll("#page_corps > div > div > div.side_r > div > div > div.liste.row > div > div > h3 > span");

    if (nbBooksListsV2.length > 0) {
        nbBooksListsV2.forEach(nbBooksListV2 => {
            nbBooksListV2.remove();
            nbBooksListV2.classList.add("processed-by-script");
        });
    }

    // "Lecteurs les plus actifs cette semaine" : delete number of critics
    const bestUserCriticsCard = document.querySelectorAll("div.fiche_lecteur > a");

    if (bestUserCriticsCard.length > 0) {
        bestUserCriticsCard.forEach(userCard => {
            // Iterate through the child elements of the <a> element
            userCard.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.match(/\d+\s*critiques/)) {
                    node.textContent = node.textContent.replace(/\d+\s*critiques/, '').trim();
                }
            });
        });
    }


    const numberUsersQuiz = document.querySelectorAll("div > div > div > div.col-9.col > h3 > small")

    if (numberUsersQuiz) {
        numberUsersQuiz.forEach(nbUsersQuiz => {
            nbUsersQuiz.remove();
        });
    }

    const metadataQuiz = document.querySelectorAll("div > div > div > div > h3 > a");

    metadataQuiz.forEach(link => {
        let ratingQuiz = link.nextSibling;
    
        while (ratingQuiz && (ratingQuiz.nodeType !== Node.TEXT_NODE || !ratingQuiz.nodeValue.trim())) {
            ratingQuiz = ratingQuiz.nextSibling;
        }
    
        if (ratingQuiz) {
            console.log("Texte suivant :", ratingQuiz.nodeValue.trim());
            ratingQuiz.remove();
        }
    });
    
}
