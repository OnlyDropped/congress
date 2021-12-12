$('.slider').slick({
  cssEase: 'linear',
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  arrows: true,
  nextArrow: '<button type="button" class="slick-next"><img src="img/icon/arrow-right.svg" alt=""></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/arrow-right.svg" alt=""></button>',
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 376,
      settings: {
        arrows: false,
        dots: true,
        //autoplay: true,
        //fade: true,
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }
  ]
});

	// jQuery
$('.tabs-wrapper').each(function() {
	let ths = $(this);
	ths.find('.tab-item').not(':first').hide();
	ths.find('.tab').click(function() {
		ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});

	$(".accordeon-wrapper .panel").hide().prev().click(function() {
	$(this).parents(".accordeon-wrapper").find(".panel").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
});

$('.header-menu__btn').on('click', function () {
  $('.header-menu__nav').toggleClass('active') 
});

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);






