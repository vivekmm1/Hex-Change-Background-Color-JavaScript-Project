var btn=document.getElementById('btn')
var body=document.querySelector('body')
btn.addEventListener('click',change)
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

function change(e){
  let hex='#'
  for(let i=0; i<6 ; i++){
    const index = Math.floor(Math.random()*hexValues.length)
    hex+=hexValues[index]
  }

  body.style.backgroundColor =hex
}