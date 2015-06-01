$(document).ready(function(){

	var pp = "https://api.flickr.com/services/rest/?method=flickr.photos.people.getList&api_key=656853a74877e957ff7ff234bbd7b2ce&photo_id=18339390592&format=json&nojsoncallback=1&auth_token=72157653803468892-454cb5c212cc629e&api_sig=7694a7b5509f9b4ef96732689f189f9d"
		$.getJSON(pp, function(data){
			$.each(data.person.photo, function(i,item){
		        src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
			 	$("<img/>").attr({"src":src, "id":"perfil"}).appendTo("#wrapper");
		       

		    });
		});

});