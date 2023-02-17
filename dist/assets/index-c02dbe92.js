(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function d(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=d(a);fetch(a.href,s)}})();const o="/assets/bg-card-back-503939c0.png",p="/assets/bg-card-front-5aca8db4.png",u="/assets/card-logo-c6566e76.svg";document.getElementById("app").innerHTML=`
  <div class="card__preview">
    <div class="card__front">
      <img class="card__front-bg" src=".${p}" alt="card front" />
      <img class="card__logo" src=".${u}" alt="card logo" />
      <span class="card__number">0000 0000 0000 0000</span>
      <span class="card__name">Jane Appleseed</span>
      <span class="card__date">00/00</span>
    </div>
    <div class="card__back">
      <img class="card__back-bg" src=".${o}" alt="card back" />
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

`;const m=document.getElementById("form"),e=document.querySelectorAll("input"),c=document.getElementById("card-number");let r=0;c.addEventListener("keyup",t=>{t.key>=0&&t.key<=9&&(r++,r==4&&(c.value+=" ",r=0))});m.addEventListener("submit",t=>{t.preventDefault(),console.log(e),e[0]!==""&&e[0].value.match(/[a-zA-Z]+/)?e[0].classList.add("valid"):(e[0].classList.add("invalid"),e[0].nextElementSibling.style.visibility="visible"),e[1]!==""&&e[1].value.match(/[1-9]+/)?e[1].classList.add("valid"):(e[1].classList.add("invalid"),e[1].nextElementSibling.style.visibility="visible"),e[2]!==""&&e[2].value.match(/[1-9]+/)?e[2].classList.add("valid"):(e[2].classList.add("invalid"),e[2].parentElement.nextElementSibling.style.visibility="visible"),e[3]!==""&&e[3].value.match(/[1-9]+/)?e[3].classList.add("valid"):e[3].classList.add("invalid"),e[4]!==""&&e[4].value.match(/[1-9]+/)?e[4].classList.add("valid"):(e[4].classList.add("invalid"),e[4].nextElementSibling.style.visibility="visible")});
