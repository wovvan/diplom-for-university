{{HEAD}}
<body class="index">
{{HEADER}}
[[YAMS? &get=`chunk` &from=`CONTENT-MAIN`]]
[[YAMS? &get=`chunk` &from=`FOOTER-MAIN`]]




<script src='js/TweenMax.min.js'></script>


<script>

  var plain1 = $('.plain3');
  var plain2 = $('.plain2');
  var plainshad = $('.plain3shad');
  var plain2shad = $('.plain2shad');
  var ship1 = $('.ship-swim');
  var shipshad = $('.shipshad');
  var shipshad2 = $('.shipshad2');
  var trainhd = $('.train-hd');
  var trainc = $('.train-c');
  var trainbc = $('.train-bc');
  var flag = $('.flags');
  var flag2 = $('.flags2');
  var flag3 = $('.flags3');
  var truckhd = $('.truck-hd');
  var truckc = $('.truck-c');
  var truckbc = $('.truck-bc');
  
  var truckhd2 = $('.truck2-hd');
  var truckc2 = $('.truck2-c');
  var truckbc2 = $('.truck2-bc');
  
  function resetavia() {
    plain1.removeAttr('style');
    plain2.removeAttr('style');
    plainshad.removeAttr('style');
    plain2shad.removeAttr('style');
    aviabind();
  }
  
  function resetship() {
    ship1.removeAttr('style');
    shipbind();
  }
  
  function resettrain() {
    trainhd.removeAttr('style');
    trainc.removeAttr('style');
    trainbc.removeAttr('style');
    trainbind();
  }
  
  function resettruck() {
    truckhd.removeAttr('style');
    truckc.removeAttr('style');
    truckbc.removeAttr('style');
    truckhd2.removeAttr('style');
    truckc2.removeAttr('style');
    truckbc2.removeAttr('style');
    truckbind();
  }
  
  function resetflag() {
    flag.removeAttr('style');
    flagbind();
  }
  
  function avia() {
    /*first plain*/
    TweenMax.to(plain1, 4, {css:{bezier:{curviness:0, values:[{x:0, y:0},  {x:720, y:-340}, ], autoRotate:25.5}}, ease:Power2.easeIn});
    TweenMax.to(plainshad, 4, {css:{bezier:{curviness:0, values:[{x:0, y:0},  {x:720, y:-340}, ], autoRotate:25.5}}, ease:Power2.easeIn});
    /*first plain assist*/
    TweenLite.to(plain1,2, {css:{scale:1.3}, delay: 2.6});
    TweenLite.to(plainshad,2, {css:{scale:1.15}, delay: 2.6});
    TweenLite.to(plain1,2, {css:{marginTop: -40}, delay: 2.6});
    /*second plain*/
    TweenMax.to(plain2shad, 8, {css:{bezier:{curviness:1, values:[{x:-250, y:100}, {x:-850, y:360},{x:-950, y:400}, {x:-1000, y:363}, {x:-950, y:330}], autoRotate:200}}, delay: 2 , ease:Power2.easeOut});
    TweenMax.to(plain2, 8, {css:{bezier:{curviness:1, values:[{x:-250, y:100}, {x:-850, y:360},{x:-950, y:400}, {x:-1000, y:363}, {x:-950, y:330}], autoRotate:200}}, delay: 2 , ease:Power2.easeOut, onComplete: resetavia});
    /*second plain assist*/
    TweenLite.to(plain2,0, {css:{marginTop: -40}, delay: 0});
    TweenLite.to(plain2,2, {css:{marginTop: 0}, delay: 3.5});
    TweenLite.to(plain2,0, {css:{scale:1.3}, delay: 0});
    TweenLite.to(plain2,1, {css:{scale:1}, delay: 4});
    TweenLite.to(plain2shad,0, {css:{scale:1.15}, delay: 0});
    TweenLite.to(plain2shad,1, {css:{scale:1}, delay: 4});
  }
  
  
  
  function ship() {
  
  
  
  function changebg() {
      function clears() {
        clearInterval(intship);
      }
        
      window.setTimeout(clears, 6000)
      var shipshads = [shipshad, shipshad2];
      var intship = window.setInterval(function(){
      
        shipshad.animate({opacity:0}, 500).delay(50).animate({opacity:1},500);
        shipshad2.animate({opacity:1}, 500).delay(50).animate({opacity:0},500);
        
      /*  shipshad.css({backgroundPosition: backc[ic]});
        ic =  Math.floor(Math.random() * (2 - 0 + 1)) + 0;*/
      }, 1050);
      
    }
    
    TweenMax.to(ship1, 10, {css:{bezier:{curviness:2, values:[{x:150, y:-150}, {x:300, y:0}, {x:150, y:200}, {x:35, y:200}, {x:0, y:0}], autoRotate:74}}, delay: 1 , ease:Power2.easeInOut, onComplete: resetship});
    
    TweenMax.to(shipshad, 10, {css:{bezier:{curviness:2, values:[{x:150, y:-150}, {x:300, y:0}, {x:150, y:200}, {x:35, y:200}, {x:0, y:0}], autoRotate:74}}, delay: 1 , ease:Power2.easeInOut});
    
    TweenMax.to(shipshad2, 10, {css:{bezier:{curviness:2, values:[{x:150, y:-150}, {x:300, y:0}, {x:150, y:200}, {x:35, y:200}, {x:0, y:0}], autoRotate:74}}, delay: 1 , ease:Power2.easeInOut});
    
    TweenMax.to(shipshad, 0.2, {css:{display: "none"}, delay: 1 , ease:Power2.easeInOut, repeat: 1, yoyo: true,onComplete: changebg});
    
    var ic = 0;
    var backc = ["0 0" , "0 -254px", "0 100%"];
    
    
     
    
    
    }
  
  function newtrain() {
    trainhd.removeAttr('style').css({marginLeft: -200, marginTop: -100});
    trainc.removeAttr('style').css({marginLeft: -100, marginTop: -120});
    trainbc.removeAttr('style').css({marginLeft: -20, marginTop: -116, display: "none"});
    
    TweenMax.to(trainhd, 5, {css:{bezier:{curviness:1, values:[{x:-50, y:25}, {x:-180, y:80}, {x:-295, y:104}], autoRotate:190}}, delay: 1 , ease:Power2.easeInOut});
    TweenMax.to(trainc, 5, {css:{bezier:{curviness:1, values:[{x:-170, y:78},{x:-298, y:125}], autoRotate:200}}, delay: 1 , ease:Power2.easeInOut});
    TweenMax.to(trainbc, 1, {css:{display: "block"}, delay: 3.5 , ease:Power2.easeInOut});
    TweenMax.to(trainbc, 5, {css:{bezier:{curviness:1, values:[{x:-285, y:120}], autoRotate:204}}, delay: 1 , ease:Power2.easeInOut, onComplete: resettrain});
    
  }
  
  function train() {
    TweenMax.to(trainhd, 5, {css:{bezier:{curviness:1, values:[{x:-190, y:20}, {x:-500, y:-25}, {x:-800, y:-250}], autoRotate:190}}, delay: 1 , ease:Power2.easeInOut});
    TweenMax.to(trainc, 5, {css:{bezier:{curviness:1, values:[{x:-150, y:35}, {x:-460, y:30}, {x:-650, y:-30}, {x:-810, y:-160}], autoRotate:197}}, delay: 1 , ease:Power2.easeInOut});
    TweenMax.to(trainbc, 5, {css:{bezier:{curviness:0.9, values:[{x:-110, y:40}, {x:-420, y:70}, {x:-650, y:45}, {x:-830, y:-25}], autoRotate:204}}, delay: 1 , ease:Power2.easeInOut, onComplete: newtrain});
  }

  function newtruck() {
    truckhd2.removeAttr('style').css({marginLeft: 202 + 130+90, marginTop: 300+200, top:643, backgroundImage: "url(images/truck-hd.png)"});
    truckc2.removeAttr('style').css({marginLeft: 222 + 130+90, marginTop: 300+200, top: 690, backgroundImage: "url(images/truck-c.png)"});
    truckbc2.removeAttr('style').css({marginLeft: 242 + 130+90, marginTop: 300+200, top: 737, backgroundImage: "url(images/truck-c.png)" });
  
    TweenMax.to(truckhd2, 4, {css:{bezier:{curviness:0, values:[{x:-135-90, y:-300-200}], autoRotate:115}}, delay: 0 , ease:Power2.easeOut, onComplete: resettruck});
    TweenMax.to(truckc2, 4, {css:{bezier:{curviness:0, values:[{x:-135-90, y:-300-200}], autoRotate:115}}, delay: 0 , ease:Power2.easeOut, onComplete: resettruck});
    TweenMax.to(truckbc2, 4, {css:{bezier:{curviness:0, values:[{x:-135-90, y:-300-200}], autoRotate:115}}, delay: 0 , ease:Power2.easeOut, onComplete: resettruck});
    
    
  }
  

  
    function pause() {
      TweenMax.pauseAll(true, true);
      truckbc.delay(1000).css({backgroundImage: "url(images/truck-c-g.png)"});
      truckc.delay(1000).css({backgroundImage: "url(images/truck-c-b.png)"});
      var intt = window.setInterval(function(){
          TweenMax.resumeAll(true, true);
      }, 1500);
      }
      
  function truck() {
    
    TweenMax.to(truckhd, 4, {css:{bezier:{curviness:0, values:[{x:-90, y:-180}], autoRotate:115}}, delay: 0 , ease:Power2.easeIn});
    TweenMax.to(truckhd, 8, {css:{bezier:{curviness:1, values:[{x:-120, y:-215}, {x:-230, y:-160}, {x:-280, y:-140}, {x:-265, y:-110}, {x:-250, y:-90}, {x:-135, y:-120}, {x:-90, y:-115}, {x:-70, y:-110}, {x:-20, y:0},  {x:20, y:100}, {x:65+2, y:200}], autoRotate:115}}, delay: 4 });
    
    TweenMax.to(truckc, 4.3, {css:{bezier:{curviness:0, values:[{x:-90-18, y:-180-47}], autoRotate:115}}, delay: 0 , ease:Power2.easeIn});
    TweenMax.to(truckc, 7.6, {css:{bezier:{curviness:1, values:[{x:-120-18, y:-215-47}, {x:-230-18, y:-160-47}, {x:-280-18, y:-140-47}, {x:-265-18, y:-110-47}, {x:-250-18, y:-90-47}, {x:-135-18, y:-120-47}, {x:-90-18, y:-115-47}, {x:-70-18, y:-110-47},{x:-20-18-18, y:0-47-47},  {x:20-18-18-3, y:100-47-47},  {x:65-18-18-1, y:200-47-47}], autoRotate:115}}, delay: 4.3 });
    
    TweenMax.to(truckbc, 4.6, {css:{bezier:{curviness:0, values:[{x:-90-18-18, y:-180-47-47}], autoRotate:115}}, delay: 0 , ease:Power2.easeIn});
    TweenMax.to(truckbc, 7.3, {css:{bezier:{curviness:1, values:[{x:-120-18-18, y:-215-47-47}, {x:-230-18-18, y:-160-47-47}, {x:-280-18-18, y:-140-47-47}, {x:-265-18-18, y:-110-47-47}, {x:-250-18-18, y:-90-47-47}, {x:-135-18-18, y:-120-47-47}, {x:-90-18-18, y:-115-47-47}, {x:-70-18-18, y:-110-47-47}, {x:-20-18-18-18-18, y:0-47-47-47-47},  {x:20-18-18-18-18-6, y:100-47-47-47-47}, {x:65-18-18-18-18-6, y:200-47-47-47-47}], autoRotate:115}}, delay: 4.6 });
    
    
    
    TweenMax.to(truckhd2, 4, {css:{bezier:{curviness:0, values:[{x:90+90, y:200+200}], autoRotate:295}}, delay: 0 , ease:Power2.easeIn});
    
    TweenMax.to(truckc2, 4, {css:{bezier:{curviness:0, values:[{x:90+90, y:200+200}], autoRotate:295}}, delay: 0 , ease:Power2.easeIn});
    
    TweenMax.to(truckbc2, 4, {css:{bezier:{curviness:0, values:[{x:90+90, y:200+200}], autoRotate:295}}, delay: 0 , ease:Power2.easeIn});
    
    /*TweenMax.to(truckc, 4.3, {css:{bezier:{curviness:0, values:[{x:-90-22, y:-180-47}], autoRotate:115}}, delay: 0 , ease:Power2.easeIn});
    TweenMax.to(truckc, 15.4, {css:{bezier:{curviness:0.5, values:[{x:-100-22, y:-200-47}, {x:-100-22, y:-215-47}, {x:-230-22, y:-180-47}, {x:-280-22, y:-175-47}, {x:-265-22, y:-110-47}, {x:-250-22, y:-90-47}, {x:-135-22, y:-120-47}, {x:-90-22, y:-115-47}, {x:-70-22, y:-110-47}, {x:-20-22, y:-47}, {x:270-22, y:700-47}], autoRotate:115}}, delay: 4.3 });
    
    TweenMax.to(truckbc, 4.6, {css:{bezier:{curviness:0, values:[{x:-90-44, y:-180-94}], autoRotate:115}}, delay: 0 , ease:Power2.easeIn});
    TweenMax.to(truckbc, 15.8, {css:{bezier:{curviness:1, values:[{x:-100-44, y:-200-94}, {x:-100-44, y:-215-94}, {x:-230-44, y:-180-94}, {x:-280-44, y:-175-94}, {x:-265-44, y:-110-94}, {x:-250-44, y:-90-94}, {x:-135-44, y:-120-94}, {x:-90-44, y:-115-94}, {x:-70-44, y:-110-94}, {x:-20-44, y:-94}, {x:270-44, y:700-94}], autoRotate:115}}, delay: 4.6});*/
    
    TweenMax.to(truckbc, 5.1, {css:{display: "block"}, delay: 0 , onComplete: pause});
    TweenMax.to(truckc, 10, {css:{display: "block"}, delay: 0 , onComplete: newtruck});
    }
    
  
    

  function flags() {
    var i = 0;
    var back = ["0 0" , "0 -189px", "0 100%"];
     var int = window.setInterval(function(){
      flag.css({backgroundPosition: back[i]});
      i =  Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    }, 100);
        
    window.setTimeout(clear, 4000)
     
    function clear() {
      clearInterval(int);
      resetflag();
    }

  }
  
  
  
  i =  Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    
  
  
  function aviabind() {
  $('.avia.serv-links').bind({
      mouseenter: function(e) {
      avia();
      },
      mouseleave: function(e) {
       $(this).unbind();
    }
    });
  }
  
  function shipbind() {
  $('.more.serv-links').bind({
      mouseenter: function(e) {
      ship();
      },
      mouseleave: function(e) {
       $(this).unbind();
    }
    });
  }
  
  function trainbind() {
  $('.jd.serv-links').bind({
      mouseenter: function(e) {
      train();
      },
      mouseleave: function(e) {
       $(this).unbind();
    }
    });
  }
  
  function flagbind() {
  $('.vama.serv-links').bind({
      mouseenter: function(e) {
      flags();
      },
      mouseleave: function(e) {
       $(this).unbind();
      }
    });
  }
  
  function truckbind() {
  $('.avto.serv-links').bind({
      mouseenter: function(e) {
      truck();
      },
      mouseleave: function(e) {
       $(this).unbind();
      }
    });
  }
  
  aviabind();
  shipbind();
  trainbind();
  flagbind();
  truckbind();
</script>
</body>
</html>