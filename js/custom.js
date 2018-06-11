// Video channel HP

$(document).ready(function() {
	var $videoSrc;  
	$('.video-btn').click(function() {
	    $videoSrc = $(this).data( "src" );
	});

	// when the modal is opened autoplay it  
	$('#video-modal').on('shown.bs.modal', function (e) {
		// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
		$("#video").attr('src',$videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1" ); 
	})
	  
	// stop playing the youtube video when I close the modal
	$('#video-modal').on('hide.bs.modal', function (e) {
	    // a poor man's stop video
	    $("#video").attr('src',$videoSrc); 
	}) 
});

// Responsive menu toggler

$(document).ready(function() {
 $(".nav-toggle").click(function () {
 	$( ".top-navigation ul" ).slideToggle( "slow" );
  });   
});

// HP News carousel autocycle

// $(document).ready(function() {
// 	function newsCycle () {
// 		var t = $(window).scrollTop();
// 		$( ".news-itemC:first-child" ).appendTo('.carousel-row'); 
// 		$(window).scrollTop(t);
// 	};
// 	setInterval(newsCycle, 5000); // Delay interval 
// });

$(document).ready(function() {

	// next
	$(".carousel-control-item-next").click(function () {
		$( ".news-itemC:first-child" ).appendTo('.carousel-row'); 
  	});

	// prev
  	$(".carousel-control-item-prev").click(function () {
		$( ".news-itemC:last-child" ).prependTo('.carousel-row'); 
  	});
});


// Search in mobile 
$(document).ready(function() {
	$( ".top-search" ).clone().addClass('mobile-top-search').insertBefore( ".top-navigation" );
});