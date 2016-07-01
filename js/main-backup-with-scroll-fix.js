(function () {

  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#videoEl'),

    // Container element
    container: document.querySelector('bg-video'),

    // Resize
    resize: true,

    autoplay: true,

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
      document.querySelector('#video_cover').style.display = 'none';
      console.log('initial video frame..');
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

    autoplay: true,

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
      document.querySelector('#video_cover').style.display = 'none';
      console.log('initial video frame..');
    }
  });









// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

var last_known_scroll_position = 0;
var container_position = 0;
var ticking = false;

var bv2y = document.getElementById('phone-videoEl');
var section1 = document.getElementById('pattern-bg');
//bv2yy = bv2y.height;
var rect = bv2y.getBoundingClientRect();
var phone_top_position = rect.top;

var handsEl = document.getElementById('hands');
var hands_top_position = handsEl.getBoundingClientRect();
handsEl.setAttribute("style", "opacity: 0;");

console.log('bv2yy = ',rect.top);

var temp1 = null;
var temp2 = null;
var paused = false;
var fixed_set = false;
var post_fixed = false;
var keep_large_paused = false;
var small_video_is_home = true;

var fixed_height = 0;
var fixed_x = 0;

var original_section_y = 0;
var new_section_y = 0;

var start_fixed_position = 650;

var hands_up = false;
var hands_up_scroll_start_position = 907;

function doSomething(scroll_pos) {
  // do something with the scroll position
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  container_position = bv2y.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      //doSomething(last_known_scroll_position);

        console.log('last_known_scroll_position = ',last_known_scroll_position);
        console.log('container_position = ',container_position);
      if (last_known_scroll_position > start_fixed_position && last_known_scroll_position < 1700){


                  if (post_fixed) {
                    bv2.videoEl.currentTime = bv.videoEl.currentTime;
                    //bv.videoEl.pause();

                  bv.videoEl.addEventListener("timeupdate", function() {
                    if (paused) {
                    //bv.videoEl.pause();
                    }}, false);

                    keep_large_paused = true;
                    post_fixed = false;
                  }
                  else if (keep_large_paused) {
                  //bv2.videoEl.play();
                    
                  }
                  else {

                  //bv.videoEl.currentTime = bv2.videoEl.currentTime;
                  bv.videoEl.play();
                  bv2.videoEl.play();

                    
                  }


        if (post_fixed) {
          //bv.videoEl.pause();
        }

        paused = false;

        rect = bv2y.getBoundingClientRect();


        console.log('fired \n', temp1, '\n', temp2);

        console.log('fried \n', bv.videoEl.currentTime, '\n', bv2.videoEl.currentTime);

        if (!fixed_set) {
        rect = bv2y.getBoundingClientRect();
        fixed_height = rect.top;
        fixed_x = rect.left;

          bv2y.parentElement.parentElement.setAttribute("style", "position: fixed; top: "+fixed_height+"px;");
          rect = section1.getBoundingClientRect();
          temp1 = rect.top;
          original_section_y = temp1;
          console.log('original_section_y = ',original_section_y);

          small_video_is_home = false;

        fixed_set = true;
        }
        else {
          if (!hands_up_scroll_start_position && last_known_scroll_position >= hands_up_scroll_start_position) {
            handsEl.setAttribute("style", "opacity: 1;");
            hands_up_scroll_start_position = true;
          }
        }
       }

        if (last_known_scroll_position <= start_fixed_position && fixed_set){

          if (!small_video_is_home) {
            rect = section1.getBoundingClientRect();
            new_section_y = rect.top;
            temp2 = original_section_y - new_section_y;
            temp2 = 0 - new_section_y + fixed_height;

            bv2y.parentElement.parentElement.setAttribute("style", "position: absolute; top: "+temp2+"px;");
            small_video_is_home = true;
            fixed_set = false;
            //bv.videoEl.currentTime = bv2.videoEl.currentTime;
            //bv2.videoEl.pause();
            //bv.videoEl.pause();
          }

/*
                  paused = true;

                  bv.videoEl.currentTime = temp2;

                  bv.videoEl.pause();

                  bv.videoEl.addEventListener("timeupdate", function() {
                    if (paused) {
                    bv.videoEl.pause();
                    }}, false);
*/

        }

        if (last_known_scroll_position > 1700){

          rect = section1.getBoundingClientRect();
          new_section_y = rect.top;
           temp2 = original_section_y - new_section_y;
           temp2 = 0 - new_section_y + fixed_height;

           if (!post_fixed) {
             bv2y.parentElement.parentElement.setAttribute("style", "position: absolute; top: "+temp2+"px;");
             post_fixed = true;

              bv2.videoEl.currentTime = bv.videoEl.currentTime;
           }

          fixed_set = false;

                  paused = true;
                 // bv.videoEl.pause();
                 // bv2.videoEl.pause();

                  temp1 = bv.videoEl.currentTime;
                  temp2 = bv2.videoEl.currentTime;
                  bv.videoEl.currentTime = temp2;
                  bv.videoEl.play();
                  bv2.videoEl.currentTime = bv.videoEl.currentTime;
                //  bv2.videoEl.pause();
                //  bv.videoEl.pause();

                  bv.videoEl.addEventListener("timeupdate", function() {
                    if (paused) {
                  //  bv.videoEl.pause();
                    }}, false);

        }

      ticking = false;

    });
  }
  ticking = true;
});


}());
