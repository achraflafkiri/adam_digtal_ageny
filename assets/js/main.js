(function ($) {
  "use strict";

  $(document).ready(function () {
    /*****************************
     * Burger Icon
     *****************************/
    $(".burger-icon").click(function () {
      $(".navbar-nav").toggleClass("active");
    });

    /*****************************
     * Scrolling Header
     *****************************/
    $(window).scroll(function () {
      let scroll = $(this).scrollTop();
      if (scroll >= 120) {
        $("header").addClass("active");
      } else {
        $("header").removeClass("active");
      }
    });

    /*****************************
     * Drop Down Menu
     *****************************/
    $(".drop-down .nav-link").click(function () {
      $(".drop-down-menu").toggleClass("hidden");
    });

    /*****************************
     * Commons Variables
     *****************************/
    var $window = $(window),
      $body = $("body");

    /****************************
     * Preloader
     *****************************/
    $(".preloader").fadeOut(1200);

    /****************************
     * Sticky Menu
     *****************************/
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".sticky-header").removeClass("sticky");
      } else {
        $(".sticky-header").addClass("sticky");
      }
    });

    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".seperate-sticky-bar").removeClass("sticky");
      } else {
        $(".seperate-sticky-bar").addClass("sticky");
      }
    });

    /************************************************
     * Counting Animation
     ***********************************************/
    $(document).ready(function () {
      let nums = $(".nums .num");
      let section = $(".banner-count");
      let started = false; // Function Started ? No

      $(window).scroll(function () {
        if ($(this).scrollTop() >= section.offset().top) {
          if (!started) {
            nums.each(function () {
              startCount($(this));
            });
          }
          started = true;
        }
      });

      function startCount(el) {
        let goal = el.data("goal");
        let count = setInterval(() => {
          el.text(parseInt(el.text()) + 1);
          if (el.text() == goal) {
            clearInterval(count);
          }
        }, 2000 / goal);
      }
    });

    /************************************************
     * FAQ
     ***********************************************/
    (function ($) {
      $(function () {
        $(".js-ag-faq_title").on("click", function () {
          $(".js-ag-faq_title").not(this).next(".js-ag-faq_text").slideUp();
          $(this).next(".js-ag-faq_text").slideToggle();
        });
      });
    })(jQuery);

    /************************************************
     * Modal Search
     ***********************************************/
    $('a[href="#search"]').on("click", function (event) {
      event.preventDefault();
      $("#search").addClass("open");
      $('#search > form > input[type="search"]').focus();
    });

    $("#search, #search button.close").on("click", function (event) {
      if (event.target.className == "close") {
        $(this).removeClass("open");
      }
    });

    /*****************************
     * Off Canvas Function
     *****************************/
    (function () {
      var $offCanvasToggle = $(".offcanvas-toggle"),
        $offCanvas = $(".offcanvas"),
        $offCanvasOverlay = $(".offcanvas-overlay"),
        $mobileMenuToggle = $(".mobile-menu-toggle");
      $offCanvasToggle.on("click", function (e) {
        e.preventDefault();
        var $this = $(this),
          $target = $this.attr("href");
        $body.addClass("offcanvas-open");
        $($target).addClass("offcanvas-open");
        $offCanvasOverlay.fadeIn();
        if ($this.parent().hasClass("mobile-menu-toggle")) {
          $this.addClass("close");
        }
      });
      $(".offcanvas-close, .offcanvas-overlay").on("click", function (e) {
        e.preventDefault();
        $body.removeClass("offcanvas-open");
        $offCanvas.removeClass("offcanvas-open");
        $offCanvasOverlay.fadeOut();
        $mobileMenuToggle.find("a").removeClass("close");
      });
    })();

    /**************************
     * Offcanvas: Menu Content
     **************************/
    function mobileOffCanvasMenu() {
      var $offCanvasNav = $(".offcanvas-menu"),
        $offCanvasNavSubMenu = $offCanvasNav.find(".mobile-sub-menu");

      /*Add Toggle Button With Off Canvas Sub Menu*/
      $offCanvasNavSubMenu
        .parent()
        .prepend('<div class="offcanvas-menu-expand"></div>');

      /*Category Sub Menu Toggle*/
      $offCanvasNav.on("click", "li a, .offcanvas-menu-expand", function (e) {
        var $this = $(this);
        if (
          $this.attr("href") === "#" ||
          $this.hasClass("offcanvas-menu-expand")
        ) {
          e.preventDefault();
          if ($this.siblings("ul:visible").length) {
            $this.parent("li").removeClass("active");
            $this.siblings("ul").slideUp();
            $this.parent("li").find("li").removeClass("active");
            $this.parent("li").find("ul:visible").slideUp();
          } else {
            $this.parent("li").addClass("active");
            $this
              .closest("li")
              .siblings("li")
              .removeClass("active")
              .find("li")
              .removeClass("active");
            $this.closest("li").siblings("li").find("ul:visible").slideUp();
            $this.siblings("ul").slideDown();
          }
        }
      });
    }
    mobileOffCanvasMenu();

    /************************************************
     * Animate on Scroll
     ***********************************************/
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease",
    });
    window.addEventListener("load", AOS.refresh);
  });
})(jQuery);
