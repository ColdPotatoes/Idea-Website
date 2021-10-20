const killBtn = document.getElementById('killBtn');
const lvlMsg = document.getElementById('lvlUp');
let kills = 0;
let lvl = 1;

killBtn.onclick = function() {
    kills = kills + 1; 
    
    document.getElementById('killCount').innerHTML = kills;

    if (kills % 10 == 0) {
        lvl = lvl + 1;
        document.getElementById('lvl').innerHTML = lvl;
        lvlMsg.style.visibility = "visible";
    } else {
       lvlMsg.style.visibility = "hidden";
    }
}

