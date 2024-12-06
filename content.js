import { ratings } from "./scripts/book_pages/ratings.js";
import { community } from "./scripts/book_pages/community.js";
import { platformMetrics } from "./scripts/book_pages/platformMetrics.js";
import { commercial } from "./scripts/book_pages/commercial.js";
import { userMetrics } from "./scripts/user_profile/userMetrics.js";

// BOOK PAGES
commercial();
ratings();
platformMetrics() ;
community();

// USER PROFILE
userMetrics();

// Execute webpack : npx webpack