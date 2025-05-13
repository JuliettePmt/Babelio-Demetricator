// STATISTIQUES DES AUTEURS
export function authorMetrics() {

    // Nombre de livres écrits et de critiques reçues
    const statsAuteur = document.querySelectorAll(".livre_bold a");

    statsAuteur.forEach((link) => {
        if (link.href.includes("/bibliographie")) {
        // Remplace le contenu par "Livres" uniquement
        link.textContent = "Livres";
        } else if (link.href.includes("/critiques")) {
        // Remplace le contenu par "Critiques" uniquement
        link.textContent = "Critiques";
        }
    });

    // "Bibliographie de [Virginie Despentes] (XX)"
    
    const allDivTitres = document.getElementsByClassName("titre");
    if (allDivTitres) {
      const observer = new MutationObserver(() => {

        const bibliographieDe = Array.from(allDivTitres).find((div) => div.textContent.includes("Bibliographie de")); 
        const nbVideosInterviews = Array.from(allDivTitres).find((div) => div.textContent.includes("Videos et interviews"));
        const nbPodcasts = Array.from(allDivTitres).find((div) => div.textContent.includes("Podcasts"));

        function supprimerParentheses(array) {
          if (array) {
            array.childNodes.forEach((node) => {
              if (
                node.nodeType === Node.TEXT_NODE &&
                /\(\d+\)/.test(node.textContent)
              ) {
                node.textContent = node.textContent.replace(/\s*\(\d+\)/g, "");
              }
            });
          }
        }
        supprimerParentheses(bibliographieDe)
        supprimerParentheses(nbVideosInterviews)
        supprimerParentheses(nbPodcasts)


        // Onglets Citations / Vidéos
        Array.from(allDivTitres).forEach((titre) => {
            if (titre.textContent.includes("Citations de") || titre.textContent.includes("Vidéos de")) {
            const span = titre.querySelector("span");
              if (span) {
                span.remove();  // Supprimer le <span> contenant "(3600)"
              }
            }
          });
        
      }); // Clôture observation
  
      observer.observe(document.body, { childList: true, subtree: true });
    }

    // Voir plus (XX)
    const voirPlus = document.getElementsByClassName("more");
    if (voirPlus) {
        const nbVoirPlus = Array.from(voirPlus);
        nbVoirPlus.forEach((element) => {
            element.textContent = element.textContent.replace(/\s*\(\d+\)/g, "");
        });
    }  
    
    // PAGE DE RECHERCHE D'UN AUTEUR (quand on tape dans la barre de recherche)

    const statsAuteursRecherche = document.querySelectorAll(".resultats_bas");

    statsAuteursRecherche.forEach((div) => {
      // Supprimer "3 livres" et "9 lecteurs"
      div.innerHTML = div.innerHTML.replace(/\d+(?=\s*(livres|lecteurs|participants))/g, '').trim(); // Supprimer les chiffres avant les mots "livres", "lecteurs" et "participants"
      div.innerHTML = div.innerHTML.replace("livres", 'Livres').trim();
      div.innerHTML = div.innerHTML.replace("lecteurs", '').trim();
      div.innerHTML = div.innerHTML.replace("participants", '').trim();

    });
    
    

    // Nombre de livres

    // Nombre de lecteurs


}
