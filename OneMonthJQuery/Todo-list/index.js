$(document).ready(function () {
    $("#list-items").html(localStorage.getItem("listItems"));
    $(".add-items").submit(function (e) {
        e.preventDefault();

        let item = $("#todo-list-item").val();

        var url = '/dance.gif';

        var image = "<img src=" + url + "></img>";


        if (item) {
            if (item == "dance") {
                $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + image + "<a class='remove'>x</a><hr></li>");
                localStorage.setItem("listItems", $("#list-items").html());
                $("#todo-list-item").val("");
            }
            else {
                $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
                localStorage.setItem("listItems", $("#list-items").html());
                $("#todo-list-item").val("");
            }
        }
    });

    $(document).on("change", ".checkbox", function () {
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked");
        }
        else {
            $(this).attr("checked", "checked");
        }
        $(this).parent().toggleClass("completed");
        localStorage.setItem("listItems", $("#list-items").html());
    })

    $(document).on("click", ".remove", function () {
        $(this).parent().fadeOut("slow").remove();
        localStorage.setItem("listItems", $("#list-items").html());
    })

});
