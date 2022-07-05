// home screen entry animation
$(function () {
  $("#header_h1").delay(2000).fadeTo(2000, 1);
  $("#header_h4").delay(3000).fadeTo(2000, 1);
  $("svg").delay(5000).fadeTo(100, 1);
  $("svg").delay(10).fadeTo(10, 0);
  $("svg").delay(10).fadeTo(10, 1);
  $("svg").delay(10).fadeTo(10, 0);
  $("svg").delay(10).fadeTo(30, 1);
  $("svg").delay(30).fadeTo(10, 0);
});
// home screen hover animations
$(function () {
  $("#img1").hover(
    function () {
      $(this).addClass("active");
    },
    function () {
      $(this).removeClass("active");
    }
  );
  $("#img2").hover(
    function () {
      $(this).addClass("active");
    },
    function () {
      $(this).removeClass("active");
    }
  );

  //nav hover animations
  $("#homeLink").hover(
    function () {
      $(".underlineHome").stop().animate({ width: "40px" });
      $(this).stop().animate({ "font-size": "1.7rem" });
    },
    function () {
      $(".underlineHome").stop().animate({ width: "0px" });
      $(this).stop().animate({ "font-size": "1.3rem" });
    }
  );
  $("#aboutLink").hover(
    function () {
      $(".underlineAbout").stop().animate({ width: "40px" });
      $(this).stop().animate({ "font-size": "1.7rem" });
    },
    function () {
      $(".underlineAbout").stop().animate({ width: "0px" });
      $(this).stop().animate({ "font-size": "1.3rem" });
    }
  );
  $("#galleryLink").hover(
    function () {
      $(".underlineGallery").stop().animate({ width: "40px" });
      $(this).stop().animate({ "font-size": "1.7rem" });
    },
    function () {
      $(".underlineGallery").stop().animate({ width: "0px" });
      $(this).stop().animate({ "font-size": "1.3rem" });
    }
  );
  $("#contactLink").hover(
    function () {
      $(".underlineContact").stop().animate({ width: "40px" });
      $(this).stop().animate({ "font-size": "1.7rem" });
    },
    function () {
      $(".underlineContact").stop().animate({ width: "0px" });
      $(this).stop().animate({ "font-size": "1.3rem" });
    }
  );
});
//about
//slideshow
$(function () {
  //files
  const images = [
    "./img/bootstrap.png",
    "./img/gsap.png",
    "./img/html.png",
    "./img/jquery.png",
    "./img/react.png",
    "./img/tech_academy.png",
    "./img/sql.png",
    "./img/javascript.png",
    "./img/tech_academy.png",
    "./img/csharp.png",
  ];
  const galleryImage = $(".img_container").find("img").first();
  var i = 0;
  setInterval(function () {
    i = (i + 1) % images.length; //secuence 0,1,2,0,1,2...

    galleryImage.fadeOut(function () {
      //callback function, when the img compleetly faded out
      $(this).attr("src", images[i]);
      $(this).fadeIn();
    });
  }, 3000);
});
//cards

