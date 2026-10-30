import { readingMinutes } from "./readingtime.js";

const article = document.querySelector("article");
const slot = document.querySelector("#reading-time");

try {
    if (article === null) {
        throw new Error("No article on this page")
    }

    const minutes = readingMinutes(article.textContent);
    slot.textContent = minutes + " min read";
} catch (error) {
    console.log("Reading time unavailable: " + error.message);
}