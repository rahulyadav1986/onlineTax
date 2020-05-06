$('.button').click(function(){
		  $('#popup').css('display','block');
		  $('.popup-bg').fadeIn();
	});

		$('#popup-close').click(function(){
			  $('.popup-bg').fadeOut();		
			  $('#popup').fadeOut();
		  return false;
		});
		


		$('#popup-close1').click(function(){
			  $('.popup-bg').fadeOut();		
			  $('#popup').fadeOut();
		  return false;
		});