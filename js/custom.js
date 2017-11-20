// Case Studies

$(".casestudy__btn").on('click', function(){
    var $this = $(this);
    var target = $this.data('content');
    $('.casestudy__btn').not($this).each(function(){
       var $other = $(this);
       var otherTarget = $other.data('content');
       $(otherTarget).hide();        
    });
    $(target).toggle();
});


$('.casestudy__btn').on('click', function(){
	$('.casestudy__btn').removeClass('casestudy__btn--active');
	$(this).toggleClass('casestudy__btn--active');
});



// Charts

// list - bold on click

$('.chartslist__item').on('click', function(){
	$(this).siblings().removeClass('chartslist__item--active');
	$(this).addClass('chartslist__item--active');
});

$('.carousel-indicators li:first-child').on('click', function(){
	$('.chartslist__item:first-child').siblings().removeClass('chartslist__item--active');
	$('.chartslist__item:first-child').addClass('chartslist__item--active');
});

$('.carousel-indicators li:nth-child(2)').on('click', function(){
	$('.chartslist__item:nth-child(2)').siblings().removeClass('chartslist__item--active');
	$('.chartslist__item:nth-child(2)').addClass('chartslist__item--active');
});

$('.carousel-indicators li:nth-child(3)').on('click', function(){
	$('.chartslist__item:nth-child(3)').siblings().removeClass('chartslist__item--active');
	$('.chartslist__item:nth-child(3)').addClass('chartslist__item--active');
});

$('.carousel-indicators li:nth-child(4)').on('click', function(){
	$('.chartslist__item:nth-child(4)').siblings().removeClass('chartslist__item--active');
	$('.chartslist__item:nth-child(4)').addClass('chartslist__item--active');
});

$('.carousel-indicators li:last-child').on('click', function(){
	$('.chartslist__item:last-child').siblings().removeClass('chartslist__item--active');
	$('.chartslist__item:last-child').addClass('chartslist__item--active');
});


<!-- Bootstrap carousel initializer -->
$('#Charts').carousel({
	interval: false
});

