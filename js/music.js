


function loadContent()
{
	$('#piano-button').on('click', function()
	{
		$('#content').hide();
		$('#content-piano').show();
		$('#bottom-nav').show();
	});

	$('#guitar-button').on('click', function()
	{
		$('#content').hide();
		$('#content-guitar').show();
		$('#bottom-nav').show();
	});

	$('#chords-button').on('click', function()
	{
		$('#content-guitar').hide();
		$('#content-piano').hide();
		$('#content-studio').hide();
		$('#content-location').hide();
		$('#content').show();

	});

		$('#studio-button').on('click', function()
	{
		$('#content-guitar').hide();
		$('#content-piano').hide();
		$('#content').hide();
		$('#content-location').hide();
		$('#content-studio').show();
		$('#bottom-nav').show();
	});
		$('#location-button').on('click', function()
	{
		$('#content-guitar').hide();
		$('#content-piano').hide();
		$('#content').hide();
		$('#content-studio').hide();
		$('#content-location').show();
		$('#bottom-nav').show();
	});
}

