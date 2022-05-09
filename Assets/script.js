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

//Function when save button is clicked, items are stored in local storage//

saveBtn.on("click",function() {

    //siblings collect all the information within the same parent//

    var time = $(this).siblings(".hour").text();

    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);


});

//Function for when the page is refreshed the text remains//

function planner() {

    $(".hour").each(function() {

        var currentHour = $(this).text();

        var currentPlan = localStorage.getItem(currentHour);

        if (currentPlan !==null) {

            $(this).siblings(".plan").val(currentPlan);
        }

    });
}

//call functions//

timeBlockColor();

planner();


