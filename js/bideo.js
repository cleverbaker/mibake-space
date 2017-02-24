/**
 * Full Background Video
 *
 * More info on Audio/Video Media Events/Attributes/Methods
 * - https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
 * - http://www.w3schools.com/tags/ref_av_dom.asp
 */

var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

(function (global) {


  /** Stretch Button **/
function getRandom2(min, max){
  return Math.random() * (max - min) + min;
}

        var real2_bt = document.querySelectorAll('#hire-me')[0];
        var rwd_box = document.querySelectorAll('#rwd_box');

      function real2_animateHireMeButton(){

     /*   var real2_particleCount = 6;
        var real2_particles;
        real2_particles = []
        console.log('Woop Woop Fire away!');

        TweenLite.to(real2_bt.querySelectorAll('.button__bg'), 1.5, { scaleX: 1.05, ease: Expo.easeOut, delay: 0.2 });


          for (var i = 0; i < real2_particleCount; i++) {
            real2_particles.push(document.createElement('span'));
            real2_bt.appendChild(real2_particles[i]);

            real2_particles[i].classList.add(i % 2 ? 'left' : 'right');
            
            var dir = i % 2 ? '-' : '+';
            var tl = new TimelineLite();

            tl.to(real2_particles[i], 2, { x: dir + 18, scaleX: 1.4, ease: Expo.easeOut });
          }

        TweenLite.to(real2_bt.querySelectorAll('.button__bg'), 0.9, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4), delay: 0.1, 
            onComplete: function(){
              console.log('clicked = false;')
            },
            onOverwrite: function(){
              console.log('clicked = false; //overwrite')
            } 
          }, 0.6);

          for (var i = 0; i < real2_particleCount; i++) {
            var dir = i % 2 ? '-' : '+';
            var size = i < 2 ? 1 : getRandom(0.2, 0.6);
            var r = i % 2 ? getRandom(-1, 1)*i/2 : getRandom(-1, 1)*i;

            TweenLite.set(real2_particles[i], { scale: size });
            TweenLite.to(real2_particles[i], 0.1, { scale: size, x: dir +'=25' });
            TweenLite.to(real2_particles[i], 0.6, { x: dir + 60, y: r*10, scale: 0, opacity: 0, ease: Power3.easeOut });
          }*/


  var real2_particleCount = 6;
  var real2_particles;
  real2_particles = []

  TweenLite.to(real2_bt.querySelectorAll('.button__bg'), 1.5, { scaleX: 1.05, ease: Expo.easeOut, delay: 0.7 });


    for (var i = 0; i < real2_particleCount; i++) {
      real2_particles.push(document.createElement('span'));
      real2_bt.appendChild(real2_particles[i]);

      real2_particles[i].classList.add(i % 2 ? 'left' : 'right');
      
      var dir2 = i % 2 ? '-' : '+';
      var tl2 = new TimelineLite();

      tl2.to(real2_particles[i], 2, { x: dir2 + 18, scaleX: 1.4, ease: Expo.easeOut });
    }

  TweenLite.to(real2_bt.querySelectorAll('.button__bg'), 0.9, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4), delay: .9, 
      onComplete: function(){
        console.log('clicked = false;')
      },
      onOverwrite: function(){
        console.log('clicked = false; //overwrite')
      } 
    }, 0.6);

    for (var i = 0; i < real2_particleCount; i++) {
      var dir = i % 2 ? '-' : '+';
      var size = i < 2 ? 1 : getRandom2(0.2, 0.6);
      var r = i % 2 ? getRandom2(-1, 1)*i/2 : getRandom2(-1, 1)*i;

      TweenLite.set(real2_particles[i], { scale: size });
      TweenLite.to(real2_particles[i], 0.1, { scale: size, x: dir +'=25' });
      TweenLite.to(real2_particles[i], 0.6, { x: dir + 60, y: r*10, scale: 0, opacity: 0, ease: Power3.easeOut });
    }
      };




  // Define Bideo constructor on the global object
  global.Bideo = function () {

    // Plugin options
    this.opt = null;
    // The Video element
    this.videoEl = null;

    // Approximate Loading Rate
    //
    // The value will be a number like 0.8
    // which means to load 4 seconds of the video
    // it takes 5 seconds. If the number is super low
    // like 0.2 (regular 3g connections) then you can
    // decide whether to play the video or not.
    // This behaviour will be controller with
    // the `acceptableLoadingRate` option.
    this.approxLoadingRate = null;

    // Methods to which `this` will be bound
    this._resize = null;
    this._progress = null;

    // Time at which video is initialized
    this.startTime = null;

    this.onLoadCalled = false;

    // Initialize and setup the video in DOM`
    this.init = function (opt) {
      // If not set then set to an empty object
      this.opt = opt = opt || {};

      var self = this;

      self._resize = self.resize.bind(this);

      // Video element
      self.videoEl = opt.videoEl;

      // Meta data event
      self.videoEl.addEventListener('loadedmetadata', self._resize, false);

      // Fired when enough has been buffered to begin the video
      // self.videoEl.readyState === 4 (HAVE_ENOUGH_DATA)
      self.videoEl.addEventListener('canplay', function () {
        // Play the video when enough has been buffered
        //if (!self.opt.isMobile) {
          self.opt.onLoad && self.opt.onLoad();
          if (self.opt.autoplay !== false) self.videoEl.play();
           //self.videoEl.pause();
        }
      //}
      );

      // If resizing is required (resize video as window/container resizes)
      if (self.opt.resize) {
        global.addEventListener('resize', self._resize, false);
      }

      // Start time of video initialization
      this.startTime = (new Date()).getTime();

      this.pause = self.videoEl.pause();

      this.play = self.videoEl.play();


      // Create `source` for video
      this.opt.src.forEach(function (srcOb, i, arr) {
        var key
          , val
          , source = document.createElement('source');

        // Set all the attribute key=val supplied in `src` option
        for (key in srcOb) {
          if (srcOb.hasOwnProperty(key)) {
            val = srcOb[key];

            source.setAttribute(key, val);
          }
        }

        self.videoEl.appendChild(source);
      });

      //if (self.opt.isMobile) {
        if (self.opt.playButton) {
          self.opt.videoEl.addEventListener('timeupdate', function () {
            if (!self.onLoadCalled) {
              self.opt.onLoad && self.opt.onLoad();
              self.onLoadCalled = true;
            }
          });




          self.opt.playButton.addEventListener('click', function () {
            event.preventDefault();

var bv2y = document.getElementById('body');
var bv2yy = bv2y.scrollTop;
var bv2yz = document.getElementById('phone-videoEl');
//bv2yy = bv2y.height;
var rect = bv2yz.getBoundingClientRect();
console.log('bv2yz = ',rect.top);
console.log('body = ',bv2yy);
            self.opt.pauseButton.style.display = 'inline-block';
            console.log('currentTime = ', self.videoEl.currentTime)
            this.style.display = 'none';

            self.videoEl.play();
          }, false);

          self.opt.pauseButton.addEventListener('click', function () {
            event.preventDefault();

var bv2y = document.getElementById('body');
var bv2yy = bv2y.scrollTop;
var bv2yz = document.getElementById('phone-videoEl');
//bv2yy = bv2y.height;
var rect = bv2yz.getBoundingClientRect();
console.log('bv2yz = ',rect.top);
console.log('body = ',bv2yy);
            console.log('currentTime = ', self.videoEl.currentTime)
            this.style.display = 'none';
            self.opt.playButton.style.display = 'inline-block';

            self.videoEl.pause();
          }, false);
        }
      //}

      return;
    }

    // Called once video metadata is available
    //
    // Also called when window/container is resized
    this.resize = function () {
      
        var window_height = window.innerHeight;

        var window_width = window.innerWidth;

        var temp_w = Math.floor(window_width/10);
        var temp_h = Math.floor(window_height/10);

        var final_w = 1;
        var final_h = 1;

        rwd_box[0].style.display = "block";

        console.log('red');
        console.log(rwd_box[0].style.border = "1px solid red");

         waitForFinalEvent(function(){
          final_w = 100;
          final_h = 100;

           if (rwd_box) {
             console.log("rwd_box.style");
              console.log('blue');
              console.log(rwd_box[0].style.border = "1px solid blue");
             console.log(rwd_box[0].style.width = temp_string);
             console.log(rwd_box[0].style.height = temp_h + 'px');

             setTimeout(function () { rwd_box[0].style.display = "none"; }, 500);
           }
              console.log('final_w = ',final_w,' final_h = ', final_h);
        }, 500, "resize-call-#1");

        var temp_string = temp_w + 'px';
        console.log('temp_string = ', temp_string);

        //rwd_box.style.width = temp_string;
        console.log('rwd_box = ', rwd_box);
        console.log('bv = ', this.resize);
       // rwd_box.style.heightRatio = Math.floor(window_height/100);


        real2_animateHireMeButton();
        
      
      // IE/Edge still don't support object-fit: cover
      // 
      // use for IE browsers:
      if ('object-fit' in document.body.style) return;

      // Video's intrinsic dimensions
      var w = this.videoEl.videoWidth
        , h = this.videoEl.videoHeight;



      console.log('window width w = ', w);
      console.log('window height h = ', h);

      // Intrinsic ratio
      // Will be more than 1 if W > H and less if H > W
      var videoRatio = (w / h).toFixed(2);

      // Get the container DOM element and its styles
      //
      // Also calculate the min dimensions required (this will be
      // the container dimentions)
      var container = this.opt.container
        , containerStyles = global.getComputedStyle(container)
        , minW = parseInt( containerStyles.getPropertyValue('width') )
        , minH = parseInt( containerStyles.getPropertyValue('height') );

      // If !border-box then add paddings to width and height
      if (containerStyles.getPropertyValue('box-sizing') !== 'border-box') {
        var paddingTop = containerStyles.getPropertyValue('padding-top')
          , paddingBottom = containerStyles.getPropertyValue('padding-bottom')
          , paddingLeft = containerStyles.getPropertyValue('padding-left')
          , paddingRight = containerStyles.getPropertyValue('padding-right');

        paddingTop = parseInt(paddingTop);
        paddingBottom = parseInt(paddingBottom);
        paddingLeft = parseInt(paddingLeft);
        paddingRight = parseInt(paddingRight);

        minW += paddingLeft + paddingRight;
        minH += paddingTop + paddingBottom;
      }

      // What's the min:intrinsic dimensions
      //
      // The idea is to get which of the container dimension
      // has a higher value when compared with the equivalents
      // of the video. Imagine a 1200x700 container and
      // 1000x500 video. Then in order to find the right balance
      // and do minimum scaling, we have to find the dimension
      // with higher ratio.
      //
      // Ex: 1200/1000 = 1.2 and 700/500 = 1.4 - So it is best to
      // scale 500 to 700 and then calculate what should be the
      // right width. If we scale 1000 to 1200 then the height
      // will become 600 proportionately.
      var widthRatio = minW / w;
      var heightRatio = minH / h;

      // Whichever ratio is more, the scaling
      // has to be done over that dimension
      if (widthRatio > heightRatio) {
        var new_width = minW;
        var new_height = Math.ceil( new_width / videoRatio );
      }
      else {
        var new_height = minH;
        var new_width = Math.ceil( new_height * videoRatio );
      }

      this.videoEl.style.width = new_width + 'px';
      this.videoEl.style.height = new_height + 'px';
    };


  };


}(window));
