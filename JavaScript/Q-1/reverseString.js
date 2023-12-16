// function reverseWords(sentence) {

//     var words = sentence.split(' ');

//     var reversedWords = words.map(function(word) {
     
//         return word.split('').reverse().join('');
//     });

//     var reversedSentence = reversedWords.join(' ');

//     return reversedSentence;
// }

function reverseWords(sentence) {
    // Function to reverse a string
    function reverseString(str) {
        var reversed = '';
        for (var i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }

    // Split the sentence into an array of words
    var words = [];
    var currentWord = '';
    for (var i = 0; i < sentence.length; i++) {
        var currentChar = sentence[i];

        // If the current character is a space, store the current word
        if (currentChar === ' ') {
            words.push(currentWord);
            currentWord = '';
        } else {
            // Build the current word
            currentWord += currentChar;

            // If it's the last character, store the last word
            if (i === sentence.length - 1) {
                words.push(currentWord);
            }
        }
    }

    // Reverse each word in the array
    for (var j = 0; j < words.length; j++) {
        words[j] = reverseString(words[j]);
    }

    // Join the reversed words back into a sentence
    var reversedSentence = words.join(' ');

    return reversedSentence;
}


// Example usage
var inputSentence = "This is a sunny day";
var reversedSentence = reverseWords(inputSentence);

console.log("Original Sentence: " + inputSentence);
console.log("Reversed Sentence: " + reversedSentence);
