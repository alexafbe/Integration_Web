$(window).ready(function(){
	$('ul li a, .bloctxt h3 a').click(function(clean){
		$.scrollTo(this.hash||0, 1000);
		clean.preventDefault();
	});
});