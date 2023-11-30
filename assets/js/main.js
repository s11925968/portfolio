const navbar=document.querySelector('.navbar')
const headerSpanContent=document.querySelector('.header .header-content span')
const loader=document.querySelector('.loader-screen')
const arrotablink=document.querySelector('.arro-tab-link')
window.addEventListener('scroll',function(e){
  if(window.scrollY > headerSpanContent.offsetTop){
    navbar.style.backgroundColor="#fff";
    arrotablink.classList.remove('opacity-0','invisible')

  }
  else{
    navbar.style.backgroundColor="transparent";
    arrotablink.classList.add('opacity-0','invisible')

  }
})
window.addEventListener('load',function(){
  setTimeout(function(){
    loader.classList.add('opacity-0','invisible');
    document.body.style.overflow = 'auto';
  },2000)
})
arrotablink.addEventListener('click',function(){
  window.scroll({
    top:0
  })
})