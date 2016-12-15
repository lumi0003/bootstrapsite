function init() {
    let url = "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=AIzaSyAnzRtRaIlfvi6mModIC-fCch8pkL3vZ1U";
    fetch(url).then(function (response) {
        console.log("got it ", response.status)
        return response.json();
    }).then(function (data) {
        //console.dir(data);
        processData(data);
    }).catch(function (err) {
        console.log("Error");
        console.dir(err);
    });
}