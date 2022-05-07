function currentToday() {
    let today = moment();
    //Dispaly the date and time
    $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss"));

}

function checkTime() {
    let now = moment().format("kk");
    //Compare the current time and the time on each row
    $(".time-block").each(function () {
         parseInt($(this).data("hour"));

        //Lable it is past if current time number is bigger
        if (now > parseInt($(this).data("hour"))) {
            $(this).addClass("past");
        }
        //Lable it is present if they are equal 
        else if (now == parseInt($(this).data("hour"))) {;
            $(this).addClass("present");
        }//Lable it is future if current time number is lower
        else {
            $(this).addClass("future");

        }
    })
}

setInterval(currentToday);
checkTime();

//Dispaly the description accounding to the time on each row
//Get information from local storage
$("#8AM .description").val(localStorage.getItem("time-08"));
$("#9AM .description").val(localStorage.getItem("time-09"));
$("#10AM .description").val(localStorage.getItem("time-10"));
$("#11AM .description").val(localStorage.getItem("time-11"));
$("#12AM .description").val(localStorage.getItem("time-12"));
$("#1PM .description").val(localStorage.getItem("time-13"));
$("#2PM .description").val(localStorage.getItem("time-14"));
$("#3PM .description").val(localStorage.getItem("time-15"));
$("#4PM .description").val(localStorage.getItem("time-16"));
$("#5PM .description").val(localStorage.getItem("time-17"));

//function for saving input in local storage
function handleFormSubmit(event) {
    event.preventDefault();

    let text = $(this).siblings("textarea");
 
    let time = $(this).parent().data("hour");

    localStorage.setItem("time-" + time, text.val());
}

$(".saveBtn").on("click", handleFormSubmit);


