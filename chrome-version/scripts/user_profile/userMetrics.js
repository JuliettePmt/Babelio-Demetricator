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

  // Insignes et contributions (sur la page Accueil du profil)
  const insigneBanner = document.querySelector("#page_corps > div > div.side_r > div > div:nth-child(7)");
  const sidePanel = document.querySelector("div.side_r_content");

  if (insigneBanner && insigneBanner.textContent.includes("insignes")) {
    insigneBanner.remove();

    const allSeparators = sidePanel.querySelectorAll("div.sep");
    if (allSeparators.length > 1) {
      allSeparators[1].remove(); // Supprimer le second élément (index 1)
    }
  }

  //   // Insignes et contributions (sur le reste du site)
  if (sidePanel) {
    sidePanel.remove();
  } else {
    const allSeparators = document.querySelectorAll("div.sep");
    if (allSeparators.length > 1) {
      allSeparators[1].remove();
    }
  }

  //   Number of books by category on profile (example : "Littérature italienne")
  const booksByCategories = document.querySelectorAll(
    "#page_corps > div > div.side_l > div > div.liste_fiches > div"
  );

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

    });

    // N'oublie pas d'appeler observe() sur un nœud cible :
    observer.observe(document.body, { childList: true, subtree: true });
  }
}
