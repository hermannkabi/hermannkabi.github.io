var password = "";

if(typeof(Storage)!=="undefined"){
  password = sessionStorage.answers;
  console.log(password);
  password = password.replace("undefined", "");
  password = password.replace("[object Object]", "");

}else{
  alert("Brauserit ei toetata.");
}


$(".name-input").val(password);


$(".start-btn").click(function (){
  $(".start-data").hide();

  var correctPassword = "salasona";
  if($(".name-input").val().toLowerCase() === correctPassword.toLowerCase()){
    //Yay, correct
    $(".name").text(sessionStorage.name);
    $(".correct").show();
  }else{
    //Nay, try again
    $(".incorrect").show();
  }
});
$(".name-input").val(password);


$(".false-btn").click(function (){
  $(".start-data").hide();

  var correctPassword = "salasona";
  if($(".name-input-false").val().toLowerCase() === correctPassword.toLowerCase()){
    //Yay, correct
    $(".name").text(sessionStorage.name);
    $(".incorrect").hide();
    $(".correct").show();
  }else{
    //Nay, try again
    $(".incorrect").show();
  }
});
