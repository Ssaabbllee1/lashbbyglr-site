$(document).ready(function ()
{
  var modal = document.getElementById("newsletter");

  //Fade in delay for the background overlay (control timing here)
  //Fade in delay for the popup (control timing here)
  $("#newsletter").delay(2200).fadeIn(0);

});

$(document).ready(function () {
	$("#newsletter-popup").click(function () {
		$("#newsletter").toggle();
	});
});

$(document).ready(function () {
	$("#popup-close").click(function () {
		$("#newsletter").toggle();
	});
});