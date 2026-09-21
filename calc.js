document.querySelectorAll('.js-button').forEach((button)=>{
button.addEventListener('click',(event)=>{
  let btn=button.dataset.number
  
  console.log(`hello`)
 
  document.querySelector('.js-display').value=btn
})
})