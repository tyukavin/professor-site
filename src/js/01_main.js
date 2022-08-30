document.addEventListener("DOMContentLoaded", () => {

	const swiperHero = new Swiper('.hero-slider', {
		slidesPerView: 1,
		pagination: {
			el: ".hero .swiper-pagination",
		},
		navigation: {
			nextEl: ".hero .swiper-button-next",
			prevEl: ".hero .swiper-button-prev",
		},
	});

	const swiperStock = new Swiper('.stock-slider', {
		loop: true,
        spaceBetween: 16,
		slidesPerView: "auto",
		navigation: {
			nextEl: ".stock .swiper-button-next",
			prevEl: ".stock .swiper-button-prev",
		},
		breakpoints: {
			640: {
				spaceBetween: 53,
			}
		}
	});

	const swiperSpec = new Swiper('.spec-slider', {
        spaceBetween: 16,
		slidesPerView: "auto",
		navigation: {
			nextEl: ".benefits .swiper-button-next",
			prevEl: ".benefits .swiper-button-prev",
		},
		breakpoints: {
			640: {
				spaceBetween: 53,
				slidesPerView: 4,
			}
		}
	});

	const swiperReviews = new Swiper('.reviews-slider', {
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: ".reviews .swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".reviews .swiper-button-next",
			prevEl: ".reviews .swiper-button-prev",
		},
	});

	(function() {
		const header = document.querySelector(".header");

		headerFixed();

		function headerFixed() {
			let heightOffset = window.pageXOffset;

			console.log(heightOffset)

			if (heightOffset > 0) {
				header.classList.add("header-fixed");
			} else {
				header.classList.remove("header-fixed");
			}
		}
	})();

	(function() {
		const btnMenuMobile = document.querySelector(".js-menu-mobile-button");
		const menuMobile = document.querySelector(".js-menu-mobile")
		let isOpened = false;

		btnMenuMobile.addEventListener("touchstart", (event)=>{
			if (isOpened) {
				menuMobile.classList.remove("is-open");
				isOpened = false;
			} else {
				menuMobile.classList.add("is-open");
				isOpened = true;
			}
		});
	})();

	(function() {
		const headerInnerItem = document.querySelector(".header-menu__item--inner");

		headerInnerItem.addEventListener("mouseenter", (event)=>{
			const innerMenu = event.target.querySelector(".inner-menu");
			innerMenu.classList.add("is-show");
		});
		headerInnerItem.addEventListener("mouseleave", (event)=>{
			const innerMenu = event.target.querySelector(".inner-menu");
			innerMenu.classList.remove("is-show");
		});
	})();

	(function() {
		const buttons = document.querySelectorAll(".js-service-tab-item");
		const sections = document.querySelectorAll(".js-service-tab-content");

		buttons.forEach((btn)=> {
			btn.addEventListener("click", ()=>{
				buttons.forEach((btn)=>{
					btn.classList.remove("is-active");
				});
				btn.classList.add("is-active");
				const tabName = btn.id;
				sections.forEach((section)=>{
					section.classList.remove("is-active");
				});
				const req = document.getElementsByClassName(`${tabName}`);
				req[0].classList.add("is-active");
			})
		})
	})();
});

