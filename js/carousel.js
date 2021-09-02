
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 1500;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}

var character =
document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}




setInterval(checkIfCrashed, 100);

function checkIfCrashed(){
	var characterTop = character.offsetTop;
	var characterLeft = character.offsetLeft;
	var blockTop = block.offsetTop;
	var blockLeft = block.offsetLeft;

	console.log("characterTop is "+characterTop+" characterLeft is"+ characterLeft);
	console.log("blockTop is"+ blockTop+" blockLeft is "+blockLeft);

	if (blockLeft==150px)
}
