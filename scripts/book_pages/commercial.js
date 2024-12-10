// Delete all ads and commercial calls to action

export function commercial() {
    const commercials = document.querySelector("#page_corps > div > div:nth-child(3) > div.side_r > div:nth-child(2)");

    // For smaller screens
    const commercialsV2 = document.querySelector(".no-desktop");
    

    function removeBuyAds(ad) {
        const observer = new MutationObserver(() => {
            if (ad) {
                ad.remove();
            }
        });
    
        observer.observe(document.body, { childList: true, subtree: true });
    }
    
    removeBuyAds(commercials);
    removeBuyAds(commercialsV2);

    
    // Onglet Critiques
    const addBannerPageCritics = document.querySelector("#page_corps > div > div:nth-child(3) > div.side_r > div > div:nth-child(2)")

    if (addBannerPageCritics) {
        addBannerPageCritics.remove()
        addBannerPageCritics.classList.add("hidden-by-script");
    };


}

