

function LongestWord(sen) {
    var array = sen.split(" ");
    var long_word;
    var word_len=0;
    var letter = /[^A-Za-z0-9]/g;

    for(i=0;i< array.length;i++){
        if(array[i].length> word_len && (array[i].match(letter)== null)){
            word_len=array[i].length;
            long_word=array[i];
        } else if(array[i].length==word_len){
            long_word= long_word;
        }
    }
    return long_word;
}

// keep this function call here 
console.log(LongestWord("123456 324"));
