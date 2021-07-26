
// funzione che mi permette di generare dei numeri casuali tra un minimo e un massimo.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
// funzione che mi permette di verificare che i numeri non siano già stati usati.
function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

  var arr_bomber = [];
  var nbr_bomber = 16;
  var start_play = 1;
  var difficult = 100;
  var y = 0;

// genera la "posizione" ramdom e non ripetuta delle 16 bombe
while (y < nbr_bomber) {
    
    pos_bomber = getRndInteger(start_play, difficult);

    var check_pos_bomber = contains(arr_bomber, pos_bomber)

    if (check_pos_bomber == false) {
    arr_bomber.push(pos_bomber);
    y++;
    }
}
// array che contiene la "posizione" ramdom e non ripetuta delle 16 bombe
console.log(arr_bomber);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var nbr_play = difficult - nbr_bomber;
var arr_player = [];
var z = 0;
while (z <= nbr_play) {

    var nbr_player = parseInt(prompt('Inserisci un numero da 1 a 100'));
    
    if (nbr_player >= start_play && nbr_player <= difficult) {
        // L’utente non può inserire più volte lo stesso numero.
        var check_pos_player = contains(arr_player, nbr_player)
        if (check_pos_player == false) {
            arr_player.push(nbr_player);
            z++;
        } else if (check_pos_player == true)
        alert('Numero già inserito! riprova!');

        var check_play_player = contains(arr_bomber, nbr_player);
        // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
        if(check_play_player == false && check_pos_player == false) {
        alert('Nessuna bomba trovata! Continua a giocare!');  
        // La partita termina quando viene inserito dal player un numero presente all'interno dell' array bombe. 
        } else if (check_play_player == true) {
        alert('Hai preso una bomba! Partita persa!') 
        break;
        // La partita termina quando raggiunge il numero massimo possibile di numeri consentiti.
        } else if (arr_player.length == nbr_play) {
        alert('Hai evitato tutte le bombe! Hai vinto');
        break;
        } 
    // La partita termina quando il giocatore inserisce un numero “vietato”     
    } else {
        alert("Il numero inserito non è corretto!");
        break;
    }
}       

document.getElementById("array_bombe").innerHTML = "le bombe sono in posizione " + arr_bomber;
document.getElementById("array_giocatore").innerHTML = "i numeri scelti dal player sono " + arr_player;
document.getElementById("numero_giocate").innerHTML = "il numero di giocare del player sono " + z;
console.log(arr_player)


// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.







// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve…
