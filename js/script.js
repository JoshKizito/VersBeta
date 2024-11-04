

document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})


const blockSc = document.querySelectorAll(".view__scrolled");
document.addEventListener("scroll", function(){
  blockSc.forEach(view__scrolled => {
    if(isView(view__scrolled)){
      view__scrolled.classList.add("view__scrolled--visible");
    }
  })
})
function isView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight -150)
  )
}


// BERGUER MENU OPEN AND CLOSED

const burguerMenuButton = document.querySelector('.header__btns')
const burguerMenuButtonIcon = document.querySelector('.header__btns i')
const burguerMenu = document.querySelector('.burger__menu')

burguerMenuButton.onclick = function(){
  burguerMenu.classList.toggle('open')
  const isOpen = burguerMenu.classList.contains('open')
  burguerMenuButtonIcon.classList = isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars'
}