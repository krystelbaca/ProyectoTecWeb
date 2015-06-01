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


		var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ad02826634f8ae00dc4c9cc24f45a291&tags=moon&per_page=10";
		var src;
		$.getJSON(url + "&format=json&jsoncallback=?", function(data){
		    $.each(data.photos.photo, function(i,item){
		        src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
		        $("<img/>").attr("src", src).appendTo("#network-ribbon");
		        if ( i == 3 ) return false;
		    });
		});
    	
});
