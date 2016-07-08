! function ($, undefined) {
    $(document).ready(function(){
        $("#bump-slidenav img").click(function(){
            $("#bump-slideshow div").css("background-image", "url('" + this.src + "')");
            $("#bump-slideshow img").src = this.src;
            $("#bump-slidenav img").removeClass('bump-slide-selected');
            $(this).addClass('bump-slide-selected');
        }); 
    });

}(jQuery);