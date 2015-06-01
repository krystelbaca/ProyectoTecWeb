$(document).ready(function()
{
		$('li a').mouseenter(function()
		{
				$(this).animo('blur', {duration: 0, amount: .9});
				$(this).mouseleave(function()
				{
					$(this).animo('focus');
    			});				
		});

		setInterval(function interval() 
		{
      		$('.animacion').animo( { animation: 'tada' } );
			console.log("animacion aplicada a icon");
		}, 2000);

		$('.icon').mouseenter(function()
		{
			$(this).animo( { animation: 'bounce' } );
			$(this).removeClass('animacion');
    	});

    	$('.icon').mouseleave(function()
		{
			$(this).addClass('animacion');
    	});

    	$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ad02826634f8ae00dc4c9cc24f45a291&tags=cats&per_page=10",
    		function(result) 
    		{
        	$.each(result, function(index, data) 
        		{
          		$(data.track).each(function(index) 
          			{
		            var div = $("#wrapper").append("<div id='image-" + index + "' class='image'><p>" +
		            this.name + "</p>");
        			});
      			});
      		});
});
