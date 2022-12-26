$(function () {
    var dialog = $("#dialog").dialog({
        autoOpen: false,
        draggable: true,
        resizable: true,
        show: "fade",
        hide: "fade",
        width: 400,
        height: 400,
    });

    $("#opener").on("click", function () {
        dialog.dialog("open");
    });

    $("#closer").on("click", function () {
        dialog.dialog("close");
    });
});

$(function () {
    var umumDialog = $("#umumDialog").dialog({
        autoOpen: false,
        draggable: true,
        resizable: true,
        show: "fade",
        hide: "fade",
        width: 400,
        height: 400,
    });

    $("#umumOpen").on("click", function () {
        umumDialog.dialog("open");
    });
    $("#umumCloser").on("click", function () {
        umumDialog.dialog("close");
    });
});


  

  