
function search() {
    let c = 0;
    let notFound = document.getElementById('notFound');
    let filter = document.getElementById('search').value.toUpperCase();
    let cards = document.getElementsByClassName('select');
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByClassName('card-title')[0];
        if (title) {
            let text = title.innerHTML.toUpperCase();
            if (text.indexOf(filter) > -1) {
                cards[i].hidden = false;
            }
            else {
                c++;
                cards[i].hidden = true;
            }

        }
    }
    if (c == cards.length)
        notFound.hidden = false;
    else
        notFound.hidden = true;
}
mapboxgl.accessToken = 'pk.eyJ1IjoiZ29vZGRheTIzNDU5IiwiYSI6ImNrbXFnb2l0ajBxNnEybnQ5M3p1YXBjZTQifQ.35ze5PJXpYxn2wTBx0m0nw';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [78.9629, 20.5937], // starting position [lng, lat]
    zoom: 3 // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}
/*var popup=new magboxgl.Popup()
        popup.setLngLat([-103.59179687498357, 40.66995747013945])
        .setHTML(`<h2>Hey There ! Whats up!!!</h2>`)
        .addTo(map);*/
async function countryData() {
    const response = await fetch("https://disease.sh/v3/covid-19/countries");
    const resp = response.json();
    resp.then(r => {
        //console.log(r[10]);
        for (let i = 0; i < r.length; i++) {
            //console.log(r[i].country);
            let long = r[i].countryInfo.long;
            let lat = r[i].countryInfo.lat;
            //let coordinates = { long, lat };
            let color = "", cases = r[i].cases;
            if (cases >= 1000000)
                color = "red";
            /*else if(cases<10000000 && cases>=5000000)
                color="rgb(232, 53, 62)";*/
            else if (cases < 1000000 && cases >= 700000)
                color = "rgb(232, 97, 104)";
            else if (cases < 7000000 && cases >= 500000)
                color = "rgb(186, 86, 93)";
            else if (cases < 500000 && cases >= 200000)
                color = "rgb(240, 122, 130)"
            else if (cases < 200000 && cases >= 100000)
                color = "rgb(219, 127, 133)"
            else if (cases < 100000 && cases >= 70000)
                color = "rgb(222, 149, 153)"
            else if (cases < 70000 && cases >= 50000)
                color = "rgb(214, 159, 162)"
            else
                color = "rgb(227, 172, 176)";
            new mapboxgl.Marker({
                color: color,
                draggable: false
            }).setLngLat([long, lat])
                .addTo(map);
        }
        map.on('click', function (e) {
            console.log('click', e.lngLat);
        })

    })
}
countryData();