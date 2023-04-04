let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

const boxesElement = document.querySelector(".boxes");
const totalBoxElement = document.querySelector(".points");
// Render số box = số lượng màu ra ngoài màn hình
// bằng javascript(5 box)
function updateTotalBox() {
  totalBoxElement.textContent = boxesElement.children.length;
}

function createBox(color) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.backgroundColor = color;

  box.addEventListener("click", function (e) {
    box.remove();
    updateTotalBox();
  });
  return box;
}

function renderBoxes(colors) {
  colors.forEach(function (color) {
    const box = createBox(color);
    boxesElement.append(box);
  });
  updateTotalBox();
}
renderBoxes(colors);

const moreBoxElement = document.querySelector("#btn");
moreBoxElement.addEventListener("click", function () {
  renderBoxes(colors);
});
