// Delete all ads and commercial calls to action

export function commercial() {
    const commercials = document.querySelectorAll("#page_corps > div > div:nth-child(3) > div.side_r > div:nth-child(2)");

    commercials.forEach(element => {
        if (element) {
            const observer = new MutationObserver(() => {
                element.remove();
                element.style.display = "none";
                element.style.visibility = "hidden";
                observer.disconnect();
                element.classList.add("hidden-by-script");
            });

            observer.observe(element.parentNode, { childList: true, subtree: true });
        }
    });
}

