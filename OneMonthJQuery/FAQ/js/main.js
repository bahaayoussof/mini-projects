$(".question").click(function () {
    $(this).next().fadeToggle("fast");
    $(this).children().toggleClass("collapse");
})