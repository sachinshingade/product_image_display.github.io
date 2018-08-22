$(document).ready(function(){
    $(".pics").click(function(){
      console.log("clicked");
      var src = $(this).data('id');
        //$(this).show().appendTo('.container');
      $('#active').attr('src',src);
    });
  });