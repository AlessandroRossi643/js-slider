$('.next').click(function(){
  var scheda_corrente=$('.visibile');
  $('.row .img_item').removeClass('visibile');
  var prossima_scheda=scheda_corrente.next('div');

  if (prossima_scheda.length!=0) {
    scheda_corrente.removeClass('visibile');
    prossima_scheda.addClass('visibile');
    console.log(prossima_scheda);
  }
  else {
    $('.row .img_item').first().addClass('visibile');
  }
});

$('.prev').click(function(){
  var scheda_corrente=$('.visibile');
  $('.row .img_item').removeClass('visibile');
  var prossima_scheda=scheda_corrente.prev('div');

  if (prossima_scheda.length!=0) {
    scheda_corrente.removeClass('visibile');
    prossima_scheda.addClass('visibile');
    console.log(prossima_scheda);
  }
  else {
    $('.row .img_item').last().addClass('visibile');
  }
});
