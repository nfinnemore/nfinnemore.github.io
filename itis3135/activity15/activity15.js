$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "facultyList.json",
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
                        "<img src = " + value.image + ">" +
                        "<h2>" + value.full_name + "</h1>" + 
                        "<h3>" + value.department + "</h2>" + 
                        "<p>" + value.bio + "</p>" 
                    )
                })
            })
        }
    });
});
