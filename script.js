// Let's use the on() method that will allow us to attach some event handlers
// For the beginning let's try to see the difference between on() method and click() method


// We will consider each example separately. To see how it works , you just need to delete the comments signs /**/

/*
$(document).ready(function() {
    $("h1").dblclick(function () {
        $(this).css("background-color", "yellow");
    });
});
*/

/*
$(document).ready(function() {
    $("h1").on("click", function() {
        $(this).css("background-color", "blue");
    });
});
*/

// Now, we'll use the on() method with several event handlers

$(document).ready(function() {
    $("h1").on({
        mouseenter: function() {
            $(this).css("background-color", "red");
        },
        mouseleave: function() {
            $(this).css("background-color", "yellow");
        }
    });
});