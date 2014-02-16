function tipBox() {
  alert('DOOOOOGE');
}

$(document).ready(function(){
  // var comments = $("div[class='clearfix'][data-reactid]");
  var commentActions = $(".fsm.fwn.fcg");
  var tip = ("<a id='dogeTip'> Tip this nig some doge</a>");

  commentActions.each(function() {
    $(this).append(tip);
  });
    $('#dogeTip').click( function() { 
    });

});

$(document).on('click', "a#dogeTip", function() {
    form = ("<form action='http://givemethetip.com/'></form>");
    // form.append("<input type=text value/>");
    // $(this).replaceWith(form);
    // console.log($(this));
    $(this).parent().parent().parent().children('');
});