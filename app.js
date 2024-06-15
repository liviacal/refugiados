const menuBotao =()=>{
  const cel=document.querySelector('.cel')
  const nav=document.querySelector('.links')
  const navLinks=document.querySelectorAll('.links li')
  //toggle nav
  cel.addEventListener('click',()=>{
nav.classList.toggle('nav-active');
//animate links
  navLinks.forEach((link,index)=>{
  if(link.style.animation){
    link.style.animation=''
  }else{
    link.style.animation=`navLinkFade 0.5s ease forwards ${index/7+0.3}s`
   }
})
//animation cel AKA X=
cel.classList.toggle('toggle')

})

}

menuBotao()



