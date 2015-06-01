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

		var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ad02826634f8ae00dc4c9cc24f45a291&tags=sunset&per_page=10";
		var src;
		$.getJSON(url + "&format=json&jsoncallback=?", function(data){
		    $.each(data.photos.photo, function(i,item){
		        src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
		        $("<img class='image'/>").attr("src", src).appendTo("#networks-search");
		        if ( i == 4 ) return false;
		    });
		});


    $.getJSON("https://api.flickr.com/services/rest/?method=flickr.cameras.getBrandModels&api_key=ad02826634f8ae00dc4c9cc24f45a291&brand=nikon&format=json&jsoncallback=?",
      function(result) {
        $.each(result, function(index, data) {
          $(data.camera).each(function(index) {
            var div = $("#contact-recently").append("<div id='camera-" + index + "' class='camera'><p>" +
              this.id + "</p><hr/></div>");
            if (this.images) {
              div.find("#camera-" + index).prepend("<img src='" + this.images.small._content + "' />")
            } else {
              div.find("#camera-" + index).prepend("<img src='assets/images/icons/no-image-small.png' />")
            }
            if ( index == 4 ) return false;
	          });
	        });
		});

    $("#cargar").click(function() {
        $.getJSON("https://api.flickr.com/services/rest/?method=flickr.tags.getHotList&api_key=ad02826634f8ae00dc4c9cc24f45a291&format=json&jsoncallback=?",
        	function(result) {
        $.each(result, function(index, data) {
          $(data.tag).each(function(index) {
            var div = $("#hot-topics").append("<div id='tag-" + index + "' class='tag'><p> score: " +
              this.score + "</p><p> tag: #" +this._content + "</p><hr/></div>");
            if ( index == 4 ) return false;
	          });
	        });
        });
    });
});
