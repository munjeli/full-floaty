(function( $ ){
	
$.fn.floaty = function() {
	
	floatydiv();
	
		$(window).resize( function(){
			floatydiv();
		});	
			
		function floatydiv(){	
			var pageheight = $(document).height();
			var topmargin = (pageheight/2) - 150;
			$('#headspace').css('height', topmargin + 'px');
			
			/* option to code the horizontal center of the float
			 var pagewidth = $(document).width();
			var leftmargin = (pagewidth/2) - 260;
			$('#floatydiv').css('margin-left', leftmargin + 'px');*/
		}
	
};

})( jQuery );