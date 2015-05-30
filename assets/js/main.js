$(document).ready(function()
{

		$('.navItem').animo('blur', {duration: .2, amount: .9});


		$('#cuadro').click(function()
		{
			$(this).animo( { animation: 'tada' } );
			console.log("animacion aplicada a icon");
		});
});
