showMore();
function showMore(){
var one = document.getElementById('chatbot');
one.addEventListener('click', showMore);
if (one.style.width = 100%){
    document.getElementById('chatbot').style.width = '200%';

}else {
    document.getElementById('chatbot').style.width = '100%';
}
}