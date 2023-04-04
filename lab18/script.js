const buttonUpElement = document.querySelector("#up");
const buttonDownElement = document.querySelector("#down");
const valueElement = document.querySelector("#value");

let value = 0;

// buttonElement.addEventListener("click", function () {
//   alert("Bạn đã click tôi!");
// });

buttonUpElement.addEventListener("click", function () {
  value++;
  updateValue();
});
buttonDownElement.addEventListener("click", function () {
  value--;
  updateValue();
});

// Giá trị thì không thể giảm về âm
// Nếu giá trị lớn hơn 5 thì text sẽ có màu xanh
// Giá trị thìkhông thể lớn hơn 10
function updateValue() {
  valueElement.textContent = value;
  if (value == 0) {
    buttonDownElement.disabled = true;
  } else if (value == 10) {
    buttonUpElement.disabled = true;
  } else {
    buttonUpElement.disabled = false;
    buttonDownElement.disabled = false;
  }
  if (value >= 5) {
    valueElement.classList.add("green");
  } else {
    valueElement.classList.remove("green");
  }
}
// const inputElement = document.querySelector("#username");
// inputElement.addEventListener("focus", function (e) {
//   console.log("Người dùng focus vào thẻ input");
// });
// inputElement.addEventListener("keypress", function (e) {
//   console.log("Người dùng bấm một phím");
// });
// inputElement.addEventListener("input", function (e) {
//   console.log("Người dùng nhập một ký tự khác!");
// });

const inputXElement = document.querySelector("#x");
const inputYElement = document.querySelector("#y");
const outputElement = document.querySelector("#result");
const buttonAddElement = document.querySelector("#add");

let x, y;
inputXElement.addEventListener("input", function (e) {
  x = Number(e.target.value);
});
inputYElement.addEventListener("input", function (e) {
  y = Number(e.target.value);
});
buttonAddElement.addEventListener("click", function () {
  outputElement.textContent = x + y;
});

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
});
