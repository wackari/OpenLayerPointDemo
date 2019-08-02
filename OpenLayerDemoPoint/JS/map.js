var map = new ol.Map({
    target: 'mapdiv',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],

    view: new ol.View({
        center: ol.proj.fromLonLat([-128.22703,  56.10980]),
        zoom: 8.5
    })

});

var style = [
    new ol.style.Style({
        image: new ol.style.Icon(({
            scale: 0.7,
            rotateWithView: false,
            anchor: [0.5, 1],
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            opacity: 1,
            src: 'img\\marker.png'
        })),
        zIndex: 5
    }),
    new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: 'rgba(255,255,255,1)'
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(0,0,0,1)'
            })
        })
    })
];


var point = new ol.Feature({
    type: 'click',
    key: "point",
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([-128.22703,  56.10980]))
});

point.setStyle(style);
    
var vectorSource = new ol.source.Vector({
    features: [point]
  });
  var markerVectorLayer = new ol.layer.Vector({
    source: vectorSource,
});
  map.addLayer(markerVectorLayer);

  map.on('click', function(evt) {

    var f = map.forEachFeatureAtPixel(
           evt.pixel,
           function(ft, layer){return ft;}
       );
    
       if (f && f.get('type') == 'click' && f.get('key') == "point") {
           
        
        alert(f.get('key'));
           
    
        }
   
         else { }
    });