function displayApps() {
    //var https = new splunkjs.ProxyHttp("/proxy");
    var http = new splunkjs.JQueryHttp();

    // Create a Service instance and log in
    var service = new splunkjs.Service(http, {
        username: "atikoo",
        password: "P@ssw0r2",
        scheme: "https",
        host: "127.0.0.1",
        port:"8089"
    });


    // Verify we logged in

    // Print installed apps to the console to verify login
    service.apps().fetch(function(err, apps) {
        if (err) {
            alert("Error listing apps");
            return;
        }

        var myapps = "";
        var appsList = apps.list();
        for(var i = 0; i < appsList.length; i++) {
            myapps += "App " + i + ": " + appsList[i].name + "<br/>"
        }

        document.getElementById("applist").innerHTML=myapps;
    });

}
