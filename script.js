var messtext;
var rep;
var answer = "Hello !";
var notText = "Je ne comprends pas votre question";
var fine = "plutot bien et vous ?";
var question = form.elements['question'].value;
var welcomeNew = " Bonjour! Pour atteindre le sujet voulu : ";
var choice1 = "Pour mes Projets, tapez 1";
var choice2 = "Pour en savoir plus sur moi, tapez 2";
var choice3 = "Jouer à un petit jeu en Javascript, tapez 3";
var choice4 = "Me contacter, tapez 4";
var space = "--------------";
var ok = "Tres bien !";
var ok1 = " C'est parti !";
var ok2 = "En avant toute ! ";
var ok3 = " Let's go !"

function getAnswer(form) {
    userName();
    question = form.elements['question'].value;
    node = document.createElement("DIV");
    textnode = document.createTextNode(question);
    node.appendChild(textnode);
    document.getElementById("msg").appendChild(node);
    timeSet2();
    node.className = "quest";
    document.getElementById("question").value = "";
    document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
    giveTime();
    return false;
}


function botAnswer() {
    if (question.toLowerCase() === "bonjour" || question.toLowerCase() === "hello" || question.toLowerCase() === "hey" || question.toLowerCase() === "hi" || question.toLowerCase() === "coucou") {
        botName();
        node = document.createElement("DIV");
        var textnode = document.createTextNode(answer);
        node.appendChild(textnode);
        document.getElementById("msg").appendChild(node);
        timeSet();
        node.className = "rep";
        document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
    } else if (question == '1') {
        botName();
        node = document.createElement("DIV");
        var textnode = document.createTextNode(ok);
        node.appendChild(textnode);
        document.getElementById("msg").appendChild(node);
        timeSet();
        document.getElementById("msg").appendChild(node2);
        node.className = "rep";
        document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
        giveTimeProject();

    } else if (question == '2' || question.toLowerCase() == 'cv' || question.toLowerCase() == 'qui') {
        botName();
        node = document.createElement("DIV");
        var textnode = document.createTextNode(ok1);
        node.appendChild(textnode);
        document.getElementById("msg").appendChild(node);
        timeSet();
        document.getElementById("msg").appendChild(node2);
        node.className = "rep";
        document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
        giveTimeCv();

    } else if (question == '3') {
        botName();
        node = document.createElement("DIV");
        var textnode = document.createTextNode(ok2);
        node.appendChild(textnode);
        document.getElementById("msg").appendChild(node);
        timeSet();
        document.getElementById("msg").appendChild(node2);
        node.className = "rep";
        document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
        giveTimeQuiz();

    } else if (question == '4') {
        botName();
        node = document.createElement("DIV");
        var textnode = document.createTextNode(ok3);
        node.appendChild(textnode);
        document.getElementById("msg").appendChild(node);
        timeSet();
        document.getElementById("msg").appendChild(node2);
        node.className = "rep";
        document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
        giveTimeContact();
        

    } else if (question.toLowerCase() == "help" || question.toLowerCase() == "au secours") {
        botName();
        node = document.createElement("DIV");
        node5 = document.createElement("DIV");
        node3 = document.createElement("DIV");
        node4 = document.createElement("DIV");
        var textnode = document.createTextNode(choice1);
        var textnode2 = document.createTextNode(choice2);
        var textnode3 = document.createTextNode(choice3);
        var textnode4 = document.createTextNode(choice4);
        node.appendChild(textnode);
        document.getElementById("msg").appendChild(node);
        node5.appendChild(textnode2);
        document.getElementById("msg").appendChild(node5);
        node3.appendChild(textnode3);
        document.getElementById("msg").appendChild(node3);
        node4.appendChild(textnode4);
        document.getElementById("msg").appendChild(node4);
        timeSet();
        document.getElementById("msg").appendChild(node2);
        node.className = "rep";
        node5.className = "rep";
        node3.className = "rep";
        node4.className = "rep";
        document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
    
    
    
    }else if (question.toLowerCase() === "ca va?" || question.toLowerCase() === "la forme?" || question.toLowerCase() === "ca farte?" || question.toLowerCase() === "roots?") {
        botName();
        node = document.createElement("DIV");
        var textnode = document.createTextNode(fine);
        node.appendChild(textnode);
        document.getElementById("msg").appendChild(node);
        timeSet();
        document.getElementById("msg").appendChild(node2);
        node.className = "rep";
        document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
    } else {
        botName();
        node = document.createElement("DIV");
        var textnode = document.createTextNode(notText);
        node.appendChild(textnode);
        document.getElementById("msg").appendChild(node);
        timeSet();
        node.className = "rep2";
        document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
    }
}

