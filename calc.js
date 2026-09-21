document.querySelectorAll('.js-button').forEach((button)=>{
button.addEventListener('click',(e)=>{
  let btn=button.dataset.number
  
  
 
  document.querySelector('.js-display').value=btn
})
})