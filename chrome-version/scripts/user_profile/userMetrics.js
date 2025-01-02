export function userMetrics() {

  console.log("userMetrics OK")

  function removeElement(element) {
    if (element) {
      element.remove();
    }
  }

  // *** Volet "Statistiques"
//   const pageStatistics = document.querySelector(
//     "#page_corps > div > div.livre_header.row > div > div > a:nth-child(4)"
//   );
//   if (pageStatistics) {
//     if (pageStatistics.textContent == "Statistiques") {
//       pageStatistics.remove();
//     }
//   }

//   // Nb followers (première page)
//   const nbFollowers = document.querySelectorAll('a[href="/abonnes"]');

//   if (nbFollowers.length > 0) {
//     nbFollowers.forEach((link) => {
//       link.remove();
//     });
//   }

//   // Nb following (première page)
//   const nbFollowing = document.querySelectorAll('a[href="/abonnements"]');

//   if (nbFollowing.length > 0) {
//     nbFollowing.forEach((link) => {
//       link.remove();
//     });
//   }

//   // Insignes et contributions (sur la page Accueil du profil)
//   const insigneBanner = document.querySelector(
//     "#page_corps > div > div.side_r > div > div:nth-child(7)"
//   );

//   if (insigneBanner && insigneBanner.textContent.includes("insignes")) {
//     insigneBanner.remove();

//     const allSeparators = sidePanel.querySelectorAll("div.sep");
//     if (allSeparators.length > 1) {
//       allSeparators[1].remove(); // Supprimer le second élément (index 1)
//     }
//   }

//   // Insignes et contributions (sur le reste du site)
//   const sidePanel = document.querySelector("div.side_r_content");
//   if (sidePanel) {
//     sidePanel.remove();
//   } else {
//     const allSeparators = document.querySelectorAll("div.sep");
//     if (allSeparators.length > 1) {
//       allSeparators[1].remove();
//     }
//   }

//   // Insignes et contributions (page d'accueil)

//   // Number of books by category on profile (example : "Littérature italienne")
//   const booksByCategories = document.querySelectorAll(
//     "#page_corps > div > div.side_l > div > div.liste_fiches > div"
//   );

//   if (booksByCategories) {
//     const nbBooksByCategory = document.querySelectorAll("a > div > p");

//     nbBooksByCategory.forEach((nbByCategory) => {
//       nbByCategory.remove();
//     });
//   }

//   // *** Volet "Mes livres"

//   // Statistiques : nombre de citations & critiques
//   const nbQuotesMyBooks = document.querySelectorAll(
//     "#form-test > div.mes_livres > div.mes_livres_con > table > tbody > tr > td.titre_livre > a.titre_livre_elements"
//   );

//   if (nbQuotesMyBooks.length > 0) {
//     nbQuotesMyBooks.forEach((nbQuotes) => {
//       nbQuotes.remove();
//     });
//   }

//   // Delete nb of readers from "Mes livres" table
//   const columnReaders = document.querySelectorAll(
//     "#form-test > div.mes_livres > div.mes_livres_con > table > tbody > tr > td.lecteurs"
//   );

//   const titleColumnReaders = document.querySelector(
//     "#form-test > div.mes_livres > div.mes_livres_con > table > thead > tr > th:nth-child(8)"
//   );
//   removeElement(titleColumnReaders);

//   if (columnReaders) {
//     columnReaders.forEach((column) => {
//       const nbReaders = column.querySelector("a");
//       if (nbReaders) {
//         nbReaders.remove();
//       }
//     });
//   }

//   // Delete grade selector from "Mes livres" (trier par note)
//   const gradeSelector = document.querySelectorAll("div.styled-select");

//   if (gradeSelector.length > 0) {
//     gradeSelector.forEach((selector) => {
//       if (selector.textContent.includes("Note")) {
//         selector.remove();
//       }
//     });
//   }



}
