var Loader = function () {    
  console.log('testing')
  var loader = document.querySelector('.progress-barr'),
      meter = document.querySelector('.percent'),
      k, i = 1,
      counter = function () {
        if (i <= 10) {   
          meter.innerHTML = i.toString();
          i++;
        } else {
          window.clearInterval(k);
        }
      };

	return {
  	init: function (options) {
      options = options || {};
      var time = options.time ? options.time : 0,
	        interval = time/100;
      
    	loader.classList.add('run');
      k = window.setInterval(counter, interval); 
      setTimeout(function () {        
      	loader.classList.add('done');
      }, time);
    },
  }
}();

Loader.init({
  	time: 40000
});

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });