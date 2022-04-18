$(document).ready(function() {
	$("a").click(function() {
        let title=$(this).attr("title");

        // edited code from activity 13 to fit 14
     $.ajax({
            type: "get",
            url: "json_files/" + title + ".json",
            beforeSend: function() {
                $("main").html("Loading...");
            },
            timeout: 10000,
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
                $("main").html("");
                $.each(data,function(){
                    $.each(this, function(key, value){
                        $("main").append(
                            "<h1>" + value.title + "</h1>" + 
                            "<h2>" + value.month + "</h2>" + 
                            "<h3>" + value.speaker + "</h3>" +
                            "<img src = " + value.image + ">" + 
                            "<p>" + value.text + "</p>" 
                        )
                    })
                })
            }
        });
    });
}); // end ready

