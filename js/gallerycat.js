$(function() {
		var chosenClass = "";
		$(".fil-cat").click(function(){
		chosenClass = $(this).attr("data-rel");
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+chosenClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+chosenClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300);

	});
});
