
// function threeOrMore(words) {
//   let newArray = [];
//   if (words.length >= 3 ) {
//     newArray.push(words);
//   }
//   return newArray;
// };

let outputArray =[];

$(document).ready(function() {
  $("#form1").submit(function(event){
    event.preventDefault();
    let sentence = $("#sentenceInput").val();
    let words = sentence.split(" ")
    console.log(words);
    words.forEach(function(element) {
      if (wondrag.length >= 3) {
        outputArray.push(threeOrMore(words));
      }
    });

    $(".result").text(sentence);
    console.log("we did it");
  });
});