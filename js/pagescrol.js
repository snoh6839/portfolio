window.addEventListener("wheel", function(e){
  e.preventDefault();},{passive : false});
  var mHtml = $("html");
  var page = 1;
  mHtml.animate({scrollTop : 0},10);

window.onload = function () {
  setTimeout(function () {
    scrollTo(0,0);
  }, 100)
}

  $(window).on("wheel", function(e) {
      if(mHtml.is(":animated")) return;
      if(e.originalEvent.deltaY > 0) {
        if(page == 1){
          $('.path2').addClass('drawPath2')
        }else if (page == 2) {
          $('.path3').addClass('drawPath3')
        }else if (page == 3) {
          return;
        }
          page++;
      } else if(e.originalEvent.deltaY < 0) {
        if(page == 1){
          return;
        }
          page--;
      }

      var posTop = (page-1) * $(window).height();
      mHtml.animate({scrollTop : posTop});

      var cur_pos = $(this).scrollTop();
  })
