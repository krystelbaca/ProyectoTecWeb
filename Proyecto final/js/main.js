$(document).ready(function()
{
	$("#networks").click(function()
	{
		$.ajax(
		{
			url: "../dir/networks.html", 
         	success: function(data) 
        	{  
            	$("#wrapper").html(data);
            	console.log("Contenido externo cargado exitosamente mediante método ajax()."); 
            }
		}); 
	});
});