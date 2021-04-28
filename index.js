const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu');

iconMenu.addEventListener('click', function (e) {
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  menuBody.classList.toggle('_active');
});

document
  .querySelectorAll('.menu a')
  .forEach((menuItem) => menuItem.addEventListener('click', hideMenu));

function hideMenu() {
  document.body.classList.remove('_lock');
  iconMenu.classList.remove('_active');
  menuBody.classList.remove('_active');
}

const readMoreBtn = document.querySelector('.readMoreBtn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e)=>{
  text.classList.toggle('show-more');
  if(readMoreBtn.innerText === 'Read More'){
    readMoreBtn.innerText = 'Read Less';
  }else{
    readMoreBtn.innerText = 'Read More';
  }
})
