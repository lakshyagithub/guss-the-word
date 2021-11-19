//vars
var player1_name = localStorage.getItem("player1_name");
var q_turn;
var a_turn;
var player2_name = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;
var word;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;q_turn="player1";
document.getElementById("player_question").innerHTML="question turn : "+player1_name;a_turn="player2"
document.getElementById("player_answer").innerHTML="answer turn : "+player2_name;
function send(){
    var getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log("Hi");
    if(word.length<5){
        window.alert("Enter words with more letters");
    }
    else{
    //Blank
    console.log("word received : "+getword);
    console.log("word in small letters : "+word);
    var ch1=word.charAt(1);
    var l2=Math.floor(word.length/2);
    var ch2=word.charAt(2);
    var ch3=word.charAt(3);
    var l_1=word.length-1
    var r1=word.replace(ch1,"_")
    var r2=r1.replace(ch2,"_")
    var r3=r2.replace(ch3,"_")
    console.log(r3);console.log(r2);console.log(r1);



    var quo="<h4 id='Word_display'>Q. "+r3+"</h4>";
    var ib="<br>Answer: <input type='text' id='check_ans'>";
    var cb="<br><br><button id='check_button' class='btn btn-info' onclick='check()'>check</button>";
    var op=quo+ib+cb;
    document.getElementById("output").innerHTML=op;
    document.getElementById("word").value=""
}}
function check() {
    var ans=document.getElementById("check_ans").value;
    ans=ans.toLowerCase();
    console.log(ans);
    if (ans==word) {
        window.alert("Correct answer!");
        if (a_turn=="player1")
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
            
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
            
        }
    }
    else{
        window.alert("Wrong answer!")
    }
    if(q_turn=="player1"){
        q_turn="player2"
        document.getElementById("player_question").innerHTML="question turn : "+player2_name;
    }
    else{
        q_turn="player1"
        document.getElementById("player_question").innerHTML="question turn : "+player1_name;
    }
    if(a_turn=="player1"){
        a_turn="player2"
        document.getElementById("player_answer").innerHTML="answer turn : "+player2_name;
    }
    else{
        a_turn="player1"
        document.getElementById("player_answer").innerHTML="answer turn : "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}