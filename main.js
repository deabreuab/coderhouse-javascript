//Es un simulador de arcade, tendrá más juegos a futuro, por ahora solo cuenta con el ahorcado

//Bienvenida y elección del juego
// alert("Bienvenido, pasa y disfruta de los mejores minijuegos👾");
// alert("¿Estás listo para enviciarte?");
// const userName = prompt("¿Como te gustaría que te llamara?");
// function gameChoice() {
//     const userChoice = prompt(
//         userName +
//             " ahora puedes escoger, introduce el número indicado para seleccionar un juego:\n 1. Jugar al Ahorcado\n 2. Jugar memoria\n 3. Jugar Casa Embrujada\n 4. Jugar Piedra, Papel o Tijera\n 5. Jugar Adivina la palabra"
//     );

//     switch (userChoice) {
//         case "1":
//             hangmanGame();
//             break;
//         default:
//             alert("Más juego proximamente");
//             break;
//     }


    //Esto será para cuando tenga los demás juegos 

    // (userChoice.length == 1) {
    //     alert("Cargando tu juego, un segundo🕹️");
    // } else if (userChoice === "" || userChoice == null || userChoice == 0) {
    //     keepPlaying("Por favor introduce un número válido");
    // }
// }
// gameChoice()

// function keepPlaying(text) {
//     const stillWantToPlay = confirm(text);
//     if (stillWantToPlay === true) {
//         gameChoice();
//     } else{
//         alert('Hasta la próxima entonces 😭')
//     }
//     return stillWantToPlay;
// }

//Juego del ahorcado

// let selectedWord = "";
// let correctAnswer = [];
// let lifeCount = 5;

//1 .Seleccionar una palabra aleatoria
// function hangmanGame() {
//     alert("¡Que comience el juego! Tu palabra ha sido seleccionada... continua 👻")
//     const words = ["duende", "comentario", "arcoiris", "peluche", "escritorio"];
//     const randomWord = Math.floor(Math.random() * words.length);
//     selectedWord = words[randomWord];
//     console.log(selectedWord);
//     userInput();
// }

//2. Pedir al usuario que introduzca una letra
// function userInput() {
//     const userAnswer = prompt("¿Con que letra quieres probar?");

//     //3. Validar si la respuesta del usuario tiene un formato valido
//     if (userAnswer.trim().length !== 1) {
//         const tryAgain = confirm("Respuesta invalida \n ¿Quieres volver a intentarlo?");
//         if (tryAgain == true) {
//             userInput();
//         } else {
//             //ejecutar función menú inicial
//         }
//     }

//     // 4. Validar si la letra que el usuario puso existe dentro de la palabra
//     const wordExist = selectedWord.includes(userAnswer);
//     if (wordExist !== true) {
//         lifeCount -= 1;
//         alert(`Respuesta incorrecta, estás más cerca de la muerte, te quedan ${lifeCount} vidas`);
//         if (lifeCount === 0) {
//             const playAgain = confirm("¡MORISTE! 💀💀💀 ¿Quieres volver a intentarlo desde el más allá?");
//             if (playAgain == true) {
//                 hangmanGame();
//             } else {
//                 alert("Gracias por jugar, hasta luego!");
//             }
//         }
//         userInput();
//     } else {
//         // 5. Si existe, debe mostrarse la letra en la posición correcta de la palabra
//         correctAnswer.push(userAnswer);
//         let maskedWord = "";
//         for (let i = 0; i < selectedWord.length; i++) {
//             let element = selectedWord[i];
//             if (correctAnswer.includes(element)) {
//                 maskedWord += element;
//             } else {
//                 maskedWord += "_ ";
//             }
//         }
//         if (maskedWord === selectedWord) {
//             const playAgain = confirm(
//                 `¡GANASTE!\n La palabra secreta era ${selectedWord}  ¿Quieres volver a intentarlo?`
//             );
//             if (playAgain == true) {
//                 hangmanGame();
//             } else {
//                 alert("Gracias por jugar, hasta luego!");
//             }
//         }
//         alert("Respuesta correcta! \n Tu palabra esta así " + maskedWord);
//         userInput();
//     }
// }
// gameChoice();


//Estos son los juegos con los que completaré el arcade !!!

//Juego de memoria

alert("¡Retemos tu memoria!\nTe mostraré algunas cartas y tu debes memorizar su posición")
//1. Creación de las cartas que se mostrarán al usuario
const cards = ["Trebol ", "Corazón ", "Casa ", "Pica ", "Rey ", "Reina ", "Bufón ", "Leon "]
//2. Deben revolverse en un orden aleatorio
alert("Revolviendo tus cartas 🫱🃏✋")
function unsortedCards() {
    return Math.random() - 0.5;
}
const positionCards = cards.sort(unsortedCards)
console.log("🚀 ~ positionCards:", positionCards)

//3. Debo mostrarle por un tiempo determinado las tarjetas al usuario
alert(`¿Estás listo para comenzar?\n Tienes 5 segundos para recordar su posición⏳`)

//No es de mucha utilidad porque la funcion setTimeout no puede seguir su ejecución hasta que el alert sea aceptado
    setTimeout(function(){
        alert(`Estas son tus cartas👀\n ${positionCards}`)

        setTimeout(function(){
            alert("¡TIEMPO!⏱️")
        }, 5000);
        
    }, 1000);
    
//4. El usuario debe introducir la posición de cada carta para validar si es correcta
    const userAnswerMemory = prompt(`¿Puedes decirme la posición de cada carta?\n recuerda que estás son tus cartas ${cards}`)
            //Necesito conocer la posición de cada palabra
            for(let i = 0; i < positionCards.length; i++){
                const actualPosition = positionCards[i]

            }
            //Luego necesito preguntar al jugador por la posición de cierta carta
                //Puedo mostrar una lista con cada carta enumerada y que coloque los numeros ordenados según la posicion que crea que estaba la carta
                //Si las posiciones son correctas gana

    
   




//Juego de casa embrujada
//Juego de adivina la palabra
//Juego piedra, papel o tijera
