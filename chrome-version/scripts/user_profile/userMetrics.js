export function userMetrics() {
  console.log("userMetrics OK");

  // *** Volet "Statistiques"
  const voletStatistiques = document.querySelector(
    "#page_corps > div > div.livre_header.row > div > div > a:nth-child(4)"
  );
  if (voletStatistiques) {
    if (voletStatistiques.textContent == "Statistiques") {
      voletStatistiques.remove();
    }
  }

  // Menu déroulant (sous l'icône de profil en haut à droite) : supprimer l'accès à la page statistiques
  const menuDeroulant = document.getElementById("menu_user_under");  // Sélectionner le conteneur du menu

  const statistiquesMenuDeroulant = Array.from(menuDeroulant.querySelectorAll("a")).find(link => link.textContent === "Statistiques");

  if (statistiquesMenuDeroulant) {
    statistiquesMenuDeroulant.remove();  // Supprimer l'élément <a> avec le texte "Statistiques"
  }


  // Nombre d'abonnés / abonnements (milieu de page, sous le pseudo)
  const liensNoirs = document.getElementsByClassName("tiny_links dark");

  Array.from(liensNoirs).forEach((lien) => { // Convertir en Array pour utiliser forEach
    if (lien.textContent.includes("abonnés")) {
      lien.textContent = "Abonnés"
    }
    else if (lien.textContent.includes("abonnements")) {
      lien.textContent = "Abonnements"
    }
  });


  // Menu déroulant de "Mes Livres"
  const selectElements = document.querySelectorAll("select");

  selectElements.forEach(selectElement => { 
    const options = selectElement.querySelectorAll("option"); 
  
    options.forEach(option => {
      option.textContent = option.textContent.replace(/\s*\(\d+\)/g, '').trim();
    });
  });
  


  //   Number of books by category on profile (example : "Littérature italienne")
  const booksByCategories = document.querySelectorAll("#page_corps > div > div.side_l > div > div.liste_fiches > div");

  if (booksByCategories) {
    const nbBooksByCategory = document.querySelectorAll("a > div > p");

    nbBooksByCategory.forEach((nbByCategory) => {
      nbByCategory.remove();
    });
  }

  //   *** Volet "Mes livres"

  //  Statistiques : nombre de citations & critiques
  const nbQuotesMyBooks = document.querySelectorAll(
    "#form-test > div.mes_livres > div.mes_livres_con > table > tbody > tr > td.titre_livre > a.titre_livre_elements"
  );

  if (nbQuotesMyBooks.length > 0) {
    nbQuotesMyBooks.forEach((nbQuotes) => {
      nbQuotes.remove();
    });
  }

  //   // Delete nb of readers from "Mes livres" table
  const columnReaders = document.querySelectorAll(
    "#form-test > div.mes_livres > div.mes_livres_con > table > tbody > tr > td.lecteurs"
  );
  const titleColumnReaders = document.querySelector(
    "#form-test > div.mes_livres > div.mes_livres_con > table > thead > tr > th:nth-child(8)"
  );

  if (titleColumnReaders) {
    titleColumnReaders.remove();
  }

  if (columnReaders) {
    columnReaders.forEach((column) => {
      const nbReaders = column.querySelector("a");
      if (nbReaders) {
        nbReaders.remove();
      }
    });
  }

  // Supprimer le sélecteur de notes de "Mes livres" (pour trier par notes)
  const gradeSelector = document.querySelectorAll("div.styled-select");

  if (gradeSelector.length > 0) {
    gradeSelector.forEach((selector) => {
      if (selector.textContent.includes("Note")) {
        selector.remove();
      }
    });
  }

  // Nombre de livres "en train de lire" et "pour une île déserte"
  const allDivTitres = document.getElementsByClassName("titre");

  if (allDivTitres) {
    const observer = new MutationObserver(() => {
      const ileDeserteDiv = Array.from(allDivTitres).find((div) => div.textContent.includes("déserte")); 
      const enTrainDeLire = Array.from(allDivTitres).find((div) => div.textContent.includes("En train"));
      const groupeNb = Array.from(allDivTitres).find((div) => div.textContent.includes("Groupes"));
      const messagesNb = Array.from(allDivTitres).find((div) => div.textContent.includes("Mes Messages"));
      const discussionNb = Array.from(allDivTitres).find((div) => div.textContent.includes("Discussion avec"));



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
      supprimerParentheses(ileDeserteDiv)
      supprimerParentheses(enTrainDeLire)
      supprimerParentheses(groupeNb)
      supprimerParentheses(messagesNb)
      supprimerParentheses(discussionNb)

    // Supprimer le nombre de messages envoyés dans une conversation

    var whatToFind = {
      property: "float",
      values: ["right"]
    };
    
    var walker = document.createTreeWalker(
      document.documentElement,
      NodeFilter.SHOW_ELEMENT,
      el => {
        const style = getComputedStyle(el)[whatToFind.property];
        return whatToFind.values.includes(style)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      }
    );
    
    while (walker.nextNode()) {
      walker.currentNode.remove(); 
    }

    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
}
