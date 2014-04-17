// $("#mastHead").removeAttr("id");
var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('bootstrap.css');
(document.head||document.documentElement).appendChild(style);

var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('customStyles.css');
(document.head||document.documentElement).appendChild(style);

// global styles
$("#mastHead").css("background-image", "none");
$("#mastLogo").remove();
$("#mastHead").prepend("<h2 id='header'>Claremont Colleges Sakai</h2>");


// style login button
$("#loginLink1").addClass("btn btn-primary");
$("#loginLink1").removeAttr("id");


// //login styles
// if (window.location.pathname = "/portal/login") {
	$("body").empty();
	$form = $("<form class='form-inline' role='form' method='post' action='https://sakai.claremont.edu/portal/relogin' enctype='application/x-www-form-urlencoded'></form>");
	$form.append("<input type='text' name='eid' class='form-control' >");
	$form.append("<input type='password' name='pw' class='form-control' >");
	$select = $("<select class='form-control' name='realm'> ");
	$select.append("<option value='cgu'>Claremont Graduate University</option>");
	$select.append('<option value="cmc">Claremont McKenna College</option>');
	$select.append('<option value="hmc">Harvey Mudd College</option>');
	$select.append('<option value="ptz">Pitzer College</option>');
	$select.append('<option value="pom">Pomona College</option>');
	$select.append('<option value="scr">Scripps College</option>');
	$select.append('<option value="kgi">Keck Graduate Institute</option>');
	$select.append('<option value="jsd">Joint Science</option>');

	$form.append($select);

	$form.append("<button type='submit' class='btn btn-default'> Login </button>");
	$("body").append($form);
