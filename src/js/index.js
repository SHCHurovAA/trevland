// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});



/*  Слайдер  */
import { tns } from "tiny-slider";

const slider = tns({
	container: ".special-offer__cards",
	items: 5,
	autoplay: true,
	speed: 400,

	nav: true,
	navContainer: ".special-offer__nav",
	navPosition: "bottom",
	navAsThumbnails: true,
	autoplayButton: false,
	autoplayButtonOutput: false,
	controls: true,
	prevButton: "#ts-prev",
	nextButton: "#ts-next",

	swipeAngle: false,
});

// document.querySelector("#ts-prev").onclick = () => slider.goTo("prev");
// document.querySelector("#ts-next").onclick = () => slider.goTo("next");


