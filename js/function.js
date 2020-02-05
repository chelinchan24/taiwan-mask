mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlbGluY2hhbjI0IiwiYSI6ImNrM2FkdXo1dDAxYWUzbnFlM2o2ZTNudTEifQ.wmEvON86_LuzQUGIvDRslQ';
var map = new mapboxgl.Map({
    container: '地圖',
    style: 'mapbox://styles/chelinchan24/ck68yiap60je81iqtfne3pzvo',
    attributionControl: false
});

//取得 "?" 後面的字串
console.log(window.location.search);

// 產 Marker
var el = document.createElement('div');
el.className = 'marker';
el.style.backgroundImage = "url(https://i.imgur.com/MK4NUzI.png)";
el.style.width = '32px';
el.style.height = '40px';

el.addEventListener("click", function(){
    history.pushState('', '', "?@奇永藥局")
});

var marker = new mapboxgl.Marker(el)
    .setLngLat([121.243634, 24.973393])
    .addTo(map);
// camera
//CameraOptions, AnimationOptions
map.easeTo({center:{lon:121.243634, lat:24.973393}, zoom:13, duration:4000})

//更改版權位置
map.addControl(new mapboxgl.AttributionControl(), 'top-left');