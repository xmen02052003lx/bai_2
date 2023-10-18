function numberOneTriangle() {
  const inputNumber = parseInt(document.getElementById("inputNumber").value)
  const triangleContainer = document.getElementById("triangleContainer")

  if (inputNumber < 1 || inputNumber > 10) {
    triangleContainer.innerHTML =
      "Số không hợp lệ. Hãy nhập một số từ 1 đến 10."
    return
  }

  let triangle = ""
  for (let i = 1; i <= inputNumber; i++) {
    triangle += "1".repeat(i) + "<br>"
  }

  triangleContainer.innerHTML = `<div class="triangle">${triangle}</div>`
}
