const theInput = document.getElementById("input")
const theButton = document.getElementById("submit-button")
const theUl = document.getElementById("todo-list")
console.log(theButton)
console.log(theInput)
console.log(theUl)
theButton.addEventListener('click', function(evnt){
  const newLi = document.createElement('li')
  const newInp = document.querySelector('input')
  newLi.textContent = newInp.value
  if(newInp.value !== ''){
    document.querySelector('ul').appendChild(newLi)
    newInp.value = ''
  }
})