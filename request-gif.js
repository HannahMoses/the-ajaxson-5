// request-gif.js edited On TuesApr 11 2017
$(document).ready(function() {
    $("#form-gif-request").submit(function(event){
        event.preventDefault();
        fetchAndDisplayGif();
    });
});
function fetchAndDisplayGif() {
    var searchQuery = "tag1"; // TODO should be e.g. "dance"
    var usrreq = document.getElementsByName("tag1")[0].value;
    var robot = document.getElementsByName("tag")[0].value;
    if (robot == 5){
    $("#userreq").append(usrreq);
    var params = {
        api_key: "dc6zaTOxFJmzC",
        tag : usrreq // TODO should be e.g. "jackson 5 dance"
    };


    $.ajax({
        url: "https://api.giphy.com/v1/gifs/random", // TODO where should this request be sent?
        data: params, // attach those extra parameters onto the request
        success: function(response) {
            console.log("we received a response!");
            console.log(response);
            // TODO 1. set the source attribute of our image to the image_url of the GIF
            $("#gif").attr("hidden",false);
            $("#gif").attr("src",response.data.image_url)

        },
        error: function() {
            $("#feedback").text("Sorry, could not load GIF. Try again!");
            setGifLoadedStatus(false);
        },
         wait:function(){
             $("#feedback").text("Loading...please wait.");
             setGifLoadedStatus(false);
         }
    });
}
    else{
        $("#prove").text("No gifs for you!");
        setGifLoadedStatus(false);
    }

    // TODO     give the user a "Loading..." message while they wait

}
function setGifLoadedStatus(isCurrentlyLoaded) {
    $("#gif").attr("hidden", !isCurrentlyLoaded);
    $("#feedback").attr("hidden", isCurrentlyLoaded);
    $("#prove").attr("hidden", isCurrentlyLoaded);
}
