const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
})

// upDown.addEventListener('click', () => {
//   upDown.classList.toggle('active');
// })

upDown.on("click",function () {
  if (upDown.hasClass("active")) {
    upDown.removeClass("active")
  }else {
    upDown.addClass("active")
  }
})

// upDown.each(function functionName() {
//
// })
