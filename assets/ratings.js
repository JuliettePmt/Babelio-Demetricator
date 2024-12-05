export function ratings() {
    let ratingArray = []

    // Recommended books to read next
    const recoBooks = document.querySelectorAll("div.list_livre:not(.hidden-by-script)");

    if (recoBooks) {
        recoBooks.forEach(book => {
            const bookRating = book.querySelector("div > div > div > div > h3");
            const bookCritics = book.querySelector("div > div > div > div > h3 > nobr > a")
    
            if (bookRating) {
                bookRating.style.display = "none";
                bookRating.classList.add("processed-by-script");
            }
            
            if (bookCritics) {
                bookCritics.style.display = "none";
                bookCritics.classList.add("processed-by-script");
            }
        });
    }
    

    // Top part of book page
    const ratingValue = document.querySelector("#page_corps > div > div:nth-child(3) > div.side_l > div.livre_con > div.col.col-8 > span:nth-child(5) > span.texte_t2.rating")
    if (ratingValue) ratingArray.push(ratingValue);

    const ratingStars = document.querySelector("#page_corps > div > div:nth-child(3) > div.side_l > div.livre_con > div.col.col-8 > div.rateit.rateit-font")
    if (ratingStars) ratingArray.push(ratingStars);

    const ratingScale = document.querySelector("#page_corps > div > div:nth-child(3) > div.side_l > div.livre_con > div.col.col-8 > span:nth-child(5)")
    if (ratingScale) ratingArray.push(ratingScale);

    // Bottom part of book page

    const distributionRatings = document.querySelector("#page_corps > div > div:nth-child(3) > div.side_l > div:nth-child(9)")
    if (distributionRatings) ratingArray.push(distributionRatings);


    // Execution

    for (let i = 0; i < ratingArray.length; i++) {
        const element = ratingArray[i];
        if (element) {
            element.setAttribute("style", "display: none !important; visibility: hidden !important;");
            element.classList.add("hidden-by-script");
        }
    }
    
}