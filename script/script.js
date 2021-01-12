$(function() {

    $("body").on("click", "#hamburger", function() {
        $(this).css("display", "none");
        $("#close").css("display", "block");
        $("nav").fadeIn(300, function(){
            $(this).fadeIn();
        });
    });

    $("body").on("click", "#close", function() {
        $(this).css("display", "none");
        $("#hamburger").css("display", "block");
        $("nav").fadeOut(300, function(){
            $(this).fadeOut();
        });
    });
});