$(function(){
//백그라운드 색상 변경
  $(window).scroll(function() {
    var winHeight = $(window).height();
    var scTop = $(this).scrollTop();

    $('.slide').each(function() {
      var thisOff = $(this).offset();
      if (thisOff.top <= scTop && scTop < thisOff.top + winHeight) {
        var bodyBg = $(this).data('bg');
        $(this).css('background-color',bodyBg);
      }
    });




//네비 바 고정
    var navBar = $('nav');

    if (winHeight - 70 < scTop) {
      navBar.addClass('fixed');
    }else {
      navBar.removeClass('fixed');
    }
  });

  var target = document.querySelectorAll('.btn_open');
  var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
  var targetID;

  // 팝업 열기
  for(var i = 0; i < target.length; i++){
    target[i].addEventListener('click', function(){
      targetID = this.getAttribute('href');
      document.querySelector(targetID).style.display = 'block';
    });
  }

  // 팝업 닫기
  for(var j = 0; j < target.length; j++){
    btnPopClose[j].addEventListener('click', function(){
      this.parentNode.parentNode.style.display = 'none';
    });
  }
});

$(document).ready(function() {
  var placeholderTarget = $('.inputbox input');

  //포커스시
  placeholderTarget.on('focus', function(){
    $(this).siblings('label').fadeOut('fast');
  });

  //포커스아웃시
  placeholderTarget.on('focusout', function(){
    if($(this).val() == ''){
      $(this).siblings('label').fadeIn('fast');
    }
  });

  //gif hover
  $(".pimg").mouseover(function() {
  $(this).attr("src", $(this).data("animated"))
}),
$(".pimg").mouseout(function() {
  $(this).attr("src", $(this).data("static"))
});

});
