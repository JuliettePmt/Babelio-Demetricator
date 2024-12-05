// Delete all ads and commercial calls to action

export function commercial() {
    const commercials = document.querySelectorAll("#page_corps > div > div:nth-child(3) > div.side_r > div:nth-child(2)");

    // For smaller screens
    const commercialsV2 = document.querySelectorAll(".no-desktop");
    

    if (commercials) { 
        commercials.forEach(element => {
            if (element) {
                const observer = new MutationObserver(() => {
                    element.remove();
                    element.style.display = "none";
                    element.style.visibility = "hidden";
                    element.classList.add("hidden-by-script");
                    observer.disconnect();
                });

                observer.observe(element.parentNode, { childList: true, subtree: true });
            }
        });
    };

    if (commercialsV2) {
        commercialsV2.forEach(element => {
            if (element) {
                const new_observer = new MutationObserver(() => {
                    element.remove();
                    element.style.display = "none";
                    element.style.visibility = "hidden";
                    element.classList.add("hidden-by-script");
                    new_observer.disconnect();
                });
    
                new_observer.observe(element.parentNode, { childList: true, subtree: true });
            }
        });
    }

}

