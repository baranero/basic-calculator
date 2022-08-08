let keyButton = document.getElementsByClassName("key")
let displayPanel = document.getElementById("display")

for (let i = 0; i < keyButton.length; i++) {
  keyButton[i].addEventListener("click", function() {
    if (keyButton[i].value === "=") {

    } else {
      displayPanel.textContent += keyButton[i].value
    }
  })
}

function ev() {
  let y = displayPanel.textContent
  let x = eval(y)
  displayPanel.textContent = x
}