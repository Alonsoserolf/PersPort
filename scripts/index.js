$(()=> {
  var mn = $(".el-header");
  var cnt = $(".content");
  var fixed = "mainnav-scrolled";
  var win = $(window);
  const speed = .2;

  $(document).scroll(function() {

    //nav not fixed  
    if (win.scrollTop() <= (cnt.offset().top)) {

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
    }
  });
});