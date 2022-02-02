function sendEmail(destination, subject, email, name, message){
  Email.send({
    Host: "smtp.gmail.com",
    Username: "andhel.forms@gmail.com",
    Password: "GassyChibi12318",
    To: destination,
    From: "andhel.forms@gmail.com",
    Subject: subject,
    Body: "From: " + email + "\n\n" + name + "\n" + message,
  }).then(
  message => alert("Message sent!"))
  console.log("Null")
}

if (document.getElementById("griev-submit")) {
var submit = document.getElementById("griev-submit");
submit.addEventListener("click", function(){
  var name = document.getElementById("gr-name").value;
  var email = document.getElementById("gr-email").value;
  var msg = document.getElementById("gr-msg").value;
  var subject = document.getElementById("gr-subject").value;
  sendEmail("FTAOFFICE@FONTANATEACHERS.ORG", subject, email, name, msg)
})
}

if (document.getElementById("con-submit")) {
var submit = document.getElementById("con-submit")
submit.addEventListener("click", function(){
  var name = document.getElementById("con-name");
  var email = document.getElementById("con-email");
  var msg = document.getElementById("con-msg")
  var subject = document.getElementById("con-subject")
  sendEmail("FTAOFFICE@FONTANATEACHERS.ORG", subject, email, name, msg)
})
}


if (document.getElementById("pr-forms")) {
  var submit = document.getElementsByClassName("pr-submit");
  var name = document.getElementsByClassName("pr-name");
  var email = document.getElementsByClassName("pr-email");
  var subject = document.getElementsByClassName("pr-subject");
for (i=0; i<submit.length; i++){
  console.log(name.item(i))
}
}

