const headers = document.querySelectorAll('.header')

headers.forEach(header => header.addEventListener('click', function(){
    
//    console.log(header.nextElementSibling) 
   let panel = header.nextElementSibling
   let flag = this.childNodes[1].nextElementSibling
   // console.log(this.childNodes[1].nextElementSibling)
   if(panel.style.display == 'block'){
    panel.style.display = 'none'
    flag.innerHTML = '+'
    this.classList.remove('active')
   }else{
    panel.style.display = 'block'
    flag.innerHTML = '-'
    this.classList.add('active')
   }
}))