import { ratings } from "./assets/assets/book_pages/ratings.js";
import { community } from "./assets/assets/book_pages/community.js";
import { platformMetrics } from "./assets/assets/book_pages/platformMetrics.js";
import { commercial } from "./assets/assets/book_pages/commercial.js";
import { userMetrics } from "./assets/assets/user_profile/userMetrics.js";

// BOOK PAGES
ratings();
community();
platformMetrics() ;
commercial();

// USER PROFILE
userMetrics();


// Execute webpack : npx webpack