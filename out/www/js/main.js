

$(document).on("click", ".program_item", function () {
    var programName = $(this).text();
    console.log(programName);
});

let total = 10;
$("#send_lines").click(function () {
    $("#right_bar").empty();
    let lines = $("#lines").val().split(",");
    for (let line of lines) {
        let pos = (line - 1) / total * 100;
        $("#right_bar").append("<div class=\"rect\" style=\"top:" + pos + "%; height: " + (1 / total * 100) + "%\"></div>");
    }
});
