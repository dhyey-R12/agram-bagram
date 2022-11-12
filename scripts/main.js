"use strict";

//REGISTER GSAP PLUGINS
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  start: 'top -130',
  end: 99999,
  toggleClass: {className: 'resize-header', targets: 'header'}
});

gsap.from('.anim-nav', {
    y: -30,
    opacity: 0,
    duration: 0.5,
	stagger: 0.2
});

gsap.from('.anim-hero-text', {
	delay:0.5,
    y: 16,
    opacity: 0,
    duration: 0.8,
	stagger: 0.2
});

let page_container = document.querySelector('[data-scroll-container]');
//// change background color:
if ($("[data-color]").length) {
	$("[data-color]").each(function() {
		let _this = this;
		let color = $(_this).attr("data-color");		
	 	ScrollTrigger.create({
			trigger:  $(_this),
			start: "top center",
			end: "bottom 50%",
			scrub: 0.1,
			ease: "none",
			//markers: true,
			invalidateOnRefresh: true,
			onEnter: () => gsap.to("body", { background: color }),
			onLeave: () => gsap.to("body", { background: color }),
			onLeaveBack: () => gsap.to("body", { background: color }),
			onEnterBack: () => gsap.to("body", { background: color })
		  });
	});
	
}


const items = document.querySelectorAll('.service-name')

items.forEach((el) => {
  const image = el.querySelector('img')
  
  el.addEventListener('mouseenter', (e) => {
    gsap.to(image, { autoAlpha: 1 })
  })
  
   el.addEventListener('mouseleave', (e) => {
    gsap.to(image, { autoAlpha: 0 })
  })
  
  el.addEventListener('mousemove', (e) => {
     gsap.set(image, { x: e.offsetX - 200, y: e.offsetY - 50})
  })
})



//FadeIn
let fadeIn = document.querySelectorAll('.fade-in');
fadeIn.forEach( fade => {
let tl = gsap.timeline({
	scrollTrigger: {
	trigger: fade,
	start: "top bottom-=20%",
	toggleActions: "restart none none reverse",
	//markers:true,
	}
});

tl.set(fade, {autoAlpha: 1});

tl.from(fade, 1, {
	yPercent: 30,
	opacity:0,
	stagger: 0.5,
	ease: Power3.out,		
	});
});



//Image masks
let masks = document.querySelectorAll('.img-mask');

masks.forEach( mask => {
    let image = mask.querySelector('img');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: mask,
            toggleActions: "play none none reverse"
        }
    });

    tl.set(mask, {autoAlpha: 1});

    tl.from(mask, 1.5, {
        xPercent: -100,
        ease: Power2.out
    });
    tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.1,
        delay: -1.5,
        ease: Power2.out
    });
})





// ===========================================================
// CURSOR FOLLOWER
var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    TweenMax.set(follower, {
        css: {    
        left: posX - 12,
        top: posY - 12
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(".cursor-project").on("mouseenter", function() {
    follower.addClass("active-project");
});
$(".cursor-project").on("mouseleave", function() {
    follower.removeClass("active-project");
});

$(".cursor-more").on("mouseenter", function() {
    follower.addClass("active-more");
});
$(".cursor-more").on("mouseleave", function() {
    follower.removeClass("active-more");
});
$(".cursor-intro").on("mouseenter", function() {
    follower.addClass("active-intro");
});
$(".cursor-intro").on("mouseleave", function() {
    follower.removeClass("active-intro");
})
$(".cursor-intro2").on("mouseenter", function() {
    follower.addClass("active-intro2");
});
$(".cursor-intro2").on("mouseleave", function() {
    follower.removeClass("active-intro2");
})

// END CURSOR FOLLOWER


if(window.innerWidth > 1000){
	let imgcard = document.querySelectorAll(".img-container > div");
	gsap.from(imgcard[0], {
		scrollTrigger:{
			trigger: imgcard[0], 
			scroller: "body", 
			// end: "bottom 0", 
			// ease:  "Power0.easeNone", 
			scrub: true}, 
			y: "-18%", 
			duration: 2.8,
			rotate:"-18deg"
	})
	gsap.from(imgcard[1], {
		scrollTrigger:{
			trigger: imgcard[1], 
			scroller: "body", 
			// end: "bottom 0",
			// ease:  "Power0.easeNone",  
			scrub: true
			}, 
			y: "-12%", 
			duration: 2.8,
			rotate:"-10deg"
	})
	
	gsap.from(imgcard[2], {
		scrollTrigger:{
			trigger: imgcard[2], 
			scroller: "body", 
			// end: "bottom 0", 
			// ease:  "Power0.easeNone",  
			scrub: true
			}, 
			y: "-6%", 
			duration: 2.8,
			rotate:"-5deg"
	})
	

}

if(window.innerWidth < 1000){
            let imgcard = document.querySelectorAll(".img-container > div");
            gsap.from(imgcard[0], {scrollTrigger:{trigger: imgcard[0], scroller: "body", end: "bottom 0", scrub: true}, y: "-40%",rotate:"-3deg"})
            gsap.from(imgcard[1], {scrollTrigger:{trigger: imgcard[1], scroller: "body", end: "bottom 0", ease:  "Power0.easeNone",  scrub: true}, y: "-50%"})
            gsap.from(imgcard[2], {scrollTrigger:{trigger: imgcard[2], scroller: "body", end: "bottom 0", ease:  "Power0.easeNone",  scrub: true}, y: "-12%",rotate:"-3deg"})
        }


// Mobile Menu
$(document).ready(function(){
// Mobile Nav
$('#mobile-nav').prepend('<div id="menu-icon"><span></span></div>');
	/* toggle nav */
	$("#menu-icon").on("click", function(){
		$(".mnav").slideToggle();
		$(this).toggleClass("active");
});


// SubMenu
$(function() {
	$('.subMenu').hide();
		$('.toggle a').click(function(e){
			if($(this).parent().hasClass('current')) {
			$(this).parent()
			.removeClass('current')
			.next('.subMenu').slideUp();
		} else {
		$(document).find('.current')
			.removeClass('current')
			.next('.subMenu').slideUp();
		$(this).parent()
			.addClass('current')
			.next('.subMenu').slideDown();
		}
	e.preventDefault();
	});
}); 
// End Navigation	

});




 