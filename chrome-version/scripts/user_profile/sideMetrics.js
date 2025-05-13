export function sideMetrics() {
  console.log("sideMetrics OK")


  // Nb d'abonnés et d'abonnements (page d'accueil du profil)
  const observer = new MutationObserver(() => {
    var messageElement = document.querySelector(".actualites_side_item");
    if (messageElement) {
      // RESTE : À SUPPRIMER LA BALISE FONT ET "Message(s)"
      const messages = document.querySelector("a.actualites_side_item > font");

      if (messages) {
        // Delete the number of messages
        let numberOfMessages = parseInt(messages.textContent.trim(), 10); // Convertir en nombre
        let message = "Vous n'avez pas de message";

        if (numberOfMessages === 1) {
          message = "Vous avez un message";
        } else if (numberOfMessages > 1) {
          message = "Vous avez des messages";
        } else if (numberOfMessages === 0) {
          message = "Vous n'avez pas de message";
        }

        messages.remove();
        messageElement.innerHTML = messageElement.innerHTML.replace(
          "Message(s)",
          message
        );
      }
    }

    const nbFollowers = document.querySelectorAll('a[href="/abonnes"]');
    const nbFollowing = document.querySelectorAll('a[href="/abonnements"]');

    if (nbFollowers) {
      nbFollowers.forEach(function (follower) {
        follower.remove();
      });
    }

    if (nbFollowing) {
      nbFollowing.forEach(function (following) {
        following.remove();
      });
    }

    const sideStats = document.getElementsByClassName("side_stats");
    if (sideStats) {
      Array.from(sideStats).forEach((stat) => {
        stat.remove();
      });
    }

    // "Contribution sur XX% de vos livres"
    const contributionStat = document.getElementsByClassName("contribution_progress");
    if (contributionStat) {
      // Convert HTMLCollection to an array using Array.from
      Array.from(contributionStat).forEach((stat) => {
        stat.remove();
      });
    }

    const contributionStatLegend = document.getElementsByClassName("contribution_legend");
    if (contributionStatLegend) {
      Array.from(contributionStatLegend).forEach((stat) => {
        stat.remove();
      });
    }

    // "Contributions appréciées"
    const titres = document.getElementsByClassName("side_r_content");
    if (titres) {
      Array.from(titres).forEach((titre) => {
        if (
          titre.textContent.includes("Contributions appréciées") ||
          titre.textContent.includes("Notez vos lectures")
        ) {
          titre.remove();
        }
      });
    }
    observer.disconnect(); // Eviter boucle infinie
  }); // Clôture de l'observer
  observer.observe(document.body, { childList: true, subtree: true }); // Ne pas l'oublier !!

}