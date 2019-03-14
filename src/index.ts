import './styles.css';
import { add, getRandomInt } from './utils';

console.log('Ready to Party');

let tries = 0;

const squares = document.querySelectorAll(".square") as any as HTMLDivElement[];
const triesEl = document.getElementById("tries");
const resetBtn = document.querySelector("button");
let secret: number;
reset();

function reset() {
    secret = getRandomInt(0, 5);
    tries = 0;
    triesEl.innerText = "";
    console.log(`the secret is ${secret}`);

    squares.forEach((square, index) => {
        square.removeEventListener("click", handleClick);
        square.addEventListener('click', handleClick);
        square.classList.remove("winner", "loser");
        if (index === secret) {
            square.dataset.secret = "true";
        } else {
            delete square.dataset.secret;
        }
    });

}

function handleClick() {
    const el = this as HTMLDivElement;
    el.removeEventListener('click', handleClick);
    tries++;
    if (el.dataset.secret === "true") {
        el.classList.add('winner');
        triesEl.innerHTML = `You won in ${tries} tries!`
    } else {
        el.classList.add('loser');
    }
}

resetBtn.addEventListener("click", (e) => {
    reset();
});
