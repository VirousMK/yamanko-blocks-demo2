var data = [
	{
    "date" : "8 апр. 2021",
    "descr" : "Переведено\n24/30\n14/18\n\nОчищено\n32/32\n18/18\n\nГотово\n2/30\n14/18",
    "head" : "Хана и Хина после школы",
    "img" : "1V-ue-jI0rnbwEz1h7xuQeHuZCEx6mLV2"
  }, {
    "date" : "22 нояб. 2020",
    "descr" : "Переведено\n24/30\n14/18\n\nОчищено\n32/32\n18/18\n\nГотово\n5/30\n14/18",
    "head" : "Робкая Такасэ снова ждёт её сегодня",
    "img" : "1VZD8c7m5LnOkwlu-YrPfURjYJXOy2VAp"
  }, {
    "date" : "17 мая 2020",
    "descr" : "Переведено\n24/30\n14/18\n\nОчищено\n32/32\n18/18\n\nГотово\n0/30\n14/18",
    "head" : "После закрытия",
    "img" : "1Ub8MvuSt2Ls4fjQyYGvKYM6L7LVHgDWj"
  }
];


var $container = $('.d-block-container');
$.each(data, function (i) {
	var stats = this.descr.split('\n\n');
	$.each(stats, function (i) {
		stats[i] = this.split('\n');
		$.each(stats[i], function (j) {
			if (this.indexOf('/') !== -1) {
				stats[i][j] = this.split('/');
			}
		});
	});
	console.log(stats);

	var $block = $('<div>', {
		class: 'd-block  wow fadeInUp  relative flex w100p bgc-first',
		'data-wow-duration': `${1+(i+1)*0.5}s`,
		append: $('<div>', {
			class: 'work-poster loading',
			append: $('<img>', {
				class: 'work-placeholder  w100p block',
				src: 'imgs/placeholder.jpg'
			})
		})
		.add($('<div>', {
			class: 'work-data',
			append: $('<div>', {
				class: 'work-name  t-center bold',
				html: this.head
			})
			.add($('<div>', {
				append: $.map(stats, function(value) {
					return $('<div>', {
						class: 'work-stats-container  relative',
						append: $('<div>', {
							class: 'work-stats-header',
							html: `${value[0]} страниц:`,
							append: $('<span>', {
								class: 'right',
								html: `${value[1][0]} из ${value[1][1]}`
							})
						})
						.add($('<div>', {
							class: 'work-stats-bar-container',
							append: $('<div>', {
								class: 'work-stats-bar',
								css: {
									width: `calc(100% * (${value[1][0]} / ${value[1][1]}))`
								}
							})
						}))
						.add($('<div>', {
							class: 'work-stats-header',
							html: `${value[0]} глав:`,
							append: $('<span>', {
								class: 'right',
								html: `${value[2][0]} из ${value[2][1]}`
							})
						}))
						.add($('<div>', {
							class: 'work-stats-bar-container',
							append: $('<div>', {
								class: 'work-stats-bar',
								css: {
									width: `calc(100% * (${value[2][0]} / ${value[2][1]}))`
								}
							})
						}))
					})
				})
			}))
			.add($('<div>', {
				class: 'work-date  right tc-second',
				html: this.date
			}))
		}))
	});
	$container.append($block);

	var img = new Image();
	img.onload = function () {
		var src = this.src;
		setTimeout(function () {
			$block.find('.work-poster').removeClass('loading');
			$block.find('.work-poster').css({'background-image': `url("${src}")`});
		}, 3000);
	}
	img.src = 'https://drive.google.com/u/0/uc?id=' + this.img;
});

wow = new WOW({
	animateClass: 'animated',
	offset: 40,
	mobile: true,
		live: true
});

wow.init();




// setInterval(function () {
// 	$('.d-block').removeClass('test');
// }, 4000);
// setTimeout(function () {
// 	setInterval(function () {
// 		$('.d-block').addClass('test');
// 	}, 4000);
// }, 2000);