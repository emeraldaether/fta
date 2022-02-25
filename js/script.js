function sendEmail(destination, subject, email, name, message){
  if (validateForm(name, email, subject, message) == true){
    Email.send({
      Host: "smtp.gmail.com",
      Username: Abc + deF + bcd + Cde + BCd + DEf + "." + bCd + Efg + fgh + dEf + FGh + "@" + bcD + dEf + Abc + CDE + DEf + "." + aBC + Efg + dEf,
      Password: bCD + Abc + FGh + FGh + hij + aBc + Cde + CDE + ABC + CDE + hIj + hIJ + hiJ + hIj + iJk,
      To: destination,
      From: Abc + deF + bcd + Cde + BCd + DEf + "." + bCd + Efg + fgh + dEf + FGh + "@" + bcD + dEf + Abc + CDE + DEf + "." + aBC + Efg + dEf,
      Subject: subject,
      Body: "From: " + email + "\n\n" + name + "\n" + message,
    }).then(function(){
      window.location.replace("thankyou.html")})}
}
function validateForm(name, email, subject, message){
  if (name.length < 1) {
    alert('Please enter your full name.');
    return false
  } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){
    return false
    alert('Please enter a valid email address.')
  } else if (subject.length < 1) {
    alert("Please enter the subject of your message.")
    return false
  } else if (message.length < 5){
    alert("Please enter a message.")
    return false
  } else {
    return true
  }
}

if (document.getElementById("form-submit")) {
var submit = document.getElementById("form-submit");
submit.addEventListener("click", function(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  var subject = document.getElementById("subject").value;
  if (document.getElementById("grievance-form")) {
    var destination = "FTAOFFICE@FUSD.NET";
  } else if (document.getElementById("contact-form")) {
    var destination = "FTAOFFICE@FUSD.NET";
  } else if (document.getElementById("neg-form")) {
    var destination = "FTAOFFICE@FUSD.NET";
  } else if (document.getElementById("org-form")) {
    var destination = "FTAOFFICE@FUSD.NET"
  }
  sendEmail(destination, subject, email, name, msg)
  // console.log(destination, name, email, msg, subject)
})
}

if (document.getElementById("pr-forms")) {
  var first = document.getElementById("pr-submit-0");
  var second = document.getElementById("pr-submit-1");
  var third = document.getElementById("pr-submit-2");

  var chooseDestination = function(choice, destination){
    var name = document.getElementById('pr-name-' + choice).value;
    var email = document.getElementById('pr-subject-' + choice).value;
    var msg = document.getElementById('pr-msg-' + choice).value;
    var subject = document.getElementById('pr-subject-' + choice).value;
    sendEmail(destination, subject, email, name, msg)
    // console.log(destination, name, email, msg, subject)
  }

  first.addEventListener("click", function(){
    chooseDestination("0", "HerePR@fusd.net")
  });
  second.addEventListener("click", function(){
    chooseDestination("1", "ClufSR@fusd.net")
  });
  third.addEventListener("click", function(){
    chooseDestination("2", "RondEL@fusd.net")
  });
}

var abc = "A";
var Abc = "a";
var ABc = "B";
var ABC = "b";
var aBc = "C";
var aBC = "c";
var abC = "D";
var bcd = "d";
var Bcd = "E";
var BCd = "e";
var BCD = "F";
var bCd = "f";
var bCD = "G";
var bcD = "g";
var cde = "H";
var Cde = "h";
var CDe = "I";
var CDE = "i";
var cDe = "J";
var cDE = "j";
var cdE = "K";
var def = "k";
var Def = "L";
var DEf = "l";
var DEF = "M";
var dEf = "m";
var dEF = "N";
var deF = "n";
var efg = "O";
var Efg = "o";
var EFg = "P";
var EFG = "p";
var eFg = "Q";
var eFG = "q";
var efG = "R";
var fgh = "r";
var Fgh = "S";
var FGh = "s";
var FGH = "T";
var fGh = "t";
var fGH = "U";
var fgH = "u";
var ghi = "V";
var Ghi = "v";
var GHi = "W";
var GHI = "w";
var gHi = "X";
var gHI = "x";
var ghI = "Y";
var hij = "y";
var Hij = "Z";
var HIj = "z";
var HIJ = " ";
var hIj = "1";
var hIJ = "2";
var hiJ = "3";
var ijk = "4";
var Ijk = "5";
var IJk = "6";
var IJK = "7";
var iJk = "8";
var iJK = "9";
var ijK = "0";