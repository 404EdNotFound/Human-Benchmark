const wordList = ["horizon", "adventure", "zephyr", "mindfulness", "twilight", "optimistic", "cloud", "journey", "dazzling", "glacier", "whisper", "brilliant", "ocean", "flame", "miracle", "radiant", "victory", "compassion", "forest", "flourish", "exuberant", "paradise", "love", "sunrise", "courage", "delight", "xylophone", "serene", "notebook", "ambition", "wisdom", "whimsical", "penguin", "kindness", "gratitude", "triumph", "unique", "youthful", "justice", "yearning", "inspire", "ladder", "yellow", "freedom", "jewel", "resilience", "glorious", "wisdom", "luminous", "hopeful", "river", "balance", "nurture", "honesty", "ocean", "harmony", "resplendent", "quiver", "generosity", "xenophobia", "radiance", "serene", "uplifting", "star", "horizon", "understanding", "destiny", "ambitious", "reflective", "joyful", "laughter", "quality", "thoughtfulness", "tenacious", "gracious", "wondrous", "zeal", "patience", "exhilarating", "yearning", "vibrancy", "determined", "inquisitive", "kindhearted", "courageous", "wonder", "fortitude", "majestic", "phenomenal", "loyal", "charismatic", "mindful", "embracing", "hospitable", "noble", "peaceful", "innovative", "reliable", "adventurous", "tenacity", "fearless", "trustworthy", "generous", "optimism", "extraordinary", "ambitious", "noble-hearted", "tranquil", "inspired", "benevolence", "lively", "thoughtful", "reliable", "resilient", "humble", "enthusiastic", "kindness", "exemplary", "genuine", "knowledgeable", "diligence", "compassionate", "meticulous", "mindfulness", "radiance", "steadfast", "inspiring", "uplifted", "unwavering", "transformative", "bountiful", "imaginative", "fearless", "lightning", "radiant", "nurturing", "appreciative", "enlightened", "overjoyed", "zealous", "liberated", "uplifting", "sympathetic", "luminous", "selfless", "spirited", "adventurous", "harmonious", "exhilarating", "sublime", "integrity", "motivated", "brilliant", "dynamic", "jubilant", "successful", "benevolent", "accomplish", "uplifting", "glorious", "empathetic", "trailblazing", "compassionate", "majestic", "purposeful", "phenomenal", "meaningful", "cheerful", "bold", "prudent", "steadfast", "versatile", "uplifting", "joyous", "sincere", "graceful", "diligence", "accomplished", "radiant", "unbiased", "knowledge-seeking", "brave", "warmhearted", "extraordinary", "liberated", "inquisitive", "collaborative", "intuitive", "visionary", "trustworthy", "trailblazing", "integrity", "limitless", "zenith", "creative", "perseverance", "flawless", "zen-like", "wholehearted", "charismatic", "benevolent", "vigilant", "thoughtful", "proactive", "exemplary", "fearless", "remarkable", "principled", "resilient", "dedicated", "logical", "faithful", "motivated", "compassionate", "selfless", "insightful", "genuine", "dedicated", "enchanting", "enthusiastic", "successful", "fearless", "luminous", "trustworthy", "meticulous", "honest", "keen-eyed", "steadfast", "extraordinary", "prudent", "trailblazing", "vivacious", "intuitive", "loyal", "exhilarating", "quality-driven", "exuberant", "uplifted", "unwavering", "serene", "reflective", "inspiring", "radiance", "passionate", "perseverance", "accomplish", "devoted", "sympathetic", "expressive", "benevolence", "adventurous", "courageous", "innovative", "knowledgeable", "judicious", "resplendent", "justice", "determined", "meaningful", "cheerful", "extraordinary", "brilliant", "trailblazing", "purposeful", "faithful", "radiant", "passionate", "mindful", "uplifting", "fascinating", "empowered", "limitless", "zeal", "diligence", "insightful", "ambitious", "remarkable", "perceptive", "hopeful", "harmonious", "expressive", "delight", "luminary", "breathtaking", "wondrous", "luminous", "compassionate", "sublime", "inquisitive", "joyful", "enthusiastic", "lighthearted", "exuberant", "mindful", "extraordinary", "successful", "empathetic", "ambitious", "visionary", "dedicated", "curious", "proactive", "bold", "determined", "transformative", "creative", "brave", "cheerful", "compassionate", "glorious", "wholehearted", "uplifting", "honest", "insightful", "loyal", "brilliant", "sympathetic", "innovative", "radiant", "exemplary", "flourishing", "tenacious", "charismatic", "dedicated", "remarkable", "limitless", "adventurous", "passionate", "principled", "trailblazing", "perseverance", "energetic", "jubilant", "meaningful", "dynamic", "tranquil", "zealous", "harmonious", "selfless", "wondrous", "radiance", "reflective", "compassionate", "resilient", "uplifted", "intuitive", "proactive", "glorious", "exhilarating", "extraordinary", "diligence", "serene", "brilliant", "joyful", "knowledgeable", "perseverance", "cheerful", "expressive", "fearless", "limitless", "remarkable", "honest", "dedicated", "compassionate", "hopeful", "limitless", "trailblazing"]

const word = document.getElementById("word")
const scoreText = document.getElementById("scoreText")
const livesText = document.getElementById("livesText")

let score = 0
let lives = 3
let usedWords = []
let currentWord = ""

function generateWord() {
    if (lives == 0) {
        word.textContent = "Game Over!!!"
    }

    else {    
        currentWord = wordList[Math.floor(Math.random() * wordList.length)]
        word.textContent = currentWord
    }

}

function seenClick() {
    if (lives > 0 && usedWords.includes(currentWord)) {
        score += 1
        generateWord()
        scoreText.textContent = `Score: ${score}`
    }

    else if (lives == 0) {
        usedWords = []
    }

    else {
        lives -= 1
        livesText.textContent = `Lives: ${lives}`
        generateWord()
    }
}

function newClick() {
    if (lives > 0 && !(usedWords.includes(currentWord))) {
        usedWords.push(currentWord)
        score += 1
        generateWord()
        scoreText.textContent = `Score: ${score}`
    }

    else if (lives == 0) {
        usedWords = []
        generateWord()
    }

    else {
        lives -= 1
        livesText.textContent = `Lives: ${lives}`
        generateWord()
    }
}