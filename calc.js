document.querySelectorAll('.js-button').forEach((button)=>{
button.addEventListener('click',(e)=>{
  let btn=button.dataset.number
  
  console.log(`clone this to another pc and made changes to the code`)
 
  document.querySelector('.js-display').value=btn
})
})