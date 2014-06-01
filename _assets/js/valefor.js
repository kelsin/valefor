$(function(){
  $('#panel-nav a').click(function(e){
    e.preventDefault();
    $('.panel').removeClass('active');
    var des = $(this).attr('href');
    $(des).addClass('active').animate({top: '0%', left: '0%'}, function(){
          $('.panel:not("' + des + '")').attr('style', '');
    });
  });
});