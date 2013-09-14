(function( $ ){
	
$.fn.democraCule = function() {
	
	floatydiv();
	
		$(window).resize( function(){
			floatydiv();
		});	
			
		function floatydiv(){	
			var pageheight = $(document).height();
			var topmargin = (pageheight/2) - 150;
			$('#headspace').css('height', topmargin + 'px');
			
			var pagewidth = $(document).width();
			var leftmargin = (pagewidth/2) - 260;
			$('#floatydiv').css('margin-left', leftmargin + 'px');
		}
	
};

})( jQuery );