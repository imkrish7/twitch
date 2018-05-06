const channelID = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
$(document).ready(function () {
    channelID.forEach(function (cur) {
        $.ajax({
            type: "GET",
            url: 'https://wind-bow.gomix.me/twitch-api/channels/' + cur + '?callback=?',
            headers: {
                'Client-ID': 'sarpnvyxpdig9nbm49vgnt1aovx4g5'
            },
            dataType: "json",
            success: function (data) {
                console.log(data.logo)
                if (data.status === null) {
                    $("#channel").append("<li class='list-group-item list card'><span><img class='rounded-circle 'src=" + data.logo + "></span><span class='text-uppercase'><a class='btn btn-outline-dark' href=" + data.url + ">" + cur + "</a></span><span class='online'>Offline</span></li>");
                } else {
                    //  console.log(data.url);
                    $("#channel").append("<li class='list-group-item list jumbotron card'><span><img class = 'rounded-circle'src=" + data.logo + "></span><span class='text-uppercase'><a class='btn btn-outline-dark' href=" + data.url + ">" + cur + "</a></span ><span class=' online'>" + data.status + "</span></li>");
                }
            }
        });
    });

})