function giveTime() {
    setTimeout(botAnswer, 1000);
}
//function Timeout for projets
function project(){
    window.open("projets.html");
}
function giveTimeProject(){
    setTimeout(project, 2500);
}
//function Timeout for quiz
function quiz(){
    window.open("quizGame/index.html");
}
function giveTimeQuiz(){
    setTimeout(quiz, 2500);
}
//function Timeout for CV
function cv(){
    window.open("Will_Dev.html");
}
function giveTimeCv(){
    setTimeout(cv, 2500);
}
//function Timeout for contact
function contact(){
    window.location.href = "mailto:wilfried.rolland.dev@gmail.com";
}
function giveTimeContact(){
    setTimeout(contact, 2500);
}

function timeSet() { //heure pr le bot
    d = new Date();
    var hour = d.toLocaleTimeString();
    node2 = document.createElement("P");
    var hourPlus = document.createTextNode(hour);
    node2.appendChild(hourPlus);
    document.getElementById("msg").appendChild(node2);
    node2.className = "hour";
    clearTimeout(timeSet);
}

function timeSet2() { //heure pr l'utilisateur
    timeSet();
    node2.className = "hour2";
}

function botName() {
    var nameBot = "Will.Dev";
    node3 = document.createElement("P");
    var textnode = document.createTextNode(nameBot);
    node3.appendChild(textnode);
    document.getElementById("msg").appendChild(node3);
    node3.className = "botName";
}

function userName() {
    var nameBot = "Vous";
    node3 = document.createElement("P");
    var textnode = document.createTextNode(nameBot);
    node3.appendChild(textnode);
    document.getElementById("msg").appendChild(node3);
    node3.className = "userName";
}
// searchWelcome();
setTimeout(searchWelcome, 3000);

function searchWelcome() {
    // setTimeout(welcome, 1000);
    setTimeout(choiceOne, 1000);
    setTimeout(choiceTwo, 1500);
    setTimeout(choiceThree, 2000);
    setTimeout(choiceFour, 2500);
}


// function welcome() {
//     botName();
//     node = document.createElement("DIV");
//     var textnode = document.createTextNode(welcomeNew);
//     node.appendChild(textnode);
//     document.getElementById("msg").appendChild(node);
//     timeSet();
//     node.className = "rep2";
//     document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
// }


//fonction de choix pour le menu
function choiceOne() {
    node = document.createElement("DIV");
    var textnode = document.createTextNode(choice1);
    node.appendChild(textnode);
    document.getElementById("msg").appendChild(node);
    node.className = "rep2";
    document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
    node = document.createElement("DIV");
    var textnode = document.createTextNode(space);
    node.appendChild(textnode);
    document.getElementById("msg").appendChild(node);
    node.className = "space";
    document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;

}

function choiceTwo() {
    node = document.createElement("DIV");
    var textnode = document.createTextNode(choice2);
    node.appendChild(textnode);
    document.getElementById("msg").appendChild(node);
    node.className = "rep2";
    document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
    node = document.createElement("DIV");
    var textnode = document.createTextNode(space);
    node.appendChild(textnode);
    document.getElementById("msg").appendChild(node);
    node.className = "space";
    document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
}
function choiceThree() {
    node = document.createElement("DIV");
    var textnode = document.createTextNode(choice3);
    node.appendChild(textnode);
    document.getElementById("msg").appendChild(node);
    node.className = "rep2";
    document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
    node = document.createElement("DIV");
    var textnode = document.createTextNode(space);
    node.appendChild(textnode);
    document.getElementById("msg").appendChild(node);
    node.className = "space";
    document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
}
function choiceFour() {
    node = document.createElement("DIV");
    var textnode = document.createTextNode(choice4);
    node.appendChild(textnode);
    document.getElementById("msg").appendChild(node);
    node.className = "rep2";
    document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
    node = document.createElement("DIV");
    var textnode = document.createTextNode(space);
    node.appendChild(textnode);
    document.getElementById("msg").appendChild(node);
    node.className = "space";
    document.getElementById("msg").scrollTop = document.getElementById('msg').scrollHeight;
}



// fermeture de fenetre
closeWindow();
function closeWindow(){
    var x = document.getElementById('cross');
    x.addEventListener('click', twFermer());
}


function twFermer() {
    window.close();
  }