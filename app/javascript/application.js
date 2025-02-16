import * as Rails from "@rails/ujs"; 
import "controllers";

// Initialize Rails UJS
if (Rails && typeof Rails.start === "function") {
  Rails.start();
} else {
  console.error("Rails UJS is not loading properly.");
}


