$(document).ready(function() {
     //$('#audiobtn').css('top','250px');
    // $('#audiobtn').css('left','250px');
     var w,h;
     w=$('#audiobtn').width();
     h=$('#audiobtn').height();
     var coords = getAbsPosition( document.getElementById('audiobtn'));
     $('div#dialog').dialog({ 
      autoOpen:false,
      height: 'auto',
      resizable: false,
      width: 'auto',
      closeOnEscape: true,
      position: [coords.x+w-30,coords.y+(h/4)] });
     //$('#dialog').draggable();
      //$(".ui-dialog-titlebar").hide();
     $(".ui-dialog-titlebar").css('color','#000');
     $('#audiobtn').click(function(){
      if ($('div#dialog').dialog('isOpen') === true) {
    // true
    $('div#dialog').dialog('close');
  } else {
    // false
    $('div#dialog').dialog('open');
  }});
   })
    function getAbsPosition(element) {
     var rect = element.getBoundingClientRect();
     return {x:rect.left,y:rect.top}
   }