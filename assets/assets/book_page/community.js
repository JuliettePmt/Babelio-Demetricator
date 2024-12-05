
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

    const commentaryOnCritics = document.querySelectorAll("span.qualite > a")
    if (commentaryOnCritics) {
        commentaryOnCritics.forEach(commentary => {
            const numberOfCommentaryOnCritics = commentary.querySelector('[id^="myspan"]');
            if (numberOfCommentaryOnCritics) {
                numberOfCommentaryOnCritics.style.display = "none";
                numberOfCommentaryOnCritics.classList.add("processed-by-script");
            };
        });
    }; 

}