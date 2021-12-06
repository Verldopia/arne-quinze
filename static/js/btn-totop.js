$btnContainer = document.querySelector('.container-btn-totop');
$btn = document.getElementById('btn-totop');
window.addEventListener('scroll', scrollDown);
$btn.addEventListener('click', toTop);

function scrollDown() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    $btn.style.opacity = '1';
    $btnContainer.style.opacity = '1';
  } else {
    $btnContainer.style.opacity = '0';
  }
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}