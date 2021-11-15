function sendEmail(){
    let name = document.getElementById("name");
    let _replyto = document.getElementById("_replyto");
    let _subject = document.getElementById("_subject");
    let message = document.getElementById("message");

    var xhr = new XMLHttpRequest();
    var url = "https://api.sendgrid.com/v3/mail/send";

    xhr.open("POST", url, true);

    xhr.setRequestHeader("x-api-key", "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");
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = JSON.stringify(
        {
            "personalizations":[{
                "to":[{"email":"pdias@mail.com","name":"Pedro"}],
                "subject":"Hello, World!"}],
            "content": [{"type": "text/plain", "value": "Heya!"}],
            "from":{"email":"sam.smith@example.com","name":"Sam Smith"},
            "reply_to":{"email":"sam.smith@example.com","name":"Sam Smith"}
        });

    xhr.send(data);
}
/* function sendEmail(){
    let name = document.getElementById("name");
    let _replyto = document.getElementById("_replyto");
    let _subject = document.getElementById("_subject");
    let message = document.getElementById("message");

    var xhr = new XMLHttpRequest();
    var url = "https://contact-mail.appit-online.de/v1/mail";

    xhr.open("POST", url, true);

    xhr.setRequestHeader("x-api-key", "0e20809a-874f-45b2-871a-d555c1a2ebd4");
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = JSON.stringify(
        {
            "fromName": name.value,
            "fromMail": _replyto.value,
            "subject": _subject.value,
            "content": message.value
        });

    xhr.send(data);
}
 */
