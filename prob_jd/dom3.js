console.log("Dom-3");
/* JavaScript DOM Exercises 02 Tutorial: https://youtu.be/Ky1rr9hEoLM */
/* 
  Exercise 01
  -----------
  A new feature has been added to the Pro plan: '24/7 Phone support'.
  Add this using JavaScript to the list features of the Pro plan.
*/
document
  .querySelector("#pro-plan ul")
  .insertAdjacentHTML("beforeend", "<li>24/7 Phone Support</li>");

/* 
  Exercise 02
  -----------
  To make the ordering of the plans more logical, using JavaScript, move the basic plan to be before (to the left) of the pro plan.
*/
// const basic = document.querySelector("#basic-plan");
// const pro = document.querySelector("#pro-plan");
// const parent = basic.parentNode;
// parent.insertBefore(basic, pro);
document.querySelector(".card-deck").style["flex-direction"] = "row-reverse";
/* 
  Exercise 03
  -----------
  To make the Pro plan have a stronger call to action, update the current 'Get started' button to be blue (#007bff) with white text and have the text 'Buy Now' 
*/
const proCTA = document.querySelector("#pro-plan button");
proCTA.style.backgroundColor = "#007bff";
proCTA.style.color = "#fff";
proCTA.innerText = "Buy Now";
/* 
  Exercise 04
  -----------
  There is a special offer on at the moment offering 50% more storage on the Basic plan and 25% more on the Pro plan.
  Update the basic and pro plan cards to reflect the new storage amount being offered. 
*/
const basicPlanStorage = document.querySelector("#basic-plan .storage-amount");
const proPlanStorage = document.querySelector("#pro-plan .storage-amount");
basicPlanStorage.innerText = basicPlanStorage.innerText * 1.5;
proPlanStorage.innerText = proPlanStorage.innerText * 1.25;

/* 
  Exercise 05
  -----------
  You have been asked to add ask a toggle / radio box for annual and monthly payments for the basic and pro plans.
  Add a radio button to toggle between monthly and annual payment options and adjust the prices shown for both plans if the annual option is selected (give two months free if customers pay annually).
*/
document.querySelector(".container").insertAdjacentHTML(
  "afterbegin",
  `<label>Monthly
  <input id="monthlyPricing" type="radio" name="pricing" value="monthly" checked>
  </label>
  <label>
  Annual
  <input id="annualPricing" type="radio" name="pricing" value="annual">
  </label>`
);
const pricing = {
  monthly: {
    basic: "10 / month",
    pro: "30 / month",
  },
  annual: {
    basic: "100/year",
    pro: "300/year",
  },
};

const changePricing = (event) => {
  const selection = event.target.value;
  document.querySelector("#basic-plan .pricing").innerText =
    pricing[selection].basic;
  document.querySelector("#pro-plan .pricing").innerText =
    pricing[selection].pro;
};

Array.from(document.querySelectorAll('input[type="radio"]')).forEach((radio) =>
  radio.addEventListener("change", changePricing)
);
