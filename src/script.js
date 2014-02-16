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

    var recipient = $(this).parent().siblings(".UFICommentContent").children(".UFICommentActorName").eq(0).attr("href").match("([^/]*$)")[0]
    console.log($(this));
    var action = 'http://givemethetip.com/' + getApiKey() + '/' + recipient;
    $(this).replaceWith("<form action=" + action +  " method='post'><input type=text name='amount'/></form>");
});