$(()=> {
  let mn = $(".el-header");
  let cnt = $(".content");
  let fixed = "mainnav-scrolled";
  let win = $(window);
  let logo = $(".logo");
  const speed = -.1;

  //toggles menu
  myFunction = x => {
    x.classList.toggle("is-active");
    $('body').toggleClass('open');
    mn.addClass(fixed);
  }

  if (win.scrollTop() <= (cnt.offset().top)) {
    logo.removeClass('visible');
    mn.removeClass(fixed);
  }else {
    mn.addClass(fixed);
    logo.addClass('visible');
  }

  $(document).scroll(function() {

    //nav not fixed  
    if (win.scrollTop() <= (cnt.offset().top)) {
      logo.removeClass('visible');
      mn.removeClass(fixed);

      //parallax effect for header
      $('#para').each(function(){
        $this= $(this);
        let y = window.pageYOffset;
        let elBackgrounPos = "50% " + (y * speed) + "px";  
        $this.css('background-position', elBackgrounPos);
      });  

      // let topDist = $(document).scrollTop();
      // $('#name').css('padding-top', (topDist/10)*5);      
    }
    //nav fixed
    if (win.scrollTop() >= (mn.offset().top)) {
      mn.addClass(fixed);
      logo.addClass('visible');
    }
  });
});