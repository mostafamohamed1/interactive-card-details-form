import { html, render } from "lit-html";
import InteractiveCard from "./controller";

import "./style.css";
import bgCardBack from "./images/bg-card-back.png";
import bgCardFront from "./images/bg-card-front.png";
import logoCard from "./images/card-logo.svg";
import iconComplete from "./images/icon-complete.svg";

const app = document.getElementById("app");

const done = () => {
  return html`
    <div class="card__message">
      <div class="card__icon">
        <img class="card__icon--complete" src=".${iconComplete}" alt="Complete" />
      </div>
      <h1>Thank You!</h1>
      <p class="message">We've added your card details</p>
      <button class="btn" type="button">Continue</button>
    </div>
  `;
};

const register = () => {
  return html`
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
          maxlength="16"
        />
        <span class="card-warn">Wrong format, Only numbers</span>
      </div>
      <div class="form__control">
        <div>
          <div>
            <label for="card-expire">Exp. Date (MM/YY)</label>
            <div class="card-expire">
              <input
                class="card__input"
                type="text"
                id="card-expire-MM"
                placeholder="MM"
                maxlength="2"
              />
              <input
                class="card__input"
                type="text"
                id="card-expire-YY"
                placeholder="YY"
                maxlength="2"
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
        <input id="submit" class="btn" type="submit" value="Confirm" />
      </div>
    </form>
  `;
};

const tempHTML = () => {
  return html`
    <div class="card__preview">
      <div class="card__front">
        <img class="card__front-bg" src=".${bgCardFront}" alt="card front" />
        <img class="card__logo" src=".${logoCard}" alt="card logo" />
        <span class="card__number"
          >0000&nbsp;&nbsp;0000&nbsp;&nbsp;0000&nbsp;&nbsp;0000</span
        >
        <span class="card__name">Jane Appleseed</span>
        <span class="card__date">00/00</span>
      </div>
      <div class="card__back">
        <img class="card__back-bg" src=".${bgCardBack}" alt="card back" />
        <span class="card__pin">000</span>
      </div>
    </div>
    <div id="$1">${register()}</div>
  `;
};

const loader = () => tempHTML();

render(loader(), app);

new InteractiveCard(done);
