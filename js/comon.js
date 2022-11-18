$(function(){
  $(window).scroll(function() {
    var winHeight = $(window).height();
    var scTop = $(this).scrollTop();
    var goTop = $('.anchor');

    if (600 < scTop) {
      goTop.css('opacity','1');
      // $('nav').css('opacity','.5');
    }else {
      goTop.css('opacity','0');
      // $('nav').css('opacity','1');
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


$('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.item-container').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');


  })

});
