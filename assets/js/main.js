$(document).ready(function()
{

		$('.navItem').animo('blur', {duration: .2, amount: .9});


		$('#cuadro').click(function()
		{
			$('#cuadro').animo( { animation: 'tada' } );
			console.log("animacion aplicada a icon");
		});
});
