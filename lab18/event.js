// Lấy ra các hàng
const rows = document.querySelectorAll("tr");
// Lấy ra cột
rows.forEach(function(row) {
    row.cells[row.rowIndex].classList.add("bg-red");
    row.cells[row.cells.length - row.rowIndex - 1].classList.add("bg-red");
});

const imgEl = document.createElement("img");
console.log(imgEl);
imgEl.alt = "Hero";
imgEl.width = 300;
imgEl.classList.add("girl");
console.log(img);

const aEl = document.createElement("a");
aEl.href = "https://google.com";
aEl.textContent = "Google";

console.log(aEl);

const pEl = document.createElement("p");
pEl.textContent = "Hello World!";
console.log(pEl);

const audioEl = document.createElement("audio");
audioEl.controls = true;
audioEl.src = "";

console.log(audioEl);

const tableEl = document.querySelector("table");
document.body.append(aEl);

/// Ví dụ :
const fruits = ["Apple", "Banana", "Cherry"];

// Tạo một thẻ danh sách và mỗi một quả tương ứng là một thẻ li
// và hiển thị lên trình duyệt
const ulEl =