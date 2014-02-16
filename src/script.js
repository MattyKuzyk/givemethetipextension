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

  commentActions.each(function() {
    $(this).prepend(tip);
  });
    $('#dogeTip').click( function() { 
    });

  statusActions.each(function() {
    $(this).prepend(tip);
  });
    $('#dogeTip').click( function() { 
    });

}

$(document).on('click', "a#dogeTip", function() {
    
    var e = jQuery.Event("keydown");
    e.which = 13; // # Some key code value
    
    var recipient = $(this).parent().siblings(".UFICommentContent").children(".UFICommentActorName").eq(0).attr("href").match("([^/]*$)")[0]
    var action = 'http://givemethetip.com/' + getApiKey() + '/' + recipient;
    console.log(action)

    $(this).replaceWith("<form id='dogeForm'><input type=text name='amount'/></form>");

    $('#dogeForm').submit(function(ev) {
      ev.preventDefault();
      var commentBox = $(this).parent().parent().parent().parent().parent().parent().parent().parent().find("input.mentionsHidden");
      var seeBox = $(this).parent().parent().parent().parent().parent().parent().parent().parent().find('textarea');

      console.log(commentBox["0"]);
      console.log(seeBox["0"]);

      seeBox.focus(function(){
        $(commentBox["0"]).attr("value","YO NIGGER");
        $(seeBox.trigger(e));
        //commentBox.html("I just tipped you " + $(this).val().toString() + " Dogecoin through http://www.givemethetip.com")
      }).focus();
    });

});