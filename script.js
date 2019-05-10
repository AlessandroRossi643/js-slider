$('.next').click(function(){
  var scheda_corrente=$('.visibile');
  var pallino_corrente=$('.corrente');

  $('.row .img_item').removeClass('visibile');
  $('.container_pallini i').removeClass('corrente');

  var prossima_scheda=scheda_corrente.next('.img_item');
  var prossimo_pallino=pallino_corrente.next('.container_pallini i')

  if (prossima_scheda.length!=0) {
    scheda_corrente.removeClass('visibile');
    pallino_corrente.removeClass('corrente');

    prossima_scheda.addClass('visibile');
    prossimo_pallino.addClass('corrente');
  }
  else {
    $('.row .img_item').first().addClass('visibile');
    $('.container_pallini i').first().addClass('corrente');
  }
});

$('.prev').click(function(){
  var scheda_corrente=$('.visibile');
  var pallino_corrente=$('.corrente');

  $('.row .img_item').removeClass('visibile');
  $('.container_pallini i').removeClass('corrente');

  var prossima_scheda=scheda_corrente.prev('div');
  var prossimo_pallino=pallino_corrente.prev('.container_pallini i')

  if (prossima_scheda.length!=0) {
    scheda_corrente.removeClass('visibile');
    pallino_corrente.removeClass('corrente');

    prossima_scheda.addClass('visibile');
    prossimo_pallino.addClass('corrente');
  }
  else {
    $('.row .img_item').last().addClass('visibile');
    $('.container_pallini i').last().addClass('corrente');
  }
});

$('.container_pallini i').click(function(){
  var pallino_corrente=$(this);
  console.log(pallino_corrente);

});
