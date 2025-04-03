function welcome(){
    console.log('function started...');
    let Name=document.getElementById('name');
    let nameSpan=document.getElementById("nameSpan");
    nameSpan.innerText=Name.value+"!";
    Name.value="";
}
function roll(){
    let dice = document.getElementById('dice');
    let random= Math.floor(Math.random()*6)+1;
    let audio = document.getElementById('diceAudio');
    audio.play();
    dice.classList.add('spin');
    setTimeout(function(){
     dice.classList.remove('spin');
     dice.innerText = random;
    }, 1000)
 }