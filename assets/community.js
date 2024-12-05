
export function community() {
    const communityLikes = document.querySelectorAll("span.qualite > span.post_items_like")

    if (communityLikes) {
        communityLikes.forEach(communityLike => {
            const numberLikes = communityLike.querySelector('[id^="myspan"]'); // name of the id starts with "myspan"

            if (numberLikes) {
                numberLikes.style.display = "none";
                numberLikes.classList.add("processed-by-script");
                console.log("YEES zouk")
            }
            
        
        
        });

    };
}