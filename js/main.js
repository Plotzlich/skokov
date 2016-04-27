$(document).ready(function () {
  $('a.main-item').click(function (e) {
    $(this).toggleClass('active');
      $('.menu-top').toggle();
        });

        $('.close').click(function(){
          $('.menu-top').hide();
        })
    });