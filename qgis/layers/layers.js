var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_ProduksiPadiKabupatenDemak_0 = new ol.format.GeoJSON();
var features_ProduksiPadiKabupatenDemak_0 = format_ProduksiPadiKabupatenDemak_0.readFeatures(json_ProduksiPadiKabupatenDemak_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProduksiPadiKabupatenDemak_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ProduksiPadiKabupatenDemak_0.addFeatures(features_ProduksiPadiKabupatenDemak_0);var lyr_ProduksiPadiKabupatenDemak_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProduksiPadiKabupatenDemak_0, 
                style: style_ProduksiPadiKabupatenDemak_0,
    title: 'Produksi Padi Kabupaten Demak<br />\
    <img src="styles/legend/ProduksiPadiKabupatenDemak_0_0.png" /> Bonang<br />\
    <img src="styles/legend/ProduksiPadiKabupatenDemak_0_1.png" /> Demak<br />\
    <img src="styles/legend/ProduksiPadiKabupatenDemak_0_2.png" /> Dempet<br />\
    <img src="styles/legend/ProduksiPadiKabupatenDemak_0_3.png" /> Gajah<br />\
    <img src="styles/legend/ProduksiPadiKabupatenDemak_0_4.png" /> Guntur<br />\
    <img src="styles/legend/ProduksiPadiKabupatenDemak_0_5.png" /> Karanganyar<br />\
    <img src="styles/legend/ProduksiPadiKabupatenDemak_0_6.png" /> Karangawen<br />\
    <img src="styles/legend/ProduksiPadiKabupatenDemak_0_7.png" /> Karangtengah<br />\
    <img src="styles/legend/ProduksiPadiKabupatenDemak_0_8.png" /> Kebonagung<br />\
    <img src="styles/legend/ProduksiPadiKabupatenDemak_0_9.png" /> Mijen<br />\
    <img src="styles/legend/ProduksiPadiKabupatenDemak_0_10.png" /> Mranggen<br />\
    <img src="styles/legend/ProduksiPadiKabupatenDemak_0_11.png" /> Sayung<br />\
    <img src="styles/legend/ProduksiPadiKabupatenDemak_0_12.png" /> Wedung<br />\
    <img src="styles/legend/ProduksiPadiKabupatenDemak_0_13.png" /> Wonosalam<br />'
        });

lyr_ProduksiPadiKabupatenDemak_0.setVisible(true);
var layersList = [baseLayer,lyr_ProduksiPadiKabupatenDemak_0];
lyr_ProduksiPadiKabupatenDemak_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'data_Tambah Tanam': 'data_Tambah Tanam', 'data_Panen Kotor': 'data_Panen Kotor', 'data_Panen Bersih': 'data_Panen Bersih', 'data_Rata Rata': 'data_Rata Rata', 'data_Produksi Bersih': 'data_Produksi Bersih', });
lyr_ProduksiPadiKabupatenDemak_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'data_Tambah Tanam': 'TextEdit', 'data_Panen Kotor': 'TextEdit', 'data_Panen Bersih': 'TextEdit', 'data_Rata Rata': 'TextEdit', 'data_Produksi Bersih': 'TextEdit', });
lyr_ProduksiPadiKabupatenDemak_0.set('fieldLabels', {'Kecamatan': 'header label', 'data_Tambah Tanam': 'inline label', 'data_Panen Kotor': 'inline label', 'data_Panen Bersih': 'inline label', 'data_Rata Rata': 'inline label', 'data_Produksi Bersih': 'inline label', });
lyr_ProduksiPadiKabupatenDemak_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});