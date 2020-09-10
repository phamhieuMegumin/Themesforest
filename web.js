window.addEventListener('scroll', function(){
	var menu = document.querySelector('.menu');
	menu.classList.toggle('actives', window.scrollY > 0);
});
var item = document.querySelectorAll('.list-item');
for(var i=0; i<item.length; i++){
	item[i].addEventListener('click', function(){
		var current = document.querySelector('.actived');
		current.classList.remove('actived');
		this.classList.add('actived');
	});
}
var burger = document.querySelector('.menu-toggle');
burger.addEventListener('click', function(){
	var	menu = document.querySelector('.menu');
	menu.classList.toggle('clicked')
});
