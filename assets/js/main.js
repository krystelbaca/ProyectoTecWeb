$(document).ready(function()
{

		$('.navItem').animo('blur', {duration: .2, amount: .9});

		setInterval(function() {
      	$('.icon').animo( { animation: 'tada' } );
			console.log("animacion aplicada a icon");
		}, 2000);

});
