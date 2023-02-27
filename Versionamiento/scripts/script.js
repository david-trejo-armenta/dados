let player1 = "Player 1";
let player2 = "Player 2";
function bet(){

    
    
}

function tossdice() {
let guess = document.getElementsByTagName("input")[0].value;
let guessnum = parseInt(guess);
    console.log(guess)
    console.log("Function execution");

    
    setTimeout(function () {
        var numeroaleatorio1 = Math.floor(Math.random() * 6) + 1;
        

        var img = document.querySelector(".img");
        img.setAttribute("src", "die" + numeroaleatorio1 + ".png");
        img.classList.add("rotate");


        if (numeroaleatorio1 === guessnum) {
            document.querySelector("h1").innerHTML = "Match!";	
        } 
        else {
            document.querySelector("h1").innerHTML = " Try Again";
        }

        setTimeout(function () {
            img.classList.remove("rotate");
        }, 1000);
    });
}

function tossdice2() {
    setTimeout(function () {
        let numeroaleatorio1 = Math.floor(Math.random() * 6) + 1;
        let numeroaleatorio2 = Math.floor(Math.random() * 6) + 1;

        let img1 = document.querySelector(".img1");
        img1.setAttribute("src", "die" + numeroaleatorio1 + ".png");
        img1.classList.add("rotate");

        img2 = document.querySelector(".img2");
        img2.setAttribute("src", "die" + numeroaleatorio2 + ".png");
        img2.classList.add("rotate");

        if (numeroaleatorio1 === numeroaleatorio2) {
            document.querySelector("h1").innerHTML = "Tie!";	
        } else if (numeroaleatorio1 < numeroaleatorio2) {
            document.querySelector("h1").innerHTML = player2 + " Won!";
        } else {
            document.querySelector("h1").innerHTML = player1 + " Won!";
        }

        setTimeout(function () {
            img1.classList.remove("rotate");
            img2.classList.remove("rotate");
        }, 1000);
    });
}