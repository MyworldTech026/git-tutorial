document.querySelectorAll('.js-button').forEach((button)=>{
button.addEventListener('click',(e)=>{
  let btn=button.dataset.number
  
  console.log(`version 5`)
 
  document.querySelector('.js-display').value=btn
})
})