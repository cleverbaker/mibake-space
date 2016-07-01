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









}());
