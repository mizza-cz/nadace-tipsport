$(".helps-detail .tab").on("click", function (event) {
  var id = $(this).attr("data-id");
  $(".helps-detail")
    .find(".helps-detail__wrap")
    .removeClass("tab-active")
    .hide();
  $(".helps-detail .helps-detail__tabs").find(".tab").removeClass("active");
  $(this).addClass("active");
  $("#" + id)
    .addClass("tab-active")
    .fadeIn();
  return false;
});
