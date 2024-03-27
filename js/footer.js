$(document).ready(function () {
  // 하단 펼침목록
  var linkListBt = $(".link-list-bt");
  var linkSiteWrap = $(".link-site-wrap");
  linkListBt.click(function (e) {
    e.preventDefault();
    // 아래 영역으로 클릭된 정보를 전달하지 않는다.
    e.stopPropagation();
    linkSiteWrap.toggleClass("link-site-wrap-on");
  });
  $("body").click(function () {
    linkSiteWrap.removeClass("link-site-wrap-on");
  });
});
