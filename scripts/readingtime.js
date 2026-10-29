export function wordCount(text) {
    if ((text.trim() === "")) {
        throw new Error("Needs words.")     // /\s+/ = "any run of whitespace": spaces, newlines, tabs
    }
    const words = text.trim().split(/\s+/);

    return words.length
}

export function readingMinutes(text) {
    return Math.ceil(wordCount(text) / 200);
}