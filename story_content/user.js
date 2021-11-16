function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6SxOa6aKhEC":
        Script1();
        break;
      case "5aVV3yVk4pu":
        Script2();
        break;
      case "61d4aJXDExz":
        Script3();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script2()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwBJpH7cAqALcKVB2goCo5RWoRRWA4Tx2PLNyrXGZaX3bpbglItGKbRBYkckVOxvEPKDg/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
 "email" : player.GetVar("email"),
"diem" : player.GetVar("diem")
}

}

function Script3()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

