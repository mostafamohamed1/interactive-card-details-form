import "./style.css";
import bgCardBack from "./images/bg-card-back.png";
import bgCardFront from "./images/bg-card-front.png";
import logoCard from "./images/card-logo.svg";

const app = (document.getElementById("app").innerHTML = `
  <div class="card__preview">
    <div class="card__front">
      <img class="card__front-bg" src=".${bgCardFront}" alt="card front" />
      <img class="card__logo" src=".${logoCard}" alt="card logo" />
      <span class="card__number">0000 0000 0000 0000</span>
      <span class="card__name">Jane Appleseed</span>
      <span class="card__date">00/00</span>
    </div>
    <div class="card__back">
      <img class="card__back-bg" src=".${bgCardBack}" alt="card back" />
      <span class="card__pin">000</span>
    </div>
  </div>
  <form class="form" id="form" action="#">
    <div class="form__control">
      <label for="card-name">Cardholder Name</label>
      <input
        class="card__input"
        type="text"
        id="card-name"
        placeholder="e.g. Jane Appleseed"
      />
      <span class="card-warn">Wrong format, Only character</span>
    </div>
    <div class="form__control">
      <label for="card-number">Card Number</label>
      <input
        class="card__input"
        type="text"
        id="card-number"
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <span class="card-warn">Wrong format, Only numbers</span>
    </div>
    <div class="form__control">
      <div>
        <div>
          <label for="card-expire">Exp. Date (MM/YY)</label>
          <div id="card-expire">
            <input
              class="card__input"
              type="text"
              id="card-expire-MM"
              placeholder="MM"
            />
            <input
              class="card__input"
              type="text"
              id="card-expire-YY"
              placeholder="YY"
            />
          </div>
          <span class="card-warn">Can't be blank</span>
        </div>
        <div>
          <label for="card-cvc">CVC</label>
          <input class="card__input" type="text" id="card-cvc" placeholder="e.g. 123" />
          <span class="card-warn">Can't be blank</span>
        </div>
      </div>
    </div>
    <div class="form__control">
      <input class="btn" type="submit" value="Confirm" />
    </div>
  </form>

`);

const form = document.getElementById("form");
const inputs = document.querySelectorAll("input");
const inputNumber = document.getElementById("card-number");

let counter = 0;
inputNumber.addEventListener("keyup", (e) => {
  if (e.key >= 0 && e.key <= 9) {
    counter++;
    if (counter == 4) {
      inputNumber.value += " ";
      counter = 0;
    }
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputs);

  if (inputs[0] !== "" && inputs[0].value.match(/[a-zA-Z]+/)) {
    inputs[0].classList.add("valid");
  } else {
    inputs[0].classList.add("invalid");
    inputs[0].nextElementSibling.style.visibility = "visible";
  }

  if (inputs[1] !== "" && inputs[1].value.match(/[1-9]+/)) {
    inputs[1].classList.add("valid");
  } else {
    inputs[1].classList.add("invalid");
    inputs[1].nextElementSibling.style.visibility = "visible";
  }

  if (inputs[2] !== "" && inputs[2].value.match(/[1-9]+/)) {
    inputs[2].classList.add("valid");
  } else {
    inputs[2].classList.add("invalid");
    inputs[2].parentElement.nextElementSibling.style.visibility = "visible";
  }

  if (inputs[3] !== "" && inputs[3].value.match(/[1-9]+/)) {
    inputs[3].classList.add("valid");
  } else {
    inputs[3].classList.add("invalid");
  }
  if (inputs[4] !== "" && inputs[4].value.match(/[1-9]+/)) {
    inputs[4].classList.add("valid");
  } else {
    inputs[4].classList.add("invalid");
    inputs[4].nextElementSibling.style.visibility = "visible";
  }
});
