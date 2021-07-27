
  var arr_bomber = [];
  var nbr_bomber = 16;
  var start_play = 1;
  var difficulty = 100;
  var y = 0;
  var points = 0;

//   il ciclo do while continua finchè non viene scelta la difficoltà corretta
  do {
    difficulty = prompt('Scegli la difficoltà: 0 - Facile | 1 - Intermedia | 2 - Difficile');
} while ((difficulty != '0') && (difficulty != '1') && (difficulty != '2'))

switch (difficulty) {
    
    case '0':
        difficulty = 100;
    break;

    case '1':
        difficulty = 80;
    break;
        
    case '2':
        difficulty = 50;
    break;
}

// genera la "posizione" ramdom e non ripetuta delle bombe
while (y < nbr_bomber) {
    
    pos_bomber = getRndInteger(start_play, difficulty);

    var check_pos_bomb = contains(arr_bomber, pos_bomber)

    if (check_pos_bomb == false) {
    arr_bomber.push(pos_bomber);
    y++;
    }
}

console.log(arr_bomber);
// In seguito l’utente sceglierà i numeri compresi tra start_play(1) e difficulty(100 - 80 - 50).
   
creaCampo(difficulty);
document.getElementById('campo').addEventListener('click',
    function(e) {

        let nbr_play = difficulty - nbr_bomber;
        let nbr_player = parseInt(e.target.dataset.cella);
        let element = document.querySelectorAll('[data-cella="' + nbr_player + '"]');
        let check_bomb_player = contains(arr_bomber, nbr_player);
        
        do {

            if (points == nbr_play){
                alert('Hai evitato tutte le bombe! Hai vinto!');
                document.getElementById("numero_giocate").innerHTML = "Hai totalizzato: " + points + " punti";
                document.getElementById("array_bombe").innerHTML = "Le bombe erano in posizione " + arr_bomber;
                return;
            }

            if (check_bomb_player == true){
                element[0].classList.add('red');
                document.getElementById("numero_giocate").innerHTML = "Hai totalizzato: " + points + " punti";
                document.getElementById("array_bombe").innerHTML = "Le bombe erano in posizione " + arr_bomber;
                return;
            }    
            
            if(element[0].classList.contains('green')) {
                return;
            }

            if (check_bomb_player == false) {
                points += 1;
                element[0].classList.add('green');
                return;
            }
            // La partita termina quando il giocatore inserisce un numero “vietato”      
        } while(points <= nbr_play)
    }
    
)


/// FUNCTION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function creaCampo(celle){

    for(let i = 1; i <= celle; i++){
        let cella = `
            <div data-cella="${i}" id="cella">${i}</div>
        `;
        let templateCella = document.createElement('DIV');
        templateCella.classList.add('square');
        templateCella.innerHTML = cella;
        document.getElementById('campo').appendChild(templateCella);
    }
}

// funzione che mi permette di generare dei numeri casuali tra un minimo e un massimo.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
// funzione che mi permette di verificare se i numeri non siano già stati usati all' interno di uno specifico array.
function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
