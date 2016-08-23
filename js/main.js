(function () {

  if (!window.matchMedia('(max-width: 768px)').matches) {

    initBt3();

  var initial_cover_on_bv = true;
  var initial_cover_on_bv2 = true;

  var paused = true;

  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#videoEl'),

    // Container element
    container: document.querySelector('bg-video'),

    // Resize
    resize: true,

    autoplay: false,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

   // playButton: document.querySelector('#play2'),
   // pauseButton: document.querySelector('#pause2'),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'img/surf.mp4',
        type: 'video/mp4'
      },
      {
        src: 'img/surf.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
      if (initial_cover_on_bv) {
        document.querySelector('#video_cover').style.display = 'none';
        initial_cover_on_bv = false;
      }
      console.log('01 -initial video frame..');
      bv.videoEl.pause();
      bv2.videoEl.pause();
      paused = true;
    }
  });



  var bv2 = new Bideo();
  bv2.init({
    // Video element
    videoEl: document.querySelector('#phone-videoEl'),

    // Container element
    container: document.querySelector('#phone-video-container'),

    // Resize
    resize: true,

    autoplay: false,

    // isMobile: window.matchMedia('(max-width: 768px)').matches,

   // playButton: document.querySelector('#play2'),
   // pauseButton: document.querySelector('#pause2'),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'img/surf.mp4',
        type: 'video/mp4'
      },
      {
        src: 'img/surf.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
      if (initial_cover_on_bv) {
        document.querySelector('#video_cover').style.display = 'none';
        initial_cover_on_bv2 = false;
      }
      console.log('02 -initial video frame..');
    }
  });



var last_known_scroll_position = 0;
var ticking = false;
var elmnt = document.getElementById("video-bg");

var handsEl = document.getElementById("hands");

var phoneEl = document.getElementById("phone-container");

var temp_num = getPosition(elmnt).y;

console.log('video panel y pos = ', temp_num);

var phone_fixed_trigger = temp_num - 680;

console.log('phone_fixed_trigger number = ', phone_fixed_trigger);



function doSomething(scroll_pos) {
  // do something with the scroll position

        console.log('scroll_pos = ', scroll_pos, "  phone_fixed_trigger = ", phone_fixed_trigger);
      if (scroll_pos > phone_fixed_trigger){

        if (paused && scroll_pos > 1500) {
          bv.videoEl.play();
          bv2.videoEl.play();
          paused = false;
        }

        handsEl.style.opacity = '1';
        handsEl.style.height = '578px';
        handsEl.style.overflow = 'auto';
          addClass(phoneEl,'phone-fixed'); 

      } else {

          console.log('nope');
        if (scroll_pos > 465)
        {
          addClass(phoneEl,'phone-fixed'); 

          console.log('YUP');
        }
        else
        {
          removeClass(phoneEl,'phone-fixed'); 

          console.log('');
        }

        handsEl.style.opacity = '0';
        //set delay for 1 second before setting height to 0 to allow for animated opacity transition
        handsEl.style.height = '0';
        
      }
    }

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
 });

} //end ifMobile


}());

// Helper function to get an element's exact position
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }

}








/** Stretch Button **/
function getRandom(min, max){
  return Math.random() * (max - min) + min;
}

// Button 3
function initBt3() {
  var bt = document.querySelectorAll('#hire-me')[0];
  var particleCount = 6;
  var particles;
  var clicked = false;

  bt.addEventListener('mouseenter', function() {
    particles = [];

    TweenLite.to(bt.querySelectorAll('.button__bg'), 1.5, { scaleX: 1.05, ease: Expo.easeOut, delay: 0.2 });

    for (var i = 0; i < particleCount; i++) {
      particles.push(document.createElement('span'));
      bt.appendChild(particles[i]);

      particles[i].classList.add(i % 2 ? 'left' : 'right');
      
      var dir = i % 2 ? '-' : '+';
      var tl = new TimelineLite();

      tl.to(particles[i], 2, { x: dir + 18, scaleX: 1.4, ease: Expo.easeOut });
    }
  });

  bt.addEventListener('mouseleave', function() {
    if (clicked) return;

    TweenLite.to(bt.querySelectorAll('.button__bg'), 0.9, { scale: 1, ease: Power3.easeOut, overwrite: 'all' });

    for (var i = 0; i < particles.length; i++) {
      particles[i].classList.add(i % 2 ? 'left' : 'right');

      TweenLite.to(particles[i], 0.6, { x: 0, scaleX: 1, ease: Power3.easeOut, onComplete: function() {
        this.target.parentNode.removeChild(this.target);
      } });
    }
  });

  bt.addEventListener('click', function() {
    clicked = true;

    TweenLite.to(bt.querySelectorAll('.button__bg'), 0.9, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4), delay: 0.1, 
      onComplete: function(){
        clicked = false;
      },
      onOverwrite: function(){
        clicked = false;
      } 
    }, 0.6);

    for (var i = 0; i < particleCount; i++) {
      var dir = i % 2 ? '-' : '+';
      var size = i < 2 ? 1 : getRandom(0.2, 0.6);
      var r = i % 2 ? getRandom(-1, 1)*i/2 : getRandom(-1, 1)*i;

      TweenLite.set(particles[i], { scale: size });
      TweenLite.to(particles[i], 0.1, { scale: size, x: dir +'=25' });
      TweenLite.to(particles[i], 0.6, { x: dir + 60, y: r*10, scale: 0, opacity: 0, ease: Power3.easeOut });
    }
  });
}

