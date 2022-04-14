$(document).ready(function() 
{
    // preload the image for each link
    $("#image_list a").each(function() {
        let image = new Image();
        image.src = $(this).attr("href");
    });
    // set up the event handlers for each link
    $("#image_list a").click(function(event) {
        image = $(this).attr("href");
        let caption = $(this).attr("title");
        $("#caption").text(caption);
        $("#image").hide().fadeIn("1000").attr("src",image)
        // cancel the default action of each link
        event.preventDefault();
        });

    // move the focus to the first link
    $("li:first-child a").focus();

}); // end ready