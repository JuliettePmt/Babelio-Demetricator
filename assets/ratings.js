export function ratings() {
    let ratingArray = []

    const ratingValue = document.querySelector("#page_corps > div > div:nth-child(3) > div.side_l > div.livre_con > div.col.col-8 > span:nth-child(5) > span.texte_t2.rating")
    ratingArray.push(ratingValue)

    const ratingStars = document.querySelector("#page_corps > div > div:nth-child(3) > div.side_l > div.livre_con > div.col.col-8 > div.rateit.rateit-font")
    ratingArray.push(ratingStars)

    const ratingScale = document.querySelector("#page_corps > div > div:nth-child(3) > div.side_l > div.livre_con > div.col.col-8 > span:nth-child(5)")
    ratingArray.push(ratingScale)


    for (let i = 0; i < ratingArray.length; i++) {
        const element = ratingArray[i];
        if (element) {
            element.setAttribute("style", "display: none !important; visibility: hidden !important;");
        }
    }
    
}