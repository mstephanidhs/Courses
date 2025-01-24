/*
Challenge:
    1. Change the lowercase i’s to uppercase.
*/

const sentence1 = 'i went to Australia and i saw a shark';

console.log(sentence1.replaceAll('i', 'I'));
//I went to AustralIa and I saw a shark

// Regex (regular expression) is a sequence of characters that specifies a match pattern in text
console.log(sentence1.replaceAll(/\b(i)\b/g, 'I'));
//I went to Australia and I saw a shark

const sentence2 = 'I love you with all my heart!';

console.log(
  sentence2.replaceAll(/\b(love|heart)\b/g, function (match) {
    return `${match} 💜`;
  })
);

//love
//heart
//I undefined you with all my undefined!

const paragraph = "javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring"

/*
Challenge:
    1. Use replaceAll and regex to ensure the first
       character of each sentence is uppercase.
       You will need to use a string method which converts
       characters to uppercase.
*/

console.log(paragraph.replaceAll(/(?:^|\.\s)([A-Za-z])/g, function(match){
    return match.toUpperCase()
}))
