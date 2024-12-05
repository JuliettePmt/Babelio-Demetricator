
export function community() {

    // Likes on critics
    const communityLikes = document.querySelectorAll("span.qualite > span.post_items_like")

    if (communityLikes) {
        communityLikes.forEach(communityLike => {
            const numberLikes = communityLike.querySelector('[id^="myspan"]'); // name of the id starts with "myspan"

            if (numberLikes) {
                numberLikes.style.display = "none";
                numberLikes.classList.add("processed-by-script");
            }
        });
    };

    const communityCritics = document.querySelectorAll("span.qualite > a")
    if (communityCritics) {
        communityCritics.forEach(communityCritic => {
            const numberOfCritics = communityCritic.querySelector('[id^="myspan"]');
            if (numberOfCritics) {
                numberOfCritics.style.display = "none";
                numberOfCritics.classList.add("processed-by-script");
            };
        });
    }; 

}