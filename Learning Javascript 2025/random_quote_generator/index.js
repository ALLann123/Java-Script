//This is an Array. Elements have an index
const quotes = [
    "What if, instead of fighting back, we cave, give away our privacy to a world that takes it anyway?",
    "Control can sometimes be an illusion. But sometimes you need illusion to gain control.",
    "Im good at reading people. My secret? I look for the worst in them.",
    "Were all living in each other's paranoia.",
    "I wanted to save the world. I just didn’t know what I was saving it from.",
    "Were all just products of our programming.",
    "I see the beauty in the mundane, the loneliness in the noise. I see all of it.",
    "The world is built on lies. People lie for power, for money, for love. Even to themselves.",
    "I dont give a shit about money.",
    "Youre not a leader. Youre a criminal.",
    "Theres a powerful group of people out there that are secretly running the world.",
    "The concept of waiting bewilders me. There are always deadlines. There are always ticking clocks.",
    "Theyve turned our dissent into intellectual property. Our revolution into a brand.",
    "We all wear masks. Everyone, every day. Sometimes we wear them so much, we forget who we really are.",
    "A bug is never just a mistake. It represents something bigger. An error of thinking. That makes you who you are."
]

//the Set() does not allow duplicates and is a faster data structure. 
//Used here to prevent duplicating quotes. Use with 'new' keyword.
const usedIndexes = new Set()
const quoteElement = document.getElementById('quote')

function generateQuote() {
    while (true) {
        //check if all the available indexes are in our set datastructure
        if (usedIndexes.size >= quotes.length) {
            //now we clear the available quotes
            usedIndexes.clear()
        }
        const randomIdx = Math.floor(Math.random() * quotes.length)
            //check if the usedIndexes(created using set()) has this index means we have used the quote before. Continue reruns the while loop
        if (usedIndexes.has(randomIdx)) continue
            //accessing our array- 'quotes'
        const quote = quotes[randomIdx]
            //populate the quote in our paragraph
        quoteElement.innerHTML = quote;
        //add index used to the set
        usedIndexes.add(randomIdx)
        break
    }


}