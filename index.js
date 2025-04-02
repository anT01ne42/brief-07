//Créer un programme JavaScript permettant à un joueur de jouer à Pierre - Feuille - Ciseaux contre l'ordinateur, dans la console du navigateur, en utilisant prompt() et alert().

//Le joueur entre son choix via un prompt() :

//"pierre" / "feuille" / "ciseaux"

let Pierre = "pierre";
let Feuille = "feuille";
let Ciseaux = "ciseaux";

let options = [Pierre, Feuille, Ciseaux];

function Game() {

    let scorePlayer = 0;
    let scoreGame = 0;

    while (scoreGame < 3 && scorePlayer < 3) {
        let choicePlayer = prompt("Choisi : Pierre - Feuille - Ciseaux");
        console.log("L'ordinateur a " + scoreGame + " points et vous avez " + scorePlayer + " points.");

        while (choicePlayer.toLowerCase !== "pierre" || choicePlayer.toLowerCase !== "feuille" || choicePlayer.toLowerCase !== "ciseaux") {
            if (choicePlayer.toLowerCase() === "pierre") {
                choicePlayer = options[0];
                break;
            } else if (choicePlayer.toLowerCase() === "feuille") {
                choicePlayer = options[1];
                break;
            } else if (choicePlayer.toLowerCase() === "ciseaux") {
                choicePlayer = options[2];
                break;
            } else {
                alert("Choix Invalide. Réssayez :");
                choicePlayer = prompt("Choisi : Pierre - Feuille - Ciseaux");
            }
        }

        //alert("Votre choix : " + choicePlayer);
        console.log("Votre choix : " + choicePlayer);

        //L’ordinateur choisit un coup aléatoire parmi les 3 possibilités.
        let i = Math.floor(Math.random() * options.length);
        let choiceGame = options[i];

        //Le programme affiche le choix de l'ordinateur.

        //console.log(choiceGame + " !");
        alert(choiceGame + " !");

        //Le programme compare les deux choix et annonce le résultat :

        //Égalité
        if (choicePlayer === choiceGame) {
            alert("Egalité ...");
            //Ordinateur gagne
        } else if (choicePlayer === options[0] && choiceGame === options[1] || choicePlayer === options[1] && choiceGame === options[2] || choicePlayer === options[2] && choiceGame === options[0]) {
            scoreGame++;
            alert("Ordinateur gagne");
            //Joueur gagne
        } else if (choicePlayer === options[0] && choiceGame === options[2] || choicePlayer === options[1] && choiceGame === options[0]) {
            scorePlayer++;
            alert("Joueur gagne");
        } else {
            scorePlayer++;
            alert("Joueur gagne");
        }
    }
    //option pour rejouer:
    //Compter le nombre de victoires du joueur vs ordinateur
    //Afficher le score final à la fin
    alert(`Vous avez fini le jeu avec l'ordinateur ayant ${scoreGame} points et vous ayant ${scorePlayer} points.`);

    if (confirm("Rejouer ?")) {
        Game();
    } else {
        alert("Merci d'avoir joué.");
    }
}
Game();
