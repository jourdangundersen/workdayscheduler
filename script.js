var currentday = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentday").text(currentday);
console.log("javascript file", currentday);
$(".btn-primary").on("click", function (){
    var timeblock = $(this).attr("id").split("-")[0];
    var userdata = $(`#${timeblock}-text`).val();
    console.log(timeblock, userdata);
    localStorage.setItem(timeblock, userdata);
})