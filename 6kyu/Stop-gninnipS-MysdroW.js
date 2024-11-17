function spinWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
        .join(' ');
}

//prep
//parameters--> One string of one or more words
//return--> the same string,but if a word in the string is 5 or more letters
//example--split into an array,reverse mthod,join method