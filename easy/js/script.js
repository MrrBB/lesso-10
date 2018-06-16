window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info')[0];


	function hideTabContent(a) {
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1)

	function showTabContent(b){
		if(tabContent[b].classList.contains('hide')){
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	showTabContent(0)

	info.addEventListener('click', function(event) {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i] && i != 0){
					hideTabContent((i-1));
					hideTabContent(0);
					showTabContent(i);
					break;
				} else{
					hideTabContent(3);
					hideTabContent(2);
					hideTabContent(1);
					showTabContent(0);
				}
			}
		}
	});

//TIMER

	let deadLine = '2018-06-12';

	function getTimeRemaning(endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date());
		let seconds = Math.floor((t/1000)%60),
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor( (t/(1000*60*60) % 60) ) ; 

			//условие
				if(t < 0){
					hours = 0,
					minutes  = 0,
					seconds =  0					
				}




			if(hours < 10){
				hours = '0' + hours;
			}
			if(minutes < 10){
				minutes = '0' + minutes;
			}
			if(seconds < 10){
				seconds = '0' + seconds;
			}
			return{
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			}
	}

	function setClock(id, endTime){

		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			function updateClock() {
				let t = getTimeRemaning(endTime);

				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;
			}

			updateClock();
			let timeInterval = setInterval(updateClock, 1000);
	}

	setClock('timer', deadLine);


	//Modal
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close  = document.querySelector('.popup-close'),
		descriptionTab = info.querySelectorAll('.info-tabcontent');

		for (let i = 0; i < 4; i++) {
			descriptionTab[i].addEventListener('click', function() {
				this.classList.add('more-splash');
				overlay.style.display = "block";
				document.body.style.overflow = 'hidden';
			});
		};

	console.log(descriptionTab);	
	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = 'hidden';
	});
	close.addEventListener('click', function(){
		overlay.style.display = "none";
		more.classList.remove("more-splash");
		document.body.style.overflow = '';
	})
})	


class Options{
	constructor(height, width, bg, fontSize, textAlign){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	creatDiv(text){
		let div = document.createElement('div');
		div.textContent = text;

		div.style.cssText = `height: ${this.height};
							width: ${this.width};
							background-color: ${this.bg};
							font-size: ${this.fontSize};
							text-align: ${this.textAlign};`

		document.body.appendChild(div)
	}
}

let obj = new Options('200px','300px','black','20px','center');
obj.creatDiv('Hello')