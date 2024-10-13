// sitemap-generator.js
import Sitemap from "react-router-sitemap";
import router from "./src/App.js";

function generateSitemap() {
  return new Sitemap(router)
    .build("https://www.techazora.com")
    .save("./public/sitemap.xml");
}

generateSitemap();
