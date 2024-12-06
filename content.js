import { ratings } from "./assets/book_pages/ratings.js";
import { community } from "./assets/book_pages/community.js";
import { platformMetrics } from "./assets/book_pages/platformMetrics.js";
import { commercial } from "./assets/book_pages/commercial.js";
import { userMetrics } from "./assets/user_profile/userMetrics.js";

// BOOK PAGES
ratings();
community();
platformMetrics() ;
commercial();

// USER PROFILE
userMetrics();

// Execute webpack : npx webpack