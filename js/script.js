$(document).ready(function () {
  //    gnb관련코드 //
  var gnb = $(".mainmenu");
  var dim = $(".header-dim");
  gnb.mouseenter(function () {
    dim.stop().fadeIn(200);
  });
  gnb.mouseleave(function () {
    dim.stop().fadeOut(200);
  });
});
// window.onload = function () {
// };
$(document).ready(function () {
  //    gnb관련코드 //
  var gnb = $(".mainmenu");
  var dim = $(".header-dim");
  gnb.mouseenter(function () {
    dim.stop().fadeIn(200);
  });
  gnb.mouseleave(function () {
    dim.stop().fadeOut(200);
  });
  // 메뉴관련
  var mainMenuLi = $(".mainmenu > li");
  var subMenu = $(".submenu");
  // mainMenuLi 주메뉴로 마우스 이동하는 경우 실행
  $.each(mainMenuLi, function (index, item) {
    $(this).mouseenter(function () {
      allDepth3.hide();
      // 모든 포커스 해제
      subMenuLi.removeClass("submenu_focus_link");
      // 서브 메뉴가 보여진다
      $(this).find(".submenu").addClass("submenu_focus");
      $(this).css("z-index", 999);
    });
    $(this).mouseleave(function () {
      // 서브메뉴 숨김
      $(this).find(".submenu").removeClass("submenu_focus");
    });
  });
  // subMenuLi
  $.each(subMenu, function () {});
  // subMenuLi
  var subMenuLi = $(".submenu > li");
  var allDepth3 = $(".submenu-3rd");
  // 절대로 나올 수 없는 값으로 설정해서 초기화에 사용
  var reIndex = -10000;
  // subMenu
  $.each(subMenuLi, function (index, item) {
    var aTag = $(this).find(" > a");
    var depth3 = $(this).find(".submenu-3rd");
    aTag.click(function (e) {
      if ($(this).hasClass("link")) {
        return;
      }
      // herf 막는다
      e.preventDefault();
      if (reIndex == index) {
        // 동일한 버튼을 눌렀을때
        // 이미 특정한 버튼을 선택한 상태에서 다시 해당 버튼을 선택했을때, 이미 선택된 상태이므로 추가적인 동작을 하지 않도록 방지하기 위해 사용
        // 현재 클릭한 버튼과 이전에 클릭한 버튼이 같은 경우에는 아무런 동작을 하지 않는것이 바람직
        // reIndex == index 조건이 필요하다
      } else {
        // 다른 버튼을 눌렀을때 일단 모든 서브메뉴들을 담는다.
        allDepth3.hide();
        reIndex = index;
      }
      // .submenu-3rd 보이게 한다.
      var nowDepth3 = depth3.css("display");
      if (nowDepth3 == "none") {
        //nowDepth3가 보이지 않는다면
        depth3.show();
        // 현재 많은 메뉴 중에 몇번째를 클릭 했는지 저장한다.
        reIndex = index;
        // 메뉴 포커스 유지
        subMenuLi.removeClass("submenu_focus_link");
        subMenuLi.eq(index).addClass("submenu_focus_link");
      } else {
        depth3.hide();
        subMenuLi.removeClass("submenu_focus_link");
      }
    });
  });
  // 상단 메뉴 처리관련
  var hTop = $(".header-top");
  var hTop_H = hTop.height();
  var hMiddle = $(".header-middle");
  var hMiddle_H = hMiddle.height();
  var hHeight = hTop_H + hMiddle_H;
  $(window).scroll(function () {
    // 스크롤 위치를 파악한다
    var scY = $(window).scrollTop();
    if (scY >= hHeight) {
      $(".header").addClass("h-fix");
      $(".content").addClass("h-fix-mt");
      $(".logo-gnb").addClass("h-show");
      $(".gnb").addClass("h-fix-gnb");
      // gotop 기능 추가 예정
    } else {
      $(".header").removeClass("h-fix");
      $(".content").removeClass("h-fix-mt");
      $(".logo-gnb").removeClass("h-show");
      $(".gnb").removeClass("h-fix-gnb");
      // gotop 기능 추가 예정
    }
  });
  // gnb 관련
  var gnb = $(".mainmenu");
  var dim = $(".header-dim");
  gnb.mouseenter(function () {
    dim.stop().fadeIn(800);
  });
  gnb.mouseleave(function () {
    dim.stop().fadeOut(800);
  });
  // swiper 슬라이드
  // content
  var sw_content = new Swiper(".sw-content", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    loopedSlides: 3,
  });
  // sw-notice
  var sw_notice = new Swiper(".sw-notice", {
    autoplay: {
      delay: 2000,
    },
    loop: true,
    navigation: {
      nextEl: ".sw-notice-next",
      prevEl: ".sw-notice-prev",
    },
    pagination: {
      el: ".sw-notice-pg",
      type: "fraction",
    },
  });
  // 일시 멈춤
  // ===================================
});
// window.onload = function () {
// };