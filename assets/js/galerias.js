$(document).ready(function(){

var urlPortada = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=ce4c4ab1f01efa66fe9fa6bc41aadf31&user_id=133697780%40N04&format=json&nojsoncallback=1";
		$.getJSON(urlPortada, function(data){
			 $.each(data.photos.photo, function(i,item){
		        src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
			 	$("<img/>").attr({"src":src, "id":"portada"}).appendTo("#wrapper");
		        if ( i == 3 ) return false;


		        



		    });

});



		});