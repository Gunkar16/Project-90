var player1_name=localStorage.getItem("player1name")
var player2_name=localStorage.getItem("player2name")

var player1score=0;
var player2score=0;

document.getElementById("player1name_score").innerHTML=player1_name+": "+player1score;
document.getElementById("player2name_score").innerHTML=player2_name+": "+player2score;


document.getElementById("player_answer").innerHTML="Answer Turn -";
document.getElementById("player_question").innerHTML="Question Turn - ";
document.getElementById("player1name").innerHTML=player1_name;
document.getElementById("player2name").innerHTML=player2_name;

function send(){
    var getNUM1 = document.getElementById("word").value;
    console.log(getword);
    var word = getword.toLowerCase();
    console.log(word);

    var charat1 = word.charAt(1);
    var length_div2=Math.floor(word.length/2)
    var charat2 = word.charAt(length_div2)
    var word_length = word.length-1;
    var charat3 = word.charAt(word_length)

    var removecharat1 = word.replace(charat1,"_");
    console.log(removecharat1);
    var removecharat2 = removecharat1.replace(charat2,"_");
    console.log(removecharat2);
    var removecharat3 = removecharat2.replace(charat3,"_");
    console.log(removecharat3);

    var question_word = "<h4 id='word_display'>q: "+ removecharat3 + "</h4>";
    var input_box = "<br> answer: <input type='text' id='input_check_box'>";
    var check_button = "<br> <br> <button class='btn btn-danger' onclick='check()'>check</button>"
    var row = question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").innerhtml="";
}