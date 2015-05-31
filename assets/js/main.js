$(document).ready(function()
{

		$('.navItem').animo('blur', {duration: .2, amount: .9});

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

});
