
$(document).ready(function(){
    
})

function getWeather(searchQuery) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=imperial&appid=" + apiKey;

    $(".error-message").text("");
    $(".city").text("");
    $(".temp").text("");

    $.ajax(url, {
        success: function (data) {
            $(".city").text(data.name);
            $(".temp").text(data.main.temp);
        }, error: function (error) {
            $(".error-message").text("Please enter a valid city name");
            }
        })
}

function searchWeather() {
    var searchQuery  = $(".search").val();
    getWeather(searchQuery);
}

function handlesignin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}