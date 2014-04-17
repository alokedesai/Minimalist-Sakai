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

$("#mastHead").css("background-image", "none");
$("#mastLogo").remove();
$("#mastHead").prepend("<h2 id='header'>Claremont Colleges Sakai</h2>");


// style login button
$("#loginLink1").addClass("btn btn-primary");
$("#loginLink1").removeAttr("id");

