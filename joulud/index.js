$(".book-title-button").click(function(){
  setTimeout(
    function (){
      window.location.href = "#present-4";
    }, 1000
  )
});
$(".download-button").click(function (){
  window.open("list.docx", '_blank').focus();
});


var elem = $("html")[0];

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
  setTimeout(function (){
    window.location.href='#present-1';

  }, 100);

}
