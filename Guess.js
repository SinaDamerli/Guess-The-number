const buttons = document.querySelector(".btn");
const note = document.querySelector(".message");
const inputs = document.querySelector(".input");
const fun = document.querySelector(".fun");
fun.min = 1;
fun.max = 20;
let check = false;
let score = 0;
buttons.addEventListener("click", function () {
    if (fun.value == "" || fun.value == null) {
        alert("Please enter a number in the box");
    }
    else {
        fun.style.display = "none";
        if (check == false) {
            check = true;

            inputs.innerHTML = "";
            note.innerHTML = "Start Guessing";
            score = 0;
            maker(fun.value);
            buttons.innerHTML = "Check Combo";


        } else {
            const combo = document.querySelectorAll(".box");
            score++;
            note.innerHTML = score + " Guesses.";
            let win = "";
            for (let x = 0; x < combo.length; x++) {
                if (combo[x].value == combo[x].correct) {
                    combo[x].style.backgroundColor = "Green";
                    combo[x].style.color = "White";
                    combo[x].style.borderColor = "White";
                    win++;


                }
                else if (combo[x].value < combo[x].correct) {
                    combo[x].style.backgroundColor = "Red";
                    combo[x].style.borderColor = "White";

                } else {
                    combo[x].style.backgroundColor = "Blue";
                    combo[x].style.borderColor = "White";

                }
            }

            if (win == combo.length) {
                note.innerHTML = "You Solved it in " + score + " Guesses";
                buttons.innerHTML = "Restart The Game";
                check = false;

            }
            function restart() {
            }

        }
    }
})
function maker(num) {
    for (let i = 0; i < num; i++) {
        let el = document.createElement("input");
        el.type = "number";
        el.max = 9;
        el.min = 0;
        el.size = 1;
        el.correct = Math.floor(Math.random() * 10);
        el.value = 0;
        el.order = i;
        el.classList.add("box");


        inputs.appendChild(el);
    }
}