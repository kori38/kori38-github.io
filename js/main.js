function calcAmount() {
  let price = 1000;
  let amountInput = document.querySelector("input[name='amount-input']");
  let amountNumber = parseInt(amountInput.value);
  amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

  showSumPrice(price, amountNumber);
}

function showSumPrice(price = 1000, amountNumber = 1) {
  let showAmount = document.querySelector("span.show-amount");
  if (amountNumber > 10) {
    alert("Maximum 10 terméket rendelhet.");
  } else if (amountNumber < 1) {
    alert("Minimum 1 terméket rendelhet.");
  } else {
    let amount = amountNumber * price;
    showAmount.innerHTML = amount;
  }
}

// let helpText = document.createElement("small");
// helpText.className = "form-text form-muted";
// helpText.innerHTML = "Adja meg a feltétet!";

// let parent = document.querySelector("div.form-group:first-child");
// parent.appendChild(helpText);

// parent.removeChild(helpText);

// let sendButton = document.querySelector("button.btn.btn-primary");

// sendButton.onclick = function () {
//   alert("Hello JS...");
// };

// sendButton.addEventListener("click", function () {
//   alert("Hello Js...");
// });

// window.addEventListener("resize", function () {
//   console.log(this.innerHeight, this.innerWidth);
// });

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  let inputs = this.querySelectorAll("input");
  let values = {};
  for (let i = 0; i < inputs.length; i++) {
    values[inputs[i].name] = inputs[i].value;
  }
  console.log(values);
});
