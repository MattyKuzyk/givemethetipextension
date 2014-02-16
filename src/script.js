$(document).ready(function(){
  addTips();
});

function getApiKey() {
  return "";
}

function addTips() {
  // var commentActions = $(".fsm.fwn.fcg");
  var commentActions = $(".fsm.fwn.fcg.UFICommentActions");
  var statusActions = $("._5pcp");
  var tip = ("<a id='dogeTip'>Tip</a>   · ");
  var tipStatus = ("<a id='dogeTipStatus'>Tip</a>   · ");

  commentActions.each(function() {
    $(this).prepend(tip);
  });
  statusActions.each(function() {
    $(this).prepend(tipStatus);
  });
}


$(document).on('click', "a#dogeTip", function() {
  var e = jQuery.Event("keydown");
  e.which = 13; // # Some key code value
  var sender = $("a.fbxWelcomeBoxName").attr('href').match("([^/]*$)")[0];
  var recipient = $(this).parent().siblings(".UFICommentContent").children(".UFICommentActorName").eq(0).attr("href").match("([^/]*$)")[0];
  console.log($(this));
  var action = 'http://givemethetip.com/tip';
  $(this).replaceWith("<form id='dogeForm' action=" + action +  " method='post'  style='display:inline;width:50px'><input type='text' name='amount'/><input type='hidden' name='sender_user_id' value='" + sender +  "'/><input type='hidden' name='recipient_user_id' value='" + recipient + "'/></form>");
  $("input[name='amount']").focus();
  $('#dogeForm').submit(function(ev) {
    ev.preventDefault();
    var data = $(this).serialize();
    $.post('http://givemethetip.com/tip', data);
    $('#dogeForm').replaceWith("<a id='dogeTip'>Tip</a>");
  });
});

$(document).on('click', "a#dogeTipStatus", function() {
  var sender = $("a.fbxWelcomeBoxName").attr('href').match("([^/]*$)")[0];
  var recipient = $(this).parent().parent().parent().siblings().eq(0).attr("href").match("([^/]*$)")[0];
  var action = 'http://givemethetip.com/tip';
  console.log(recipient);
  $(this).replaceWith("<form id='dogeStatusForm' action=" + action +  " method='post'  style='display:inline;width:50px'><input type='text' name='amount'/><input type='hidden' name='sender_user_id' value='" + sender + "'/><input type='hidden' name='recipient_user_id' value='" + recipient + "'/></form>");
  $("input[name='amount']").focus();
  $('#dogeStatusForm').submit(function(ev) {
    ev.preventDefault();
    var data = $(this).serialize();
    $.post('http://givemethetip.com/tip', data);
    $('#dogeForm').replaceWith("<a id='dogeTipStatus'>Tip</a>");
  });
});
