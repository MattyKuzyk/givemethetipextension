$(document).ready(function(){
  addTips();

});

function getApiKey() {
  return "";
}

function addTips() {
  var commentActions = $(".fsm.fwn.fcg");
  var tip = ("<a id='dogeTip'> Tip this nig some doge</a> ");

  commentActions.each(function() {
    $(this).prepend(tip);
  });
    $('#dogeTip').click( function() { 
    });

}

$(document).on('click', "a#dogeTip", function() {
    var e = jQuery.Event("keydown");
    e.which = 13; // # Some key code value
    var recipient = $(this).parent().siblings(".UFICommentContent").children(".UFICommentActorName").eq(0).attr("href").match("([^/]*$)")[0]
    console.log($(this));
    var action = 'http://givemethetip.com/' + getApiKey() + '/' + recipient;
    // $(this).replaceWith("<form id='dogeForm' action=" + action +  " method='post'><input type=text name='amount'/></form>");
    $(this).replaceWith("<form id='dogeForm'><input type=text name='amount'/></form>");
    //THE AUTO COMMENT IS NOT WORKING YET
    $('#dogeForm').submit(function(ev) {
      ev.preventDefault();
      var commentBox = $(this).parent().parent().parent().parent().parent().parent().parent().parent().find('textarea');
      commentBox.focus().html("I just tipped you " + $(this).val().toString() + " Dogecoin through http://www.givemethetip.com").
      trigger(e);
    });
});