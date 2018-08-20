 /*
        https://webapps.towson.edu/ows/prepositions.htm

        https://www.c-sharpcorner.com/article/search-word-or-substring-from-paragraph-or-string-using-javascript-and-jquery/

        https://blog.mariusschulz.com/2016/07/16/removing-elements-from-javascript-arrays
        
        https://discourse.algolia.com/t/custom-stop-words/771/4
        
        https://stackoverflow.com/questions/6686718/javascript-code-to-filter-out-common-words-in-a-string

        https://stackoverflow.com/questions/30906807/word-frequency-in-javascript

        */




 function counter() {
     var secTitle = document.getElementsByTagName('h1')[0].innerHTML;
     var secondPara = document.getElementsByTagName('p')[0].innerHTML;
     var secPara = second.toString();
     // console.log(secTitle);

     // var position = secondPara.search("is");
     // console.log(position);

     var replaceSpecial = secondPara.replace(/[^a-zA-Z ]/g, ""); // removing special charecters

     arrayStr = function (text) {
         return text.trim().toLowerCase().split(",");
     };


     // console.log(arrayStr(secondPara +"\n"));
     var splitted = (arrayStr(replaceSpecial));
     document.getElementById("array").innerHTML = splitted; //splliting words.


     //https://discourse.algolia.com/t/custom-stop-words/771/4


     function removeStopWords(string) {
         const stopWordList = ["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your", "aint", "arent", "cant", "couldve", "couldnt", "didnt", "doesnt", "dont", "hasnt", "hed", "hell", "hes", "howd", "how'll", "hows", "id", "ill", "im", "ive", "isnt", "its", "mightve", "mightnt", "mustve", "mustnt", "shant", "shed", "she'll", "she's", "should've", "shouldnt", "thatll", "thats", "theres", "theyd", "theyll", "theyre", "theyve", "wasnt", "wed", "well", "were", "werent", "whatd", "whats", "whend", "whenll", "whens", "whered", "wherell", "wheres", "whod", "wholl", "whos", "whyd", "whyll", "whys", "wont", "wouldve", "wouldnt", "youd", "youll", "youre", "youve"];

         let querywords = string;
         let finalString = [];
         for (let i = 0; i < querywords.length - 1; i++) {
             if (stopWordList.indexOf(querywords[i]) !== -1)
                 continue;
             finalString.push(querywords[querywords[i]]);
         }
         finalString.push(querywords[querywords.length - 1]);
         return finalString.join('');
     }


     var query = removeStopWords(splitted);
     document.getElementById("astop").innerHTML = query;


     function wordfreq(string) {
         var words = string.replace(/[.]/g, "").split(/\s/);
         var freqMap = {};
         words.forEach(function (w) {
             if (!freqMap[w]) {
                 freqMap[w] = 0;
             }
             freqMap[w] += 1;
         });
         return freqMap;
     }
     console.log(wordfreq(query));

     var count = wordfreq(query);
     // var answer= Object.values(count);
     console.log(count);
     var JsonAns = JSON.stringify(count, null, "\t");
     document.getElementById("count").innerHTML = JsonAns;
 }