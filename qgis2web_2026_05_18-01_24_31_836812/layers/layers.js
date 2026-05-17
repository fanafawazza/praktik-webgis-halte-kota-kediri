var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Batas_Administrasi_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_1 = format_Batas_Administrasi_1.readFeatures(json_Batas_Administrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_1.addFeatures(features_Batas_Administrasi_1);
var lyr_Batas_Administrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_1, 
                style: style_Batas_Administrasi_1,
                popuplayertitle: 'Batas_Administrasi',
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_1.png" /> Batas_Administrasi'
            });
var format_Halte_2 = new ol.format.GeoJSON();
var features_Halte_2 = format_Halte_2.readFeatures(json_Halte_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_2.addFeatures(features_Halte_2);
var lyr_Halte_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_2, 
                style: style_Halte_2,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_2.png" /> Halte'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_Batas_Administrasi_1.setVisible(true);lyr_Halte_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Batas_Administrasi_1,lyr_Halte_2];
lyr_Batas_Administrasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Halte_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', });
lyr_Batas_Administrasi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Halte_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_Batas_Administrasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Halte_2.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'Name': 'no label', 'REMARK': 'no label', });
lyr_Halte_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});