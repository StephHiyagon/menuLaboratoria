var menu=document.getElementsByClassName('toogle');
console.log(menu);

console.log(menu[0].className);
var ul=document.getElementsByClassName('menu-nav');
console.log(ul[0]);
var nav=document.getElementsByClassName('main-nav');
console.log(nav[0]);
var logo=document.getElementById('logo');
var logoBlanco=document.getElementById('logo-blanco');
var fotos=document.getElementById('fotos');
var html=document.getElementsByTagName('html');
var panel=document.getElementsByTagName('nav');
var up=document.getElementsByClassName('up');

console.log(panel[0]);
var finalScroll=0;

function cambiar(event){
  if(menu[0].className=="toogle open"){
    menu[0].classList.remove("open");
    ocultar();
  }
  else{
    menu[0].classList.add("open");
    mostrar();
    //tiene que agregar height al 100% al nav, tb centrar el ul...
  }
}

function mostrar(){
  ul[0].style.display="block";
  nav[0].style.height="100%";
  logo.style.visibility="visible";
  logoBlanco.style.visibility="hidden";
  fotos.style.display="none";
  html[0].style.overflow="hidden";
}

function ocultar(){
  ul[0].style.display="none";
  nav[0].style.height="80px";
  logo.style.visibility="hidden";
  logoBlanco.style.visibility="visible";
  fotos.style.display="block";
  html[0].style.overflow="auto";
}

function moveScroll(event){
  var scroll=window.pageYOffset || document.body.scrollTop;
  if(scroll>finalScroll){
    panel[0].style.display="none";
    panel[0].className="up";
  }
  else {
    nav[0].style.visibility="hidden";
    up[0].style.display="block";
    logoBlanco.style.visibility="hidden";
    logo.style.visibility="visible";
    //if(menu[0].addEventListener('click', cambiar)){
    }
    if(scroll<=3){
    nav[0].style.visibility="visible";
    logoBlanco.style.visibility="visible";
    logo.style.visibility="hidden";
    }
    finalScroll=scroll;
  }
  

window.addEventListener('scroll',moveScroll);
menu[0].addEventListener('click', cambiar);
