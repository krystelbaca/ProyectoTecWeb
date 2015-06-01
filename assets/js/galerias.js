$(document).ready(function(){

var urlGaleria = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=656853a74877e957ff7ff234bbd7b2ce&photoset_id=72157653406095919&user_id=133697780%40N04&format=json&nojsoncallback=1";
		$.getJSON(urlGaleria, function(data){

			 $.each(data.photoset.photo, function(i,item){
		        src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_b.jpg";
			 	$("<img/>").attr({"src":src, "id":"galeria"}).appendTo("#wrapper");
		       

		        



		    });

});



		});