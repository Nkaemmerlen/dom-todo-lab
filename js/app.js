const theInput = document.getElementById("input")
const theButton = document.getElementById("submit-button")
const theUl = document.getElementById("todo-list")
const resetBtn = document.getElementById("reset-button")

// console.log(theButton)
// console.log(theInput)
// console.log(theUl)
// console.log(resetBtn)
theButton.addEventListener('click', function(evnt){
  const newLi = document.createElement('li')
  const newInp = document.querySelector('input')
  newLi.textContent = newInp.value
  if(newInp.value !== ''){
    document.querySelector('ul').appendChild(newLi)
    newInp.value = ''
  }
})

resetBtn.addEventListener('click', function(clear) {
  const theLi = document.querySelectorAll("li")
  const newInp = document.querySelector('input')
  theLi.forEach(a => a.remove())
  newInp.value = ''
})

theUl.addEventListener('click', function(clickClear){
  console.log(clickClear.target)
  const clear1 = clickClear.target
  clear1.remove()
})