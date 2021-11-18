$("#submit-btn").click(function (){
  $(".error").text("");
  $(".success").val("");


  var name = $(".name").val();
  var email = $(".email").val();
  var message = $(".message").val().replace(/\r?\n/g, '<br>');


  if(name.length > 0 && email.length > 0 && message.length > 0){
    //Submit form
    const key = "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";
    fetch(
      "https://api.sendinblue.com/v3/smtp/email",
      {
        method:"POST",
        headers: {"accept": "application/json", "api-key":key, "content-type": "application/json"},
        body: JSON.stringify({
          "sender":{
              "name":name,
              "email":email,
           },
           "to":[
              {
                 "email":"hermann.kaebi@gmail.com",
                 "name":"Hermann Käbi"
              }
           ],
           "subject":"Füüsika lahtine võistlus",
           "htmlContent":message
        })
      },
    ).then(res => {
      var statusCode = res.status;
      var firstChar = statusCode.toString().charAt(0);
      if(firstChar === "2"){
          $(".success").text("Successfully sent email!");
      }
});
  }else{
    $(".error").text("All fields are required!");
  }
});
