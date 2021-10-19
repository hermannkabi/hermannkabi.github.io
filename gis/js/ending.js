var map1 = {};
if(typeof(Storage)!=="undefined"){
  try{
    map1 = JSON.parse(sessionStorage.answers);
  }catch(e){
    console.log(e);

  }
}
var password = "";
var vals = Object.keys(map1).map(function(key) {
    return map1[key];
});
for(var value of vals){
  password += value;
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
