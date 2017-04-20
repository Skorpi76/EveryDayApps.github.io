//FORM 
function ActiveName(i) {
    //var name = document.getElementsByClassName("Myform")[0];
    var labelF = document.getElementsByClassName("label-form")[i];
    var input = document.getElementsByClassName("Myform")[i];
    labelF.style.color = "#CFCD35";
    input.setAttribute("style", "width: 100%; border: none!important; border-bottom: 2px solid #CFCD35!important; border-radius: 0px!important; padding-left: 10px; padding-bottom: 5px; margin-top: 5px;");
}

function NonActiveName(i) {
    var input = document.getElementsByClassName("Myform")[i];
    if (input.value == "") {
        document.getElementsByClassName("label-form")[i].style.color = "#CC3434";
    } else {
        document.getElementsByClassName("label-form")[i].style.color = "#eee";
    }
    input.setAttribute("style", "width: 100%; border: none!important; border-bottom: 2px solid white!important; border-radius: 0px!important; padding-left: 10px; padding-bottom: 5px; margin-top: 5px;");
}

function initMap() {
    var uluru = { lat: 43.78532, lng: -79.22795 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

$(document).ready(function() {
    setInterval(function() {
        $("#h3-home-text").transition({ x: -530, delay: 1500 }, 6000);
        $("#h3-home-text").transition({ x: 0, delay: 1500 }, 6000);
    }, 50)
});