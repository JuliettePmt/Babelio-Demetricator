export function ratings() {
    let ratingArray = []

    // Top part of book page
    const ratingValue = document.querySelector("#page_corps > div > div:nth-child(3) > div.side_l > div.livre_con > div.col.col-8 > span:nth-child(5) > span.texte_t2.rating")
    if (ratingValue) ratingArray.push(ratingValue);

    const ratingStars = document.querySelector("#page_corps > div > div:nth-child(3) > div.side_l > div.livre_con > div.col.col-8 > div.rateit.rateit-font")
    if (ratingStars) ratingArray.push(ratingStars);

    const ratingScale = document.querySelector("#page_corps > div > div:nth-child(3) > div.side_l > div.livre_con > div.col.col-8 > span:nth-child(5)")
    if (ratingScale) ratingArray.push(ratingScale);


    const recoBooks = document.querySelectorAll("div.list_livre:not(.hidden-by-script)");

    if (recoBooks) {
        recoBooks.forEach(book => {
            const bookStats = book.querySelector("div > div > div > div > h3");
    
            if (bookStats) {
                bookStats.style.display = "none";
                bookStats.classList.add("processed-by-script");
            }
        });
    }
    


    


    // Bottom part of book page

    const distributionRatings = document.querySelector("#page_corps > div > div:nth-child(3) > div.side_l > div:nth-child(9)")
    if (distributionRatings) ratingArray.push(distributionRatings);


    for (let i = 0; i < ratingArray.length; i++) {
        const element = ratingArray[i];
        if (element) {
            element.setAttribute("style", "display: none !important; visibility: hidden !important;");
            element.classList.add("hidden-by-script");
        }
    }
    
}