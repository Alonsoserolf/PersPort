$(()=> {
  let mn = $(".el-header");
  let cnt = $(".content");
  let fixed = "mainnav-scrolled";
  let win = $(window);
  let logo = $(".logo");
  const speed = .2;


  $(document).scroll(function() {

    //nav not fixed  
    if (win.scrollTop() <= (cnt.offset().top)) {
      // logo.css('visibility', 'hidden' );
      // logo.fadeOut(10);
      logo.removeClass('visible');
      mn.removeClass(fixed);

      //parallax effect for header
      $('#para').each(function(){
        $this= $(this);
        let y = window.pageYOffset;
        let elBackgrounPos = "50% " + (y * speed) + "px";  
        $this.css('background-position', elBackgrounPos);
      });  

      let topDist = $(document).scrollTop();
      $('#name').css('padding-top', (topDist/10)*5);      
    }
        //nav fixed
    if (win.scrollTop() >= (mn.offset().top)) {
      mn.addClass(fixed);
      logo.addClass('visible');
      // logo.fadeIn(200);
      // logo.css('visibility', 'visible' );

    }
  });
});