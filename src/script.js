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
  var sender = $("a.fbxWelcomeBoxName").attr('href').match("([^/]*)/$")[0];
  console.log(sender);
  var recipient = $(this).parent().siblings(".UFICommentContent").children(".UFICommentActorName").eq(0).attr("href").match("([^/]*)/$")[0]
  console.log($(this));
  var action = 'http://givemethetip.com/tip';
  $(this).replaceWith("<form id='dogeForm' action=" + action +  " method='post'><input type='text' name='amount'/><input type='hidden' name='sender_user_id' value=" + sender + "/><input type='hidden' name='recipient_user_id' value=" + recipient + "/></form>");
  //THE AUTO COMMENT IS NOT WORKING YET
  $('#dogeForm').submit(function(ev) {
    var commentBox = $(this).parent().parent().parent().parent().parent().parent().parent().parent().find('textarea');
    // commentBox.focus();
    //   setTimeout(3000, function() {
    //     commentBox.html("I just tipped you Dogecoin through http://www.givemethetip.com !");
    //     console.log(commentBox)
    //     commentBox.trigger(e);
    //   });
    });
});
