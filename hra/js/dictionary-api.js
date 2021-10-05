import {addRow} from "./db.js";

const userAction = async (word, pageNr) => {

  $(".loading-text").remove();
  $(".add-btn-div").append("<p style='display:inline-block' class='loading-text'>Loading...</p>");

// TODO: Add 404 check
  if(word.length > 0){
    var response  = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);

    if(response.status === 200){
      const myJson = await response.json(); //extract JSON from the http response
      // do something with myJson
      const definition = myJson[0].meanings[0].definitions[0].definition;
      $(".loading-text").remove();
      $("#word").val("");
      $("#pagenr").val("");

      console.log(definition);

      addRow(word, definition, pageNr, "-");


      const tableRow = "<tr><td>"+word+"</td><td>"+pageNr+"</td><td>"+definition+"</td><td>-</td></tr>";
      $("table").append(tableRow);
    }
  }else{
    $(".loading-text").html("<p style='display:inline-block; color:red;' class='loading-text'>An error occured!</p>");
  }

}






$(".add-button").click(function (){
  var word = $("#word").val();
  var pageNr = $("#pagenr").val();
  console.log(word);
  console.log(pageNr);
  userAction(word, pageNr);
});