$(function () {
  $(".card1")
    .stop()
    .mouseenter(function () {
      $(".top1").stop().animate({ left: "-100%" }, 600),
        $(".right1").stop().animate({ top: "100%" }, 600),
        $(".bottom1").stop().animate({ left: "100%" }, 600),
        $(".left1").stop().animate({ top: "-100%" }, 600);
      $(".card1").css({ transform: "scale(1.1)" }, 600);
    });
  $(".card1")
    .stop()
    .mouseleave(function () {
      $(".top1").stop().animate({ left: "100%" }, 600),
        $(".right1").stop().animate({ top: "-100%" }, 600),
        $(".bottom1").stop().animate({ left: "-100%" }, 600),
        $(".left1").stop().animate({ top: "100%" }, 600);
      $(".card1").css({ transform: "scale(1)" }, 600);
    });
  $(".card2")
    .stop()
    .mouseenter(function () {
      $(".top2").stop().animate({ left: "-100%" }, 600),
        $(".right2").stop().animate({ top: "100%" }, 600),
        $(".bottom2").stop().animate({ left: "100%" }, 600),
        $(".left2").stop().animate({ top: "-100%" }, 600);
      $(".card2").css({ transform: "scale(1.1)" }, 600);
    });
  $(".card2")
    .stop()
    .mouseleave(function () {
      $(".top2").stop().animate({ left: "100%" }, 600),
        $(".right2").stop().animate({ top: "-100%" }, 600),
        $(".bottom2").stop().animate({ left: "-100%" }, 600),
        $(".left2").stop().animate({ top: "100%" }, 600);
      $(".card2").css({ transform: "scale(1)" }, 600);
    });
  $(".card3")
    .stop()
    .mouseenter(function () {
      $(".top3").stop().animate({ left: "-100%" }, 600),
        $(".right3").stop().animate({ top: "100%" }, 600),
        $(".bottom3").stop().animate({ left: "100%" }, 600),
        $(".left3").stop().animate({ top: "-100%" }, 600);
      $(".card3").css({ transform: "scale(1.1)" }, 600);
    });
  $(".card3")
    .stop()
    .mouseleave(function () {
      $(".top3").stop().animate({ left: "100%" }, 600),
        $(".right3").stop().animate({ top: "-100%" }, 600),
        $(".bottom3").stop().animate({ left: "-100%" }, 600),
        $(".left3").stop().animate({ top: "100%" }, 600);
      $(".card3").css({ transform: "scale(1)" }, 600);
    });
});
// gallery

let counter = 0;
$(function () {
  const counterCheck = () => {
    if (counter <= 0) {
      $(".left").css({
        "pointer-events": "none",
        color: "transparent",
      });
    } else {
      $(".left").css({
        "pointer-events": "all",
        color: "white",
      });
    }
    if (counter >= 2) {
      $(".right").css({
        "pointer-events": "none",
        color: "transparent",
      });
    } else {
      $(".right").css({
        "pointer-events": "all",
        color: "white",
      });
    }
  };
  counterCheck();
  $(".left").on("click", function () {
    counter = counter - 1;
    counterCheck();
    $(".gallery").stop().animate({ left: "+=100%" }, 700);
  });
  $(".right").on("click", function () {
    counter = counter + 1;
    counterCheck();
    $(".gallery").stop().animate({ left: "-=100%" }, 700);
  });
});
//gallery slides

//is this touch device?
const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

if (isTouchDevice) {
  $(".top_cover").css("display", "none");
  $(".bottom_cover").css("display", "none");
} else {
  //if not touch, additional animation
  const imgGalleryContainers = $(".slide_image_container");
  $(imgGalleryContainers).mouseenter(function (event) {
    $(event.target).stop().slideUp();
    $(event.target).siblings(".top_cover").stop().slideUp();
    $(event.target).siblings(".bottom_cover").stop().slideUp();
  });
  $(imgGalleryContainers).mouseleave(function (event) {
    $(event.target).stop().slideDown();
    $(event.target).siblings(".top_cover").stop().slideDown();
    $(event.target).siblings(".bottom_cover").stop().slideDown();
  });
}
// gallery img fullscreen

const imgContainer = $(".slide_image_container");
const images = $(".slide_image_container");
$(imgContainer).on("click", function (event) {
  const Img = event.target;
  const ImgSrc = $(Img).attr("src");
  $(".fullScrImg").stop().fadeIn(800);
  $(".fullScrImg").css("pointer-events", "all");
  $("#image_full_screen").attr("src", ImgSrc);
});
$(".fullScrImg").on("click", function () {
  $(this).css("pointer-events", "none");
  $(this).stop().fadeOut(800);
});

//contact
const contactForm = $("#contact");
const contactBtn = $("#contact_button");
const closeForm = $("#close_form");
$(contactForm).slideUp();
$(contactBtn).on("click", function () {
  $(contactForm).slideToggle();
});
$(closeForm).on("click", function () {
  $(contactForm).slideUp();
});
