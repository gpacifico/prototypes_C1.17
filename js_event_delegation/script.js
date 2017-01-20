// Answer the questions here:

// - What do you think is going to happen?
    //I don't think it will show up in my console log.
// - What happened?
    //It did not show up in my console log.
// - Why?
    //Because the new button is a new DOM element created by jQuery and not in my original html, so the event handler I previously made is not attached to it.

//========== Write your code below ===========//
$(document).ready(function () {

    //Feature Set 1
    $("#list button").on("click", function () {
        console.log($(this).text());
    });

    //Feature Set 2
    var button = $("<li><button style='color: red'>Child Button 5</button></li>");
    $("#list").append(button);

    //Feature Set 3
    $("#list").on("click", "button", function () {
        console.log($(this).text());
    });

    //Additional Challenge
    var newButton = $("<li><button data-cheese = 'yellow'><a href='https://www.google.com/' target='_blank'>Cheese Button</a></button></li>");
    $("#list").append(newButton);
    $("#list").on("click", "button", function () {
        if($(event.target).attr("data-cheese") !== undefined) {
            console.log($(this).text());
        }
    });
});