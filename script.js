// created time variable
var timeobject = setInterval(displayclock, 1000);
// created a function to display the time and date
function displayclock (){
    var currentday = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentday").text(currentday);
}
// created a function that will save the data in the textArea to local storage
$(".btn-primary").on("click", function (){
    var timeblock = $(this).attr("id").split("-")[0];
    var userdata = $(`#${timeblock}-text`).val();
    console.log(timeblock, userdata);
    localStorage.setItem(timeblock, userdata);
})
// created a variable defining what time it is
var currenttimeblock = moment().hour();
// created a for loop to change the color of the textArea's depending on the time of day
for (let i = 9; i <= 17; i++){
    $(`#${i}-text`).val(localStorage.getItem(i));
    if (currenttimeblock < i){
        $(`#${i}-text`).addClass("bg-danger");
    }
    else if (currenttimeblock === i){
        $(`#${i}-text`).addClass("bg-warning");
    }
    else {
        $(`#${i}-text`).addClass("bg-info");
    }
}