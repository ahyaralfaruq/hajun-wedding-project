// Parallax (landing element)

$('.waypoints').waypoint(function(direction) {

	if (direction === 'down' && !$(this.element).hasClass('animate__slow')) {

		$(this.element).addClass('active');

		setTimeout(function(){

			$('body .waypoints.active').each(function(i){

				var el = $(this);

				setTimeout(function(){

					var effect = el.data('effect');

					if (effect == 'fadeInLeft') {
						el.addClass('animate__animated animate__slow animate__fadeInLeft');
					} else if (effect == 'fadeInRight') {
						el.addClass('animate__animated animate__slow animate__fadeInRight');
					} else if (effect == 'fadeInDown') {
						el.addClass('animate__animated animate__slow animate__fadeInDown');
					} else {
						el.addClass('animate__animated animate__slow animate__fadeInUp');
					}

					el.removeClass('active');

				}, i * 200);

			});

		}, 100);

	}

}, { 
	offset: '95%',
	context: '[data-content="content-wrapper"]',
});

// section countdown

const schedule = new Date("8 jul 2023 09:00:00").getTime()

const timeInterval = setInterval(() => {
	const currentDate = new Date().getTime()
	const distance = schedule - currentDate
	
	let days = Math.floor(distance / (1000 * 60 * 60 * 24))
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	let seconds = Math.floor((distance % (1000 * 60)) / 1000)

	document.getElementById("days").innerHTML = days.toString().length > 1 ? days : "0" + days.toString()
	document.getElementById("hours").innerHTML = hours.toString().length > 1 ? hours : "0" + hours.toString()
	document.getElementById("minutes").innerHTML = minutes.toString().length > 1 ? minutes : "0" + minutes.toString()
	document.getElementById("seconds").innerHTML = seconds.toString().length > 1 ? seconds : "0" + seconds.toString()
	
	if (distance < 0) {
		clearInterval(timeInterval)
		document.getElementById("days").innerHTML = "00"
		document.getElementById("hours").innerHTML = "00"
		document.getElementById("minutes").innerHTML = "00"
		document.getElementById("seconds").innerHTML = "00"
	}

}, 1000)
	

// section gallery

// const dataArray = [
// 	"img/1.jpg",
// 	"img/2.jpg",
// 	"img/3.jpg",
// 	"img/4.jpg",
// 	"img/5.jpg",
// 	"img/6.jpg",
// 	"img/7.jpg",
// 	"img/8.jpg",
// 	"img/9.jpg",
// 	"img/10.jpg",
// 	"img/11.jpg",
// 	"img/12.jpg",
// 	"img/groom.jpg",
// 	"img/bride.jpg",
// 	"img/background.jpg",
// ]

// 	const container = document.getElementById("gallery")
// 	let str = ""
	
// 	dataArray.forEach(data => {
// 		str += `
// 		<div class="col-6 col-sm-6 mb-3">
// 		<div class="w-100 overflow-hidden rounded">
// 		<img src="${data}" alt="gambar" class="w-100 object-cover">
// 		</div>
// 		</div>
// 		`
// 	})

// 	container.innerHTML = str

// section audio

const getAudioElement = document.getElementById("onoff")
const getAudioMusic = document.getElementById("audioAutoplay")
const getFirstChild = getAudioElement.children[0]
const getSecondChild = getAudioElement.children[1]
const body = document.querySelector('[data-content="content-wrapper"]')
let isPlay = false

var settingAutoplay = 'yes';
window.settingAutoplay = settingAutoplay === 'disable' ? false : true;

body.style.overflow = "hidden"

getAudioElement.addEventListener("click", function() {

	if(isPlay) {
		getFirstChild.classList.add("active")
		getSecondChild.classList.remove("active")
		getAudioMusic.pause()
		isPlay = false
	} else {
		getFirstChild.classList.remove("active")
		getSecondChild.classList.add("active")
		getAudioMusic.play()
		isPlay = true
	}
})

// section modal

const openLetter = document.getElementById("openLetter")
const modal = document.querySelector(".firstModal")

openLetter.addEventListener("click", function() {
	getFirstChild.classList.remove("active")
	getSecondChild.classList.add("active")
	modal.classList.remove("active")
	getAudioMusic.play()
	body.style.overflow = "auto"
	isPlay = true
})