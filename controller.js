import { render } from "lit-html";

export default class InteractiveCard {
  #counter = 0;

  // Vaildation
  #validCardName = false;
  #validCardNumber = false;
  #validCardMonth = false;
  #validCardYear = false;
  #validCardCvc = false;

  constructor(done) {
    // Templates
    this.doneTemp = done;

    // Elements
    this.form = document.getElementById("form");
    this.cardName = document.getElementById("card-name");
    this.cardNumber = document.getElementById("card-number");
    this.cardMonth = document.getElementById("card-expire-MM");
    this.cardYear = document.getElementById("card-expire-YY");
    this.cardCvc = document.getElementById("card-cvc");

    this.cardNamePlaceholder = document.querySelector(".card__name");
    this.cardNumberPlaceHolder = document.querySelector(".card__number");
    this.cardDatePlaceHolder = document.querySelector(".card__date");
    this.cardCvcPlaceHolder = document.querySelector(".card__pin");

    // Handling Events
    this.handelEvent(this.form, "submit", this.handelSubmit.bind(this));
    this.handelEvent(this.cardName, "blur", this.handelCardName.bind(this));
    this.handelEvent(this.cardNumber, "blur", this.handelCardNumber.bind(this));
    this.handelEvent(this.cardMonth, "blur", this.handelCardMonth.bind(this));
    this.handelEvent(this.cardYear, "blur", this.handelCardYear.bind(this));
    this.handelEvent(this.cardCvc, "blur", this.handelCardCvc.bind(this));
  }

  // Helper Function
  handelEvent(element, ev, cb) {
    element.addEventListener(ev, cb);
  }

  validEntry(element) {
    if (element.classList.contains("invalid")) {
      element.classList.remove("invalid");
    }

    if (element.classList.contains("valid")) {
      element.classList.remove("valid");
    }
  }

  errorMessage(element, status) {
    if (status) element.style.visibility = "visible";
    else element.style.visibility = "hidden";
  }

  // Trigger Event Statement
  handelCardName() {
    let value = this.cardName.value.trim();

    if (value.length > 0 && !/\d/.test(value)) {
      this.validEntry(this.cardName);
      this.cardName.classList.add("valid");
      this.errorMessage(this.cardName.nextElementSibling, false);
      this.cardNamePlaceholder.textContent = value;
      return (this.#validCardName = true);
    } else {
      this.validEntry(this.cardName);
      this.cardName.classList.add("invalid");
      this.errorMessage(this.cardName.nextElementSibling, true);
      this.#validCardName = true;
    }

    if (value == "") {
      this.validEntry(this.cardName);
      this.errorMessage(this.cardName.nextElementSibling, false);
      return (this.#validCardName = true);
    }
  }

  handelCardNumber() {
    let value = this.cardNumber.value.trim();

    if (value.length > 0 && !/\D/.test(value)) {
      this.validEntry(this.cardNumber);
      this.cardNumber.classList.add("valid");
      this.errorMessage(this.cardNumber.nextElementSibling, false);
      this.cardNumberPlaceHolder.textContent = value.match(/.{1,4}/g).join(" ");
      return (this.#validCardNumber = true);
    } else {
      this.validEntry(this.cardNumber);
      this.cardNumber.classList.add("invalid");
      this.errorMessage(this.cardNumber.nextElementSibling, true);
      this.#validCardNumber = true;
    }

    if (value == "") {
      this.validEntry(this.cardNumber);
      this.errorMessage(this.cardNumber.nextElementSibling, false);
      return (this.#validCardNumber = true);
    }
  }

  handelCardMonth() {
    let value = this.cardMonth.value.trim();

    if (value.length > 0 && !/\D/.test(value)) {
      this.validEntry(this.cardMonth);
      this.cardMonth.classList.add("valid");
      this.errorMessage(this.cardMonth.parentElement.nextElementSibling, false);
      this.cardDatePlaceHolder.textContent = value;
      return (this.#validCardMonth = true);
    } else {
      this.validEntry(this.cardMonth);
      this.cardMonth.classList.add("invalid");
      this.errorMessage(this.cardMonth.parentElement.nextElementSibling, true);
      this.#validCardMonth = false;
    }

    if (value == "") {
      this.validEntry(this.cardMonth);
      this.errorMessage(this.cardMonth.parentElement.nextElementSibling, false);
      return (this.#validCardMonth = true);
    }
  }

  handelCardYear() {
    let value = this.cardYear.value.trim();

    if (value.length > 0 && !/\D/.test(value)) {
      this.validEntry(this.cardYear);
      this.cardYear.classList.add("valid");
      this.errorMessage(this.cardYear.parentElement.nextElementSibling, false);
      this.cardDatePlaceHolder.textContent += "/" + value;
      return (this.#validCardYear = true);
    } else {
      this.validEntry(this.cardYear);
      this.cardYear.classList.add("invalid");
      this.errorMessage(this.cardYear.parentElement.nextElementSibling, true);
      this.#validCardYear = false;
    }

    if (value == "") {
      this.validEntry(this.cardYear);
      this.errorMessage(this.cardYear.parentElement.nextElementSibling, false);
      return (this.#validCardYear = false);
    }
  }

  handelCardCvc() {
    let value = this.cardCvc.value.trim();

    if (value.length > 0 && !/\D/.test(value)) {
      this.validEntry(this.cardCvc);
      this.cardCvc.classList.add("valid");
      this.errorMessage(this.cardCvc.nextElementSibling, false);
      this.cardCvcPlaceHolder.textContent = value;
      return (this.#validCardCvc = true);
    } else {
      this.validEntry(this.cardCvc);
      this.cardCvc.classList.add("invalid");
      this.errorMessage(this.cardCvc.nextElementSibling, true);
      this.#validCardCvc = false;
    }

    if (value == "") {
      this.validEntry(this.cardCvc);
      this.errorMessage(this.cardCvc.nextElementSibling, false);
      return (this.#validCardCvc = true);
    }
  }

  handelSubmit(e) {
    e.preventDefault();

    if (
      this.#validCardCvc &&
      this.#validCardMonth &&
      this.#validCardName &&
      this.#validCardNumber &&
      this.#validCardYear
    ) {
      this.form.remove();
      render(this.doneTemp(), document.getElementById("$1"));
    }
  }
}
