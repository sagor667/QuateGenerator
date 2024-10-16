const quote = document.getElementById("quote");
const author = document.getElementById("author");
const generate = document.getElementById("generate");
const twitter = document.getElementById("twitter");

const quateApi = "https://api.quotable.io/random"

async function generateQuote(uri) {
    const response = await fetch(uri);
    const data = await response.json();
    document.write(data);
}
generateQuote(quateApi);
