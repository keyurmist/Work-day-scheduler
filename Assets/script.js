//Declared variables//

var saveBtn = $(".saveBtn");

//Function for the current day//

$("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

//Function for changing colour whether time is past, present or future//

function timeBlockColor() {

    var hour = moment().hours();

    $(".time-block").each(function() {

        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addclass("future");

        } else if (currentHour === hour) {
            $(this).addClass("present");

        } else {$(this).addClass("past");
    }
    })
};

timeBlockColor();